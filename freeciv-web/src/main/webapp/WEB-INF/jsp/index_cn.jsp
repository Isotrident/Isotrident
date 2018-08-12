<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %> 
<%@ include file="/WEB-INF/jsp/fragments/i18n.jsp" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<%@include file="/WEB-INF/jsp/fragments/head.jsp"%>
	<script src="/javascript/libs/Detector.js"></script>
	<script src="/static/javascript/index.min.js"></script>
	<style>
	/* Make sure that the development tools used in freeciv are not to big */
	img.small {
		max-height: 40px;
	}
	/* 2D/3D teasers must remain within their container. */
	img.teaser {
		display: block;
		margin: auto;
		width: 100%;
	}
	.statistics { text-align: center; }

   /* Make lastest blog articles look less like a list.	*/
	ul.blog-post-summary { list-style-type: none; }
	ul.blog-post-summary > li {	margin-bottom: 5px;	}
	ul.blog-post-summary > li > a {
		color: #494A49;
		display: block;
	}
	ul.blog-post-summary > li > a:nth-of-type(1n) {	text-decoration: underline; }
	ul.blog-post-summary > li > a:nth-of-type(2n) {
		font-size: x-small;
		text-decoration: none;
	}
	/* Game launcher */          
	#game-launcher {
		width: 100%;
		margin: 0px;
		font-family: 'Open Sans', Helvetica;
	}
	#game-launcher .game-type {
		width: 100%;
		background: #fcf1e0;
		display: inline-table;
		top: 0;
	}
	#game-launcher .game-type:not(:last-child) { margin-right: 40px; }
	#game-launcher .header {
		color: #000000;
		font-family: 'Fredericka the Great', cursive;
		padding: 15px;
		margin-bottom: 0px;
		background-image: -webkit-linear-gradient(top, #fcf8e3 0, #f8efc0 100%);
		background-image: -o-linear-gradient(top, #fcf8e3 0, #f8efc0 100%);
		background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fcf8e3), to(#f8efc0));
		background-image: linear-gradient(to bottom, #fcf8e3 0, #f8efc0 100%);
		background-repeat: repeat-x;
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffcf8e3', endColorstr='#fff8efc0', GradientType=0);
		background-color: #fcf8e3;
		border: 1px solid transparent;
		border-radius: 4px 4px 0 0;
		border-bottom: 0;
		border-color: #f5e79e;
	}
	#game-launcher .name {
		width: 100%;
		font-size: 2em;
		display: block;
		text-align: center;
		padding: 2px 0 2px;
	}
	#game-launcher .features {
		list-style: none;
		text-align: center;               
		margin: 0;
		padding: 10px 0 0 0;                
		font-size: 0.9em;
	}
	#game-launcher .btn {
		display: inline-block;
		color: rgb(255, 255, 255);
		border: 0;
		border-radius: 5px;
		padding: 10px;
		width: 95%;
		display: block;
		font-weight: 700;
		font-size: 50px;
		text-transform: uppercase;
		margin: 20px auto 10px;
		background: #be602d;
   text-shadow:
    -0.5px -0.5px 0 #000,
    0.5px -0.5px 0 #000,
    -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
	}
	#game-launcher a.small { width: 130px;	}
	.multiplayer-games th:last-child { width: 100px; }
	.multiplayer-games a.label:last-child { margin-left: 3px; }
	.multiplayer-games .highlight { 
		color: green;
		font-weight: bold;
	}

	.videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
    }

	.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	}
	.jumbotron {
	padding-bottom: 0px;
	}
</style>
</head>
<body>
	<div class="container">
		<%@include file="/WEB-INF/jsp/fragments/header.jsp"%>

		<div class="jumbotron">
			<div class="row">

				<img src="/static/images/frontpage-wenmmig.png" alt="" style="width: 80%;">

			</div>
			<div class="container-fluid">
				<div class="row top-buffer-3">
				    <h1>&#x6587;&#x660E; Wenming.io <br>
			            &#x6E38;&#x620F;
			       </h1>
			    </div>
			</div>

		</div> <!-- end jumbotron -->

		<div id="game-launcher" class="row">

				<div class="col-md-12">
					<div class="game-type">

						<a id="single-button" href="/webclient/?action=new" class="btn">&#x65B0;&#x6E38;&#x620F;  </a>

						<a href="/webclient/?action=load&amp;scenario=true" class="btn">&#x60C5;&#x666F;&#x56FE;</a>

						<a href="/webclient/?action=new&renderer=webgl" class="btn" id="webgl_button">&#x65B0;&#x6E38;&#x620F;  3D</a>

						<a href="/game/list?v=multiplayer" class="btn">&#x591A;&#x4EBA;</a>

					</div>
				</div>
		</div> <!-- end game launcher -->



		<div class="row">
		    <br><br>
			<div class="col-md-6">
				<a  href="/webclient/?action=new"><img src="/static/images/fp-2d-small.png" alt="" style="width: 100%;"></a><br><br>
			</div>
			<div class="col-md-6">
				<a href="/webclient/?action=new&renderer=webgl" ><img src="/static/images/fp-webgl-small.png" alt="" style="width: 100%;"></a><br>
			</div>
		</div> 



		<!--<div class="row">
			<div class="col-md-12">
				<br><br>
				<iframe src="https://discordapp.com/widget?id=471270045855514624&theme=dark" width="100%" height="300" allowtransparency="true" frameborder="0"></iframe>
			</div>
		</div>-->


       <div class="row">
			<div class="col-md-12">
                <center>
                    <h3>Wenming.io can be played in English on <a href="https://www.isotrident.com">isotrident.com</a>.</h3>
			       </center>
			</div>
		</div>

        <div class="row">
			<div class="col-md-12">
                <center>
                    <h1>&#x6587;&#x660E;
			            Wenming.io &#x6E38;&#x620F;
			       </h1>
			       </center>
			</div>
		</div>




	</div>

</body>
</html>	
