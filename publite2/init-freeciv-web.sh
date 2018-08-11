#! /bin/bash
# starts freeciv-proxy and freeciv-web.
# This script is started by civlauncher.py in publite2.

if [ "$#" -ne 6 ]; then
  echo "init-freeciv-web.sh error: incorrect number of parameters." >&2
  exit 1
fi

echo "init-freeciv-web.sh port ${2}"

if [ $5 = "pbem" ]; then
   pbemcmd="--Ranklog /var/lib/tomcat8/webapps/data/ranklogs/rank_${2}.log "
fi

quitidle=" -q 20"
if [[ $6 == *"longturn"* ]]; then
  quitidle=" "
fi

export FREECIV_SAVE_PATH=${1};
rm -f /var/lib/tomcat8/webapps/data/scorelogs/score-${2}.log; 


if [ $5 = "singleplayer_cn" ]; then
  export LANG=zh_CN
  export LANGUAGE=zh_CN
else
  export LANG=en_US.UTF-8
  export LANGUAGE=en_US.UTF-8
fi

python3 ../freeciv-proxy/freeciv-proxy.py ${3} > ../logs/freeciv-proxy-${3}.log 2>&1 &
proxy_pid=$! && 
${HOME}/freeciv/bin/freeciv-web --debug=1 --port ${2} --keep ${quitidle} --Announce none -e  -m \
-M http://${4} --type ${5} --read pubscript_${6}.serv --log ../logs/freeciv-web-log-${2}.log \
--saves ${1} ${pbemcmd:- } > /dev/null 2> ../logs/freeciv-web-stderr-${2}.log;

rc=$?; 
kill -9 $proxy_pid; 
exit $rc
