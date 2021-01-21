(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{224:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("76f63255",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("1b7833da",content,!0,{sourceMap:!1})},226:function(t,e,n){"use strict";n.r(e);n(67),n(51),n(68),n(103),n(69),n(70),n(52),n(29);var o=n(6),r={name:"List",components:{},data:function(){return{filtered:[],loading:!1,pokemons:[],text:""}},computed:{searched:function(t){return this.text?this.filtered:this.pokemons}},methods:{openPokemon:function(t){this.$router.push({name:"about",params:{pokename:t}})},search:function(){var t=this;if(this.text.length>1){var e=this.$store.state.pokemons.filter((function(e){return e.name.includes(t.text.toLowerCase())}));this.filtered=e.slice(0,5)}else this.filtered=[]},giveImage:function(t){var e=this;t.forEach((function(t){e.$axios.$get(t.url).then((function(n){e.$set(t,"image",n.sprites.other["official-artwork"].front_default),e.$set(t,"type",n.types)}))}))}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,"https://pokeapi.co/api/v2/pokemon?limit=6",e.next=4,t.$axios.$get("https://pokeapi.co/api/v2/pokemon?limit=6");case 4:n=e.sent,t.pokemons=n.results,t.giveImage(t.pokemons);case 7:case"end":return e.stop()}}),e)})))()}},c=(n(229),n(34)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main container"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Search ..."},domProps:{value:t.text},on:{keyup:t.search,input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),n("div",{staticClass:"results"},t._l(t.filtered,(function(e){return n("ul",{key:e.id,staticClass:"list"},[n("li",{on:{click:function(n){return t.openPokemon(e)}}},[t._v(t._s(e.name))])])})),0)]),t._v(" "),t._l(t.pokemons,(function(e){return n("div",{key:e.id,staticClass:"pokecard",on:{click:function(n){return t.openPokemon(e)}}},[n("div",{staticClass:"poke-img"},[n("img",{attrs:{src:e.image,alt:""}})]),t._v(" "),n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),t._l(e.type,(function(e){return n("div",{key:e.id,class:e.type.name+" type"},[t._v("\n      "+t._s(e.type.name)+"\n    ")])}))],2)}))],2)}),[],!1,null,null,null);e.default=component.exports},229:function(t,e,n){"use strict";n(224)},230:function(t,e,n){(e=n(65)(!1)).push([t.i,".container{margin:0 auto;align-items:center;text-align:center}.main{max-width:850px;display:flex;flex-wrap:wrap;justify-content:space-evenly}.input{width:100%}.input .search-input{margin-top:20px;width:310px;height:47px;border-radius:30px;padding:0 20px;font-size:18px;outline:none;border:2px solid #e2e2e2;transition:all .25s ease-in-out}.input .search-input:focus{border:2px solid #1976d2}.input .results{width:300px;margin:5px auto;box-shadow:0 0 20px -10px #848484;border-radius:15px}.input .results .list{list-style:none;padding:0;text-align:left}.input .results li{padding:10px 20px;cursor:pointer}.input .results li:hover{background:#f0f8ff}.name{font-size:22px;width:100%;display:flex;justify-content:center;align-items:self-start;font-weight:500;color:#35495e}.name,.type{text-transform:capitalize}.type{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:3px 10px;color:#fff;border-radius:20px;font-size:14px;max-width:100px;margin-right:5px}.poke-img{margin:auto}.poke-img,img{width:200px}.pokecard{margin:20px 0;height:300px;width:230px;border-radius:20px;display:flex;justify-content:center;flex-wrap:wrap;box-shadow:0 0 20px 0 #d3d3d3}.normal{background:#a9a9a9;color:#fff}.grass{background:#87bfc4;color:#000}.fighting{background:#d56723}.flying{background:linear-gradient(180deg,#3dc7ef 50%,#bdb9b8 0)}.poison{background:#b97fc9}.ground{background:#a38c21}.rock{background:linear-gradient(180deg,#f7de3f 50%,#ab9842 0)}.bug{background:#82a751}.ghost{background:#7b62a3}.steel{background:#d9e2e5}.fire{background:#e27139}.water{background:#6d88b0}.electic{background:#f1d177}.psychic{background-color:#ff6dc2}.ice{background:#dbeefb}.dragon{background:linear-gradient(180deg,#53a4cf 50%,#f16e57 0)}.dark{background:#707070}.unknown{background:#5a43cd}.fairy{background-color:#fdb9e9}.shadow{background:#bababa}",""]),t.exports=e},231:function(t,e,n){"use strict";n(225)},232:function(t,e,n){(e=n(65)(!1)).push([t.i,'.container{margin:0 auto;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-size:45px;color:#35495e;letter-spacing:1px}.subtitle,.title{font-weight:300;margin:10px 0}.subtitle{font-size:40px;color:#526488;word-spacing:5px;text-align:center;text-transform:capitalize;padding:0}.links{padding-top:15px}',""]),t.exports=e},234:function(t,e,n){"use strict";n.r(e);n(226);var o={created:function(){this.$store.dispatch("getall")}},r=(n(231),n(34)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",[e("List")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{List:n(226).default})}}]);