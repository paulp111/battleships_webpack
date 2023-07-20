(()=>{"use strict";var e={772:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(81),i=n.n(r),s=n(645),a=n.n(s),o=n(667),c=n.n(o),l=new URL(n(607),n.b),d=a()(i()),f=c()(l);d.push([e.id,`body {\n  background: url(${f}) no-repeat center center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\n#content {\n  max-width: 800px;\n  margin: auto;\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n  padding: 10px;\n}\n\nh1 { \n  color: #f2f3f4; \n  font-family: 'Raleway',sans-serif; \n  font-size: 50px; \n  font-weight: 800; \n  line-height: 72px; \n  margin: 0 0 24px; \n  text-align: center; \n  text-transform: uppercase; \n}\n\np {\n  color: #f2f3f4;\n  font-family: 'Raleway', sans-serif;\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 20px;\n  margin: 0 0 12px;\n  text-align: center\n}\nbutton {\n  padding: 15px 25px;\n  font-size: 24px;\n  text-align: center;\n  color: #fff;\n  background-color: #4CAF50;\n\n}\n\n#raster-container {\n  display: flex;\n  justify-content: space-around; \n  margin: 0 auto; \n}\n\n#spieler-raster, #computer-raster {\n  display: grid;\n  grid-template-columns: repeat(10, 0fr);\n  grid-gap: 2px;\n  margin-top: 20px;\n  margin-right: 10px; \n  margin-left: 10px; \n}\n\n.zelle {\n  width: 50px;\n  height: 50px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n#spieler-raster .zelle {\n  background-color: #90ee90;\n}\n\n#computer-raster .zelle {\n  background-color: red;\n}\n\n.schiff {\n  background-color: black !important;\n}\n\n.schiffHidden {\n  background-color: red !important;\n}\n\n\n.hit {\n  background-color: yellow !important;\n}\n\n.miss {\n  background-color: #ffffff !important;\n}\n`,""]);const h=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},a=[],o=0;o<e.length;o++){var c=e[o],l=r.base?c[0]+r.base:c[0],d=s[l]||0,f="".concat(l," ").concat(d);s[l]=d+1;var h=n(f),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var u=i(p,r);r.byIndex=o,t.splice(o,0,{identifier:f,updater:u,references:1})}a.push(f)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var s=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var o=n(s[a]);t[o].references--}for(var c=r(e,i),l=0;l<s.length;l++){var d=n(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},607:(e,t,n)=>{e.exports=n.p+"393ce037350613cb873a.jpg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),s=n(569),a=n.n(s),o=n(565),c=n.n(o),l=n(216),d=n.n(l),f=n(589),h=n.n(f),p=n(772),u={};u.styleTagTransform=h(),u.setAttributes=c(),u.insert=a().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=d(),t()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals;class m{constructor(e,t){this.name=e,this.groesse=t}}class g{constructor(e,t){this.gridSize=e,this.schiffe=t,this.contentDiv=document.querySelector("#content"),this.createPage(),this.canPlay=!1}createPage(){this.createHeader(),this.createMainContent(),this.createResetButton(),this.createRasterContainer(),this.createRaster()}createHeader(){const e=document.createElement("h1");e.textContent="Battleships",this.contentDiv.appendChild(e)}createMainContent(){["Place your Ships in the Grid","Guess where the enemy ships are and try to hit them"].forEach((e=>{const t=document.createElement("p");t.textContent=e,this.contentDiv.appendChild(t)}))}createResetButton(){const e=document.createElement("button");e.textContent="Reset Game",e.addEventListener("click",(()=>this.resetGame())),this.contentDiv.appendChild(e)}createRasterContainer(){this.rasterContainer=document.createElement("div"),this.rasterContainer.id="raster-container",this.contentDiv.appendChild(this.rasterContainer)}createRaster(){this.spielerRaster=this.createSpielerRaster("spieler-raster",[...this.schiffe],!0),this.rasterContainer.appendChild(this.spielerRaster),this.computerRaster=this.createSpielerRaster("computer-raster",[...this.schiffe],!1),this.rasterContainer.appendChild(this.computerRaster),this.spielerZellen=Array.from(this.spielerRaster.querySelectorAll(".zelle")),this.computerZellen=Array.from(this.computerRaster.querySelectorAll(".zelle"))}resetGame(){this.spielerRaster.remove(),this.computerRaster.remove(),this.createRaster(),this.canPlay=!1}createSpielerRaster(e,t,n){const r=document.createElement("div");r.id=e;let i=new Array(this.gridSize);for(let e=0;e<this.gridSize;e++)i[e]=new Array(this.gridSize);for(let e=0;e<this.gridSize;e++)for(let s=0;s<this.gridSize;s++){const a=document.createElement("div");a.className="zelle",a.dataset.zeile=e,a.dataset.spalte=s,i[e][s]=a,n?a.addEventListener("click",(()=>this.schiffPlatzieren(a,t,i))):a.addEventListener("click",(()=>{this.canPlay&&this.angreifen(a)})),r.appendChild(a)}return n||this.schiffeSetzen(t,i),r}schiffeSetzen(e,t){e.forEach((e=>{let n=!1;for(;!n;){const r=Math.floor(Math.random()*this.gridSize),i=Math.floor(Math.random()*this.gridSize);if(this.canPlace(e,r,i,t)){for(let n=0;n<e.groesse;n++)t[r][i+n].classList.add("schiffHidden");n=!0}}}))}schiffPlatzieren(e,t,n){if(e.classList.contains("schiff"))return;const r=t.shift();if(!r)return void(this.canPlay=!0);const i=parseInt(e.dataset.zeile),s=parseInt(e.dataset.spalte);if(this.canPlace(r,i,s,n))for(let e=0;e<r.groesse;e++)n[i][s+e].classList.add("schiff");else t.unshift(r)}canPlace(e,t,n,r){if(n+e.groesse>this.gridSize)return!1;for(let i=0;i<e.groesse;i++){const e=r[t][n+i];if(e&&e.classList.contains("schiff"))return!1}return!0}angreifen(e){e.classList.contains("hit")||e.classList.contains("miss")||(e.classList.contains("schiffHidden")?(e.classList.add("hit"),e.classList.remove("schiffHidden")):e.classList.add("miss"),this.computerZellen.some((e=>e.classList.contains("schiffHidden")))?this.computerAngreifen():(alert("Sie haben gewonnen!"),this.resetGame()))}computerAngreifen(){let e;do{const t=Math.floor(Math.random()*this.gridSize*this.gridSize);e=this.spielerZellen[t]}while(e.classList.contains("hit")||e.classList.contains("miss"));e.classList.contains("schiff")?(e.classList.add("hit"),e.classList.remove("schiff")):e.classList.add("miss"),this.gameEnd()}gameEnd(){const e=this.spielerRaster.querySelectorAll(".schiff").length,t=this.computerRaster.querySelectorAll(".schiffHidden").length;0!==e&&0!==t||(alert(0===e?"Der Computer hat gewonnen!":"Sie haben gewonnen!"),this.resetGame())}}window.addEventListener("load",(function(){const e=[new m("Zerstörer",1),new m("U-Boot",2),new m("Kreuzer",3),new m("Schlachtschiff",4),new m("Flugzeugträger",5)];new g(10,e)}))})()})();