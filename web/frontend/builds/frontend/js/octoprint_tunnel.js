(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={octoprint_tunnel:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static/frontend/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([7,"chunk-vendors"]),n()})({"09e2":function(t,e,n){},1807:function(t,e,n){"use strict";n("99af");e["a"]={printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(){return"/api/v1/gcodes/"},tunnelUsage:function(){return"/api/v1/tunnelusage/"},printerDelete:function(t){return"/printers/".concat(t,"/delete/")},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWS:function(t){return"/ws/web/".concat(t,"/")},printerSharedWS:function(t){return"/ws/share_token/web/".concat(t,"/")}}},"32dc":function(t,e,n){"use strict";var r=n("09e2"),a=n.n(r);a.a},"3c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(t,e){var n=localStorage.getItem(t)||e;try{return JSON.parse(n)}catch(r){return n}},a=function(t,e){return localStorage.setItem(t,e)}},6368:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=n("f357"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t.isPro?t._e():n("div",{staticClass:"text-center pb-2"},[t._m(1),t._v(" "),n("span",{class:t.usageClass},[t._v(t._s(t.usageMTD)+"/"+t._s(t.humanizedUsageCap))]),t.overage?n("div",[t._v("Your month-to-date tunneling usage is over the Free plan limit. Upgrade to the Pro plan to "),n("a",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button",href:"/ent/pricing/"}},[t._v("Get Unlimited Usage")])]):t._e()]),n("div",[t.printerId?n("iframe",{staticStyle:{width:"100%",height:"1400px",background:"#FFFFFF"},attrs:{src:t.iframeUrl()}}):t._e()])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"text-center p-2"},[n("i",{staticClass:"fas fa-lock"}),t._v(" OctoPrint Secure Tunnel "),n("i",{staticClass:"fas fa-lock"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-muted"},[t._v("Month-To-Date Usage/Free Limit("),n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-free-to-all-users"}},[t._v("?")]),t._v("):")])}],s=(n("a9e3"),n("bc3a")),c=n.n(s),u=n("49d5"),l=n.n(u),p=n("1807"),f={name:"OctoPrintTunnelPage",props:{printerId:{type:Number},isPro:{type:Boolean},usageCap:{type:Number}},data:function(){return{bytesMTD:null}},computed:{usageClass:function(){return{"text-success":this.bytesMTD<.8*this.usageCap,"text-warning":this.bytesMTD>=.8*this.usageCap&&this.bytesMTD<this.usageCap,"text-danger":this.bytesMTD>=this.usageCap}},usageMTD:function(){return l()(this.bytesMTD)},humanizedUsageCap:function(){return l()(this.usageCap)},overage:function(){return this.bytesMTD>=this.usageCap}},mounted:function(){this.$swal.DismissableToast({html:'<div class="p-1">It may take long time for OctoPrint page to load as it is securely tunneled via The Spaghetti Detective server.</div><div class="p-1"><a target="_blank" href="https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-secure">Learn more about OctoPrint Tunneling\'s security and page load speed. <i class="fas fa-external-link-alt"></i></a></div>',customClass:{container:"dark-backdrop"}},"octoprint-tunnel.warning");var t=this,e=function(){c.a.get(p["a"].tunnelUsage()).then((function(e){t.bytesMTD=e.data.total}))};setInterval(e,15e3),e()},methods:{iframeUrl:function(){return"/octoprint/".concat(this.printerId,"/")}}},d=f,h=(n("32dc"),n("2877")),v=Object(h["a"])(d,o,i,!1,null,"06bfd314",null),g=v.exports;r["default"].use(a["a"]),new r["default"]({components:{OctoPrintTunnelPage:g}}).$mount("#octoprint-tunnel-mount")},7:function(t,e,n){t.exports=n("6368")},f357:function(t,e,n){"use strict";var r=n("f3f3"),a=n("a026"),o=n("5886"),i=n("3c33"),s=function(t,e,n){var o=document.createElement("div"),i=new a["default"]({render:function(n){return n(t,{props:e})}}).$mount(o);return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(i.$el)},onDestroy:function(){i.$destroy(),o.remove()}}))},c=function(t,e,n){return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},u=function(t,e){t.use(o["a"],e);var n=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),a=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),u=function(e,n){if(!Object(i["a"])(n,!1)){var a=Object(r["a"])(Object(r["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(a).then((function(t){t.value&&(Object(i["b"])(n,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=s,t.prototype.$swal["openModalWithElement"]=c,t.prototype.$swal["Confirm"]=n,t.prototype.$swal["Toast"]=a,t.prototype.$swal["DismissableToast"]=u};e["a"]={install:u}}});
//# sourceMappingURL=octoprint_tunnel.js.map