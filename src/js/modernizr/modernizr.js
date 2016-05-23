/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-canvas-cssanimations-csscolumns-csstransforms-csstransforms3d-flexbox-flexboxlegacy-inlinesvg-preserve3d-svgclippaths-svgfilters-svgforeignobject-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,o,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function o(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?w.className.baseVal=t:w.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function f(e,n,r,s){var o,a,f,d,u="modernizr",c=i("div"),p=l();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=s?s[r]:u+(r+1),c.appendChild(f);return o=i("style"),o.type="text/css",o.id="s"+u,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",d=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),a=n(c,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=d,w.offsetHeight):c.parentNode.removeChild(c),!!a}function d(e,t){return!!~(""+e).indexOf(t)}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var s;for(var o in e)if(e[o]in t)return n===!1?e[o]:(s=t[e[o]],r(s,"function")?u(s,n||t):s);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+p(t[s])+":"+r+")");return o=o.join(" or "),f("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,s,o){function l(){u&&(delete z.style,delete z.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var f=m(e,s);if(!r(f,"undefined"))return f}for(var u,c,p,g,v,h=["modernizr","tspan","samp"];!z.style&&h.length;)u=!0,z.modElem=i(h.shift()),z.style=z.modElem.style;for(p=e.length,c=0;p>c;c++)if(g=e[c],v=z.style[g],d(g,"-")&&(g=a(g)),z.style[g]!==n){if(o||r(s,"undefined"))return l(),"pfx"==t?g:!0;try{z.style[g]=s}catch(y){}if(z.style[g]!=v)return l(),"pfx"==t?g:!0}return l(),!1}function v(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+R.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?g(a,t,s,o):(a=(e+" "+N.join(i+" ")+i).split(" "),c(a,t,n))}function h(e,t,r){return v(e,n,n,t,r)}var y=[],C=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var w=t.documentElement,S="svg"===w.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("preserve3d",function(){var e=i("a"),t=i("a");e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",t.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(t),w.appendChild(e);var n=t.getBoundingClientRect();return w.removeChild(e),n.width&&n.width<4}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var b="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",b||T);var _={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(_.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(_.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))});var E=x.testStyles=f,k="Moz O ms Webkit",R=x._config.usePrefixes?k.split(" "):[];x._cssomPrefixes=R;var P=function(t){var r,s=prefixes.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var i=0;s>i;i++){var a=prefixes[i],l=a.toUpperCase()+"_"+r;if(l in o)return"@-"+a.toLowerCase()+"-"+t}return!1};x.atRule=P;var N=x._config.usePrefixes?k.toLowerCase().split(" "):[];x._domPrefixes=N;var A={elem:i("modernizr")};Modernizr._q.push(function(){delete A.elem});var z={style:A.elem.style};Modernizr._q.unshift(function(){delete z.style}),x.testAllProps=v,x.testAllProps=h,Modernizr.addTest("cssanimations",h("animationName","a",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=h("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=h("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||h(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",h("boxDirection","reverse",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!h("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in w.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",E(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e});var O=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=a(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("backgroundblendmode",O("backgroundBlendMode","text")),s(),o(y),delete x.addTest,delete x.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);