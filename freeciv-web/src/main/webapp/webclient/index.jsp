<%@ page import="java.util.Properties" %>
<%@ page import="java.io.IOException" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String googleSigninClientKey = null;
String fcwHost = null;
try {
  Properties prop = new Properties();
  prop.load(getServletContext().getResourceAsStream("/WEB-INF/config.properties"));
  googleSigninClientKey = prop.getProperty("google-signin-client-key");
  fcwHost = prop.getProperty("fcw_host");
} catch (IOException e) {
  e.printStackTrace();
}
if (googleSigninClientKey == null) {
  googleSigninClientKey = "";
}
if (fcwHost == null || fcwHost.isEmpty()) {
  fcwHost = request.getServerName();
}
%>
<!DOCTYPE html>
<html>
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-121990025-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-121990025-1');
</script>

<title>Battle of Planet Isotrident</title>
<link rel="stylesheet" href="/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="/css/webclient.min.css?ts=${initParam.buildTimeStamp}" />
<meta name="description" content="Freeciv-Web is a Free and Open Source empire-building strategy game inspired by the history of human civilization.">
<% if (request.getServerName().equals(fcwHost)) { %>
<script type="text/javascript">window._trackJs = { token: 'ee5dba6fe2e048f79b422157b450947b' };</script>
<script type="text/javascript" src="https://cdn.trackjs.com/releases/current/tracker.js"></script>
<% } %>
<script type="text/javascript">
var ts="${initParam.buildTimeStamp}";
var fcw_host="<%= fcwHost %>";
</script>
<script type="text/javascript" src="/javascript/libs/jquery.min.js?ts=${initParam.buildTimeStamp}"></script>

<script src="https://apis.google.com/js/platform.js"></script>

<% if (request.getServerName().equals(fcwHost)) { %>
  <script type="text/javascript" src="/javascript/webclient.min.js?ts=${initParam.buildTimeStamp}"></script>
<% } else { %>
  <script type="text/javascript" src="/javascript/webclient.js?ts=${initParam.buildTimeStamp}"></script>
<% } %>

<script type="text/javascript" src="/music/audio.min.js"></script>

<c:if test="${not empty param.webgl_debug}" >
  <script> var gliEmbedDebug = true; </script> <script src="/javascript/webgl/libs/webgl-inspector/core/embed.js"></script>
</c:if>

<link rel="shortcut icon" href="/images/freeciv-shortcut-icon.png" />
<link rel="apple-touch-icon" href="/images/freeciv-splash2.png" />

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimal-ui" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

<meta name="google-signin-client_id" content="<%= googleSigninClientKey %>">
<link rel="manifest" href="/static/manifest.json">

<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async defer>
</script>
</head>

<body>
    <jsp:include page="pregame.jsp" flush="false"/>
    <jsp:include page="game.jsp" flush="false"/>
    
</body>

<script id="terrain_fragment_shh" type="x-shader/x-fragment">
  <jsp:include page="/javascript/webgl/shaders/terrain_fragment_shader.glsl" flush="false"/>
</script>

<script id="terrain_vertex_shh" type="x-shader/x-vertex">
  <jsp:include page="/javascript/webgl/shaders/terrain_vertex_shader.glsl" flush="false"/>
</script>

<script id="tex_fragment_shh" type="x-shader/x-fragment">
  <jsp:include page="/javascript/webgl/shaders/labels_fragment_shader.glsl" flush="false"/>
</script>

<script id="labels_vertex_shh" type="x-shader/x-vertex">
  <jsp:include page="/javascript/webgl/shaders/labels_vertex_shader.glsl" flush="false"/>
</script>

</html>
