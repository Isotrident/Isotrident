#!/bin/sh
# Startup script for running all processes of Freeciv-web

SCRIPT_DIR="$(dirname "$0")"
cd "$(dirname "$0")"
export FREECIV_WEB_DIR="${SCRIPT_DIR}/.."
export FREECIV_DATA_PATH="${HOME}/freeciv/share/freeciv/"
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LANGUAGE=en_US.UTF-8

if [ ! -f ${SCRIPT_DIR}/configuration.sh ]; then
    echo "ERROR: configuration.sh not found. Copy configuration.sh.dist to configuration.sh and update it with your settings."
    exit 2
fi
. ./configuration.sh

echo "Starting up Freeciv-web: nginx, tomcat, publite2, freeciv-proxy."

mkdir -p ${FREECIV_WEB_DIR}/logs
sudo ln -f /etc/nginx/sites-available/freeciv-web /etc/nginx/sites-enabled/freeciv-web

# Start Freeciv-web's dependency services according to the users
# configuration.
./dependency-services-start.sh
if [ -n "${TOMCATMANAGER_USER}" ]; then
    if [ -z "${TOMCATMANAGER_PASSWORD}" ]; then
        echo "Please enter tomcat-manager password for ${TOMCATMANAGER_USER}"
        read TOMCATMANAGER_PASSWORD
    fi
    curl -LsSg -K - << EOF
url="http://${TOMCATMANAGER_USER}:${TOMCATMANAGER_PASSWORD}@localhost:8080/manager/text/start?path=/freeciv-web"
EOF
fi

#3. publite2
echo "Starting publite2" && \
(cd ${FREECIV_WEB_DIR}/publite2/ && \
sh run.sh) && \
echo "Publite2 started" && \
echo "Starting Freeciv-PBEM" && \
(cd ${FREECIV_WEB_DIR}/pbem/ && nohup python3 -u pbem.py > ../logs/pbem.log 2>&1) || echo "unable to start pbem" &

echo "starting meta-stats.py" && \
(cd ${FREECIV_WEB_DIR}/scripts/meta-stats && nohup python3 -u meta-stats.py > ../../logs/meta-stats.log 2>&1) || echo "unable to start meta-stats" &

echo "Starting Freeciv-Earth-mapgen." && \
cd ${FREECIV_WEB_DIR}/freeciv-earth/ && nohup python3 -u freeciv-earth-mapgen.py > ../logs/freeciv-earth.log 2>&1 || echo "unable to start freeciv-earth-mapgen" &

echo "Will sleep for 8 seconds, then do a status test..." && \
sleep 8 && \
sh ${FREECIV_WEB_DIR}/scripts/status-freeciv-web.sh
