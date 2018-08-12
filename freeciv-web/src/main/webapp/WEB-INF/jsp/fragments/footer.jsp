<footer>
	<p>
		 <c:if test = "${lang == 'en' || empty lang}">

            &copy; <fmt:message key="license-date" /> 2013-<script type="text/javascript">document.write(new Date().getFullYear());</script>.
        		<fmt:message key="license-open-source" /> <fmt:message key="license-freeciv-c" /> <a href="https://www.gnu.org/copyleft/gpl.html"> <fmt:message key="license-gpl" /></a> <fmt:message key="license-freeciv-web" /> <a href="http://www.gnu.org/licenses/agpl-3.0.html"><fmt:message key="license-agpl" /></a> <fmt:message key="license-end"/>.


        </c:if>
        <c:if test = "${lang == 'cn'}">
            <center>
               <h1>&#x6587;&#x660E;
                Wenming.io &#x6E38;&#x620F;
           </h1>
           </center>
        </c:if>
        </a>



	</p>
</footer>
