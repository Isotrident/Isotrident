WebGL renderer for Freeciv-web
==============================

This is the WebGL + Three.js renderer for Freeciv-web.

[Three.js](https://threejs.org/) is the 3D engine used in Freeciv-web.

Custom GLSL Fragment and Vertex shaders can be found in the shaders subdirectory. 

![Freeciv-web](https://raw.githubusercontent.com/freeciv/freeciv-web/develop/freeciv-web/src/main/webapp/javascript/webgl/freeciv-webgl.png "Freeciv-web WebGL screenshot")

The Blender 3D models can be found here: https://github.com/freeciv/freeciv-web/tree/develop/blender

Building and testing
--------------------
Build Freeciv-web as normal with Vagrant as described in the main README file.
You can then test it in your instance.

If you run a Freeciv-web server and have not removed WebGL support, tell us to list it here.

Debugging
---------
Add the URL parameter &webgl_debug=true to enable the WebGL-Inspector - https://github.com/benvanik/WebGL-Inspector

Developer: Andreas R�sdal [@andreasrosdal](http://www.twitter.com/andreasrosdal)
