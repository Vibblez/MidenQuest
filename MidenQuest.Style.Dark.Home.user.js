// ==UserScript==
// @name         MidenQuest - Dark Theme (Home)
// @namespace    https://github.com/Vibblez/MidenQuest
// @version      0.1
// @description  MidenQuest Enhancement Script
// @updateURL    https://raw.githubusercontent.com/Vibblez/MidenQuest/master/MidenQuest.Style.Dark.Home.user.js
// @author       Vibblez
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @include      http://www.midenquest.com/
// @include      http://midenquest.com/
// @include      http://www.midenquest.com/Home.aspx
// @include      http://midenquest.com/Home.aspx
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';

	$("body > div:nth-child(1)").removeAttr("style");
	$("body > div:nth-child(1) div").removeAttr("style");
	
    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
    }

    addGlobalStyle('body { background-color: #000 !important;  }'); 
    addGlobalStyle('a { color: #777 !important; text-decoration: none; }'); 
    addGlobalStyle('body > div:nth-of-type(1){ width: 800px;    height: 310px;    text-align: center;    margin: 10px auto;  }'); 
	addGlobalStyle('body > div:nth-of-type(1) > div:nth-of-type(1) {     display: inline-block;    margin-left: 10px;    width: 500px;    height: 300px;    padding: 2px;    margin: 5px;    background: #000 !important;    vertical-align: top;  overflow: auto;  box-shadow: #000 5px 2px 10px; }'); 
	addGlobalStyle('body > div:nth-of-type(1) > div:nth-of-type(1) > .ui-widget-content {    border: 1px solid #dddddd !important;    background: #333 !important;    color: #999 !important;    font-size: 12px;    padding: 5px; height: 288px !important;    overflow: auto; }'); 
	addGlobalStyle('body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) { font-weight: bolder; font-size: 20px; padding-bottom: 10px; }'); 
	addGlobalStyle('body > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) { padding-bottom: 10px; }'); 
	addGlobalStyle('body > div:nth-of-type(1) > div:nth-of-type(2){     display: inline-block;    margin: 5px;    width: 250px;    height: 300px;    padding: 2px;    background: #000 !important;    vertical-align: top;  }'); 
	addGlobalStyle('body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) { height:288px; padding: 5px;}'); 
	addGlobalStyle('body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > form > div:nth-of-type(1) { font-weight: bolder; font-size: 20px; padding-bottom: 10px; }'); 
	addGlobalStyle('body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > form > div:nth-of-type(2), body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > form > div:nth-of-type(3), body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > form > div:nth-of-type(4) { padding-bottom: 5px; }'); 
	addGlobalStyle('body > div:nth-of-type(2) { width: 800px; height: 450px; text-align: center;  margin: 10px auto; clear: both; }'); 
	addGlobalStyle('body > div:nth-of-type(2) > div { width: 30%;  margin: 5px; display: inline-block; height: 210px; background-color: #EEE; border-radius: 5px; vertical-align: top; }'); 
	
	addGlobalStyle('.ui-widget-content {  border: 1px solid #dddddd !important;    background: #333 !important;    color: #999 !important;'); 
	
	addGlobalStyle('.darkBtn { background: #343434 !important; border: 1px solid #FFFFFF !important; }');
	addGlobalStyle('.darkBtn:hover { background: #454545!important;    border: 1px solid #FFFFFF !important;    color: #FFFFFF !important; }');
	
})();
