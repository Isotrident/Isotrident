<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span class="sr-only"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="/">
			<!--Logo font is: Liberation Sans Bold Italic -->

<!-- ${lang}
<%= request.getHeader("Host") %>
-->

            <c:if test = "${lang == 'en' || empty lang}">
                <img src="/static/images/brand.png" alt="Isotrident">
            </c:if>
            <c:if test = "${lang == 'cn'}">
                <img src="/static/images/brand_cn.png" alt="Wenming.io">
            </c:if>

		</a>
		</div>

		<!-- Collect the nav links, forms, and other panel-freeciv for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<ul class="nav navbar-nav">
			<li><a href="/webclient/?action=new">
			   <c:if test = "${lang == 'en' || empty lang}">
                    New game
                </c:if>
                <c:if test = "${lang == 'cn'}">
                    &#x65B0;&#x6E38;&#x620F;
                </c:if>

			</a></li>
			<li class="dropdown">
				<a href="/game/list?v=singleplayer" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
					<span onclick="window.location='/game/list?v=singleplayer'">

                   <c:if test = "${lang == 'en' || empty lang}">
                            Online games
                    </c:if>
                    <c:if test = "${lang == 'cn'}">
                            &#x6E38;&#x620F;
                   </c:if>



					</span>
					<c:if test = "${lang == 'en' || empty lang}">
					    <span class="caret"></span>
                    </c:if>
                    <span class="badge ongoing-games-number" id="ongoing-games" title="Ongoing games"></span>
				</a>
				<c:if test = "${lang == 'en' || empty lang}">
                    <ul class="dropdown-menu">
                        <li><a href="/game/list?v=singleplayer">Single-player</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="/game/list?v=multiplayer">Multiplayer</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="/game/list?v=multiplayer">One Turn per Day</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="/game/list?v=play-by-email">Play by Email</a></li>
                    </ul>
                </c:if>
			</li>
			<c:if test = "${lang == 'en' || empty lang}">
			    <li><a href="https://github.com/isotrident/isotrident">Contribute</a></li>
			</c:if>

			<c:if test = "${lang == 'en' || empty lang}">
			    <li><a href="https://discord.gg/GDtQnYe">Chat</a></li>
			  </c:if>
            <c:if test = "${lang == 'cn'}">
                 <li><a href="https://discord.gg/GDtQnYe">&#x804A;</a></li>
            </c:if>

			<c:if test = "${lang == 'en' || empty lang}">
			    <li><a href="http://www.wenming.io/">Chinese</a></li>
			  </c:if>
            <c:if test = "${lang == 'cn'}">
                 <li><a href="https://www.isotrident.com/" style="font-size: 50%;">English</a></li>
            </c:if>


			<%--<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" title="${pageContext.request.locale.language} ${pageContext.request.locale.country}">
					Language <span class="caret"></span>
				</a>
				<ul class="dropdown-menu">
					<li><a href="/?locale=en_US">English</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="/?locale=zh_CN">Simplified Chinese</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="/?locale=zh_TW">Traditional Chinese</a></li>
				</ul>
			</li>--%>
		</ul>



		</div><!-- end navbar-collapse -->
	</div><!-- end container-fluid -->
</nav> <!-- end nav -->
<script src="/static/javascript/header.min.js"></script>
<!--[if lt IE 8]>
	<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
