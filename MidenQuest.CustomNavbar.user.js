// ==UserScript==
// @name         MidenQuestCustomNavbar
// @namespace    https://github.com/Vibblez/MidenQuest
// @version      0.1.2
// @description  MidenQuest Enhancement Script
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuest.CustomNavbar.user.js
// @author       Vibblez
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @include      http://www.midenquest.com/Game.aspx
// @include      http://midenquest.com/Game.aspx
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    
    $("#TitleEmbedded").html('\
             <div class=\"drop\">\
				<ul class="drop_menu">\
					<li>\
						<a href="Home.aspx" target="_blank">Home</a>\
					</li>\
					<li>\
						<a href="https://www.reddit.com/r/MidenQuestOnline/" target="_blank">Subreddit</a>\
					</li>\
					<li>\
						<a href="Credits.aspx" target="_blank">Credits</a>\
					</li>\
					<li>\
						<a href="#">Help</a>\
							<ul>\
								<li>\
                           			<a href="FAQ.aspx" target="_blank">FAQ</a>\
                           		</li>\
								<li>\
                           			<a href="https://www.reddit.com/r/MidenQuestOnline/wiki/index">Wiki</a>\
								</li>\
							</ul>\
					</li>\
					<li>\
						<a href="#">Quick Links</a>\
							<ul>\
								<li>\
                             		<a href="#" onclick="sendRequestContentFill(\'getMarket.aspx?null=\')">Market</a>\
								</li>\
								<li>\
                             		<a href="#" onclick="sendRequestContentFill(\'getCustomize.aspx?null=\')">Customize/Sell</a>\
								</li>\
								<li>\
                             		<a href="#" onclick="sendRequestContentFill(\'getExpedition.aspx?null=\')">Inn</a>\
								</li>\
							</ul>\
					</li>\
				</ul>\
			</div>');

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }

        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('body > div:nth-child(2) { display: none; }');
    addGlobalStyle('.drop { height: 40px; } .drop_menu {  padding:0;	margin:0;	list-style-type:none;	height:40px;}.drop_menu li { float:left; z-index: 9999; padding-top: 5px; }.drop_menu li a {	padding:9px 20px;	display:block;	color:#fff;	text-decoration:none;	font:12px arial, verdana, sans-serif;}.drop_menu ul {	position:absolute;	left:-9999px;	top:-9999px;	list-style-type:none;}.drop_menu li:hover { position:relative; }.drop_menu li:hover ul {	left:0px;	top:30px;	background:#BFAD71;	padding:0px; margin-left;     border-left: 2px #000 solid;border-right: 2px #000 solid;border-bottom: 2px #000000 solid;}.drop_menu li:hover ul li a {	display:block;	width:100px }.drop_menu li:hover ul li a:hover { background:#005555; }');

})();