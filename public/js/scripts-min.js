"use strict";var codeText=document.getElementById("code-text"),codeRender=document.getElementById("code-render");document.getElementById("button").addEventListener("click",function(t){var e=codeText.value;0<e.trim().length&&formatCode(e)});var formatCode=function(t){getPropertyOrValue(t)},convertCharacter=function(t,e){return"twoPoints"==e?"<span class=".concat(e,">").concat(t,"</span>"):"semicolon"==e||"bracket"==e?"<span class=".concat(e,">").concat(t,"</span><br>"):"selector"==e?"<span class=".concat(e,">").concat(t,"</span>"):void 0},getSelector=function(t){var e="",n=!0,r=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){if("."==a.value){var l=!0,i=!1,u=void 0;try{for(var d,s=t[Symbol.iterator]();!(l=(d=s.next()).done);l=!0){var f=d.value;if(" "==f)break;e+=f}}catch(t){i=!0,u=t}finally{try{l||null==s.return||s.return()}finally{if(i)throw u}}}}}catch(t){r=!0,o=t}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return e},getPropertyOrValue=function(t){console.log(t.split("}"))};