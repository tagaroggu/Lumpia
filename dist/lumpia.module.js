var e=/*#__PURE__*/function(){function e(e){(this.host=e).addController(this)}var t,n,r=e.prototype;return r.hostConnected=function(){this.isSupported&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",this.handleChange)},r.hostDisconnected=function(){this.isSupported&&window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.handleChange)},r.handleChange=function(e){var t=e.matches;this.isDark=t,this.isLight=!t,this.host.requestUpdate()},t=e,(n=[{key:"isSupported",get:function(){return!!window.matchMedia}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();export{e as lightDark};
//# sourceMappingURL=lumpia.module.js.map
