/**********************************************************************
    Freeciv-web - the web version of Freeciv. http://play.freeciv.org/
    Copyright (C) 2009-2017  The Freeciv-web project

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

***********************************************************************/

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vPosition_camera;
varying vec3 vColor;

void main()
{
  vUv = uv;

  if (color.r == 0.0 &&  position.y < 54.0) {
    // hidden water tile, move the black terrain landscape above the water plane.
    vec4 mvPosition = modelViewMatrix * vec4( position.x, 54.0, position.z , 1.0 );
    gl_Position = projectionMatrix * mvPosition;
  } else {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;
  }
  vPosition_camera = gl_Position.xyz;
  vNormal = normal;
  vPosition = position;
  vColor = color;
}