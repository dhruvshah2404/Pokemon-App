(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,5],{328:function(t,e,r){var content=r(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(88).default)("ab9c82e6",content,!0,{sourceMap:!1})},329:function(t,e,r){"use strict";r.r(e);r(226);var n={name:"pagination",props:{currentPage:Number},computed:{total:function(){return Math.ceil(this.$store.state.pagination.count/this.items)},items:function(){return this.$store.state.limit}},data:function(){return{page:1}},methods:{changePage:function(t){var e=(t-1)*this.items;this.$emit("changePage",{offset:e,page:t})},previous:function(t){this.$emit("previous",t)}},mounted:function(){this.page=parseInt(this.$route.query.page)}},o=(r(330),r(51)),c=r(332),l=r.n(c),d=r(357),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("v-pagination",{attrs:{length:t.total,"total-visible":7,circle:""},on:{input:t.changePage,previous:t.previous},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VPagination:d.a})},330:function(t,e,r){"use strict";r(328)},331:function(t,e,r){var n=r(87)(!1);n.push([t.i,".text-center{margin:20px 0}.theme--light.v-pagination .v-pagination__item--active{background:#9370db}",""]),t.exports=n},333:function(t,e,r){var content=r(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(88).default)("76f63255",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";r(333)},337:function(t,e,r){var n=r(87)(!1);n.push([t.i,".pokemons-list{max-width:850px;padding-top:80px;min-height:calc(100vh - 252px);grid-row-gap:80px;row-gap:80px;margin:0 auto;align-items:center;text-align:center;display:flex;flex-wrap:wrap;justify-content:space-evenly}.input{position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto}.input .search-input{margin-top:20px;width:310px;height:47px;border-radius:30px;padding:0 20px;font-size:18px;outline:none;border:2px solid #e2e2e2;transition:all .25s ease-in-out}.input .search-input:focus{border:2px solid #1976d2}.input .results{position:absolute;width:300px;margin:5px auto;box-shadow:0 0 20px 0 #d3d3d3;border-radius:15px;background:hsla(0,0%,100%,.52157);z-index:2;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}.input .results .list{list-style:none;padding:0;text-align:left}.input .results .list:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.input .results .list:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.input .results .list:hover{background:#9370db;color:#fff}.input .results li{padding:10px 20px;cursor:pointer}.name{font-size:18px;width:100%;display:flex;justify-content:center;align-items:self-start;font-weight:500;color:#35495e;bottom:63px}.name,.type{text-transform:capitalize;position:absolute}.type{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:3px 10px;color:#fff;border-radius:20px;font-size:14px;max-width:100px;margin-right:5px;bottom:22px}.poke-img{width:200px;margin:auto;position:absolute;top:-65px}.poke-img img{width:200px;transition:1s}.pokecard{height:230px;width:230px;position:relative;cursor:pointer;border-radius:44px;display:flex;justify-content:center;flex-wrap:wrap;box-shadow:0 0 20px 0 #d3d3d3;transition:border .5s ease-in-out}.pokecard:hover{border:3px solid #9370db}.pokecard:hover img{width:210px}.normal{background:#a9a9a9;color:#fff}.grass{background:#87bfc4;color:#000}.fighting{background:#d56723}.flying{background:linear-gradient(180deg,#3dc7ef 50%,#bdb9b8 0)}.poison{background:#b97fc9}.ground{background:#a38c21}.rock{background:linear-gradient(180deg,#f7de3f 50%,#ab9842 0)}.bug{background:#82a751}.ghost{background:#7b62a3}.steel{background:#d9e2e5}.fire{background:#e27139}.water{background:#6d88b0}.electric{background:#f1d177}.psychic{background-color:#ff6dc2}.ice{background:#dbeefb}.dragon{background:linear-gradient(180deg,#53a4cf 50%,#f16e57 0)}.dark{background:#707070}.unknown{background:#5a43cd}.fairy{background-color:#fdb9e9}.shadow{background:#bababa}",""]),t.exports=n},338:function(t,e,r){var content=r(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(88).default)("e003f1f8",content,!0,{sourceMap:!1})},339:function(t,e,r){var n=r(87)(!1);n.push([t.i,".v-progress-circular{position:relative;display:inline-flex;vertical-align:middle;justify-content:center;align-items:center}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate>svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay,.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg{-webkit-animation-play-state:paused!important;animation-play-state:paused!important}.v-progress-circular__info{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{stroke:hsla(0,0%,62%,.4);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;transition:all .6s ease-in-out}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@-webkit-keyframes progress-circular-rotate{to{transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{transform:rotate(1turn)}}",""]),t.exports=n},340:function(t,e,r){"use strict";r.r(e);var n=r(17),o=r(22),c=(r(68),r(71),r(25),r(89),r(39),r(8),r(69),r(70),r(34),r(52),r(32),{name:"List",components:{Pagination:r(329).default},data:function(){var t;return t={filtered:[],loading:!1,pokemons:[],text:""},Object(o.a)(t,"loading",!0),Object(o.a)(t,"page",1),t},computed:{searched:function(t){return this.text?this.filtered:this.pokemons},items:function(){return this.$store.state.limit}},methods:{changePage:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,link,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.page,e.page=n,o=t.offset,e.loading=!0,e.$router.push("?page=".concat(n)),link="https://pokeapi.co/api/v2/pokemon?limit=12&&offset=".concat(o),r.next=8,e.$axios.$get(link);case 8:c=r.sent,e.pokemons=c.results,e.$store.commit("setPokemon",c),e.giveImage(e.pokemons),setTimeout((function(){e.loading=!1}),1e3);case 13:case"end":return r.stop()}}),r)})))()},next:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,r=t.$store.state.pagination.next,e.next=4,t.$axios.$get(r);case 4:n=e.sent,t.pokemons=n.results,t.$store.commit("setPokemon",n),t.giveImage(t.pokemons),t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},previous:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,r=t.$store.state.pagination.previous,e.next=4,t.$axios.$get(r);case 4:n=e.sent,t.pokemons=n.results,t.$store.commit("setPokemon",n),t.giveImage(t.pokemons),t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},openPokemon:function(t){var e=t.split("/")[6];this.$router.push({name:"about",query:{id:e}})},search:function(){var t=this;if(this.text.length>1){var e=this.$store.state.pokemons.filter((function(e){return e.name.includes(t.text.toLowerCase())}));this.filtered=e.slice(0,5)}else this.filtered=[]},giveImage:function(t){var e=this;t.forEach((function(t){e.$axios.$get(t.url).then((function(r){e.$set(t,"image",r.sprites.other["official-artwork"].front_default),e.$set(t,"type",r.types)}))}))}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,link,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.page=t.$route.query.page,r=t.$route.query.page,link="",r?(n=(r-1)*t.items,link="https://pokeapi.co/api/v2/pokemon?limit=12&&offset=".concat(n)):link="https://pokeapi.co/api/v2/pokemon?limit=12",e.next=7,t.$axios.$get(link);case 7:o=e.sent,t.pokemons=o.results,t.giveImage(t.pokemons),setTimeout((function(){t.loading=!1}),1e3);case 11:case"end":return e.stop()}}),e)})))()}}),l=(r(336),r(51)),d=r(332),f=r.n(d),h=(r(226),r(40),r(338),r(335)),m=r(334),v=r(20),x=m.a.extend({name:"v-progress-circular",directives:{intersect:h.a},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(v.c)(this.calculatedSize),width:Object(v.c)(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,r){this.isVisible=r}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list-container"},[r("div",{staticClass:"input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Search ..."},domProps:{value:t.text},on:{keyup:t.search,input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),r("div",{staticClass:"results"},t._l(t.filtered,(function(e){return r("ul",{key:e.id,staticClass:"list"},[r("li",{on:{click:function(r){return t.openPokemon(e.url)}}},[t._v(t._s(e.name))])])})),0)]),t._v(" "),r("div",{staticClass:"pokemons-list"},[t.loading?r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}}):t._l(t.pokemons,(function(e){return r("div",{key:e.id,staticClass:"pokecard",on:{click:function(r){return t.openPokemon(e.url)}}},[r("div",{staticClass:"poke-img"},[r("img",{attrs:{src:e.image,alt:""}})]),t._v(" "),r("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.type,(function(e){return r("div",{key:e.id,class:e.type.name+" type"},[t._v("\n        "+t._s(e.type.name)+"\n      ")])}))],2)}))],2),t._v(" "),r("pagination",{on:{next:t.next,changePage:t.changePage}})],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{Pagination:r(329).default}),f()(component,{VProgressCircular:x})},344:function(t,e,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(88).default)("500d28b6",content,!0,{sourceMap:!1})},353:function(t,e,r){"use strict";r(344)},354:function(t,e,r){var n=r(87)(!1);n.push([t.i,".container{margin:0 auto;align-items:center;text-align:center;padding-top:100px}.subtitle{font-weight:300;font-size:40px;color:#526488;word-spacing:5px;text-align:center;text-transform:capitalize;margin:10px 0;padding:0}.links{padding-top:15px}",""]),t.exports=n},359:function(t,e,r){"use strict";r.r(e);r(340);var n={components:{Pagination:r(329).default},created:function(){this.$store.dispatch("getall")}},o=(r(353),r(51)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("List")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{List:r(340).default})}}]);