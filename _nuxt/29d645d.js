(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(t,e,o){"use strict";o.r(e);var n={},r=(o(286),o(51)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar"},[o("h1",{staticClass:"title"},[t._v("Pokemon App")])])}],!1,null,null,null);e.default=component.exports},205:function(t,e,o){var content=o(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("78105979",content,!0,{sourceMap:!1})},206:function(t,e,o){var content=o(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(88).default)("56b15182",content,!0,{sourceMap:!1})},225:function(t,e,o){"use strict";var n={components:{Navbar:o(152).default}},r=(o(288),o(51)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("navbar"),t._v(" "),o("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:o(152).default})},230:function(t,e,o){o(231),t.exports=o(232)},286:function(t,e,o){"use strict";o(205)},287:function(t,e,o){var n=o(87)(!1);n.push([t.i,'.navbar{text-align:center;text-transform:capitalize;font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;position:fixed;width:100%;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);box-shadow:0 0 4px -2px #35495e;z-index:10}.title{font-weight:300;font-size:45px;padding:10px 0;color:#35495e;letter-spacing:1px}',""]),t.exports=n},288:function(t,e,o){"use strict";o(206)},289:function(t,e,o){var n=o(87)(!1);n.push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),t.exports=n},290:function(t,e,o){"use strict";o.r(e),o.d(e,"strict",(function(){return r})),o.d(e,"state",(function(){return c})),o.d(e,"mutations",(function(){return l})),o.d(e,"actions",(function(){return f}));var n=o(17),r=(o(68),!1),c=function(){return{pokemons:[],totalPokemons:0,pagination:{count:0},limit:12}},l={setPokemon:function(t,e){t.pokemons=e.results,t.pagination=e}},f={getall:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n,r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.commit,o.next=3,e.$axios.$get("https://pokeapi.co/api/v2/pokemon?limit=100000");case 3:r=o.sent,n("setPokemon",r);case 6:case"end":return o.stop()}}),o)})))()}}}},[[230,8,2,9]]]);