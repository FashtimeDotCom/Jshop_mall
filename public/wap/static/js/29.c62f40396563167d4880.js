webpackJsonp([29],{WgyF:function(t,i){},bMQg:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("3cXf"),s=e.n(o),l=e("IHPB"),a=e.n(l),c={data:function(){return{page:1,pageSize:10,label:[{title:"综合",checked:!0,top:!1,bottom:!0,condition:""},{title:"销量",checked:!1,top:!1,bottom:!1,condition:"buy_count"},{title:"价格",checked:!1,top:!1,bottom:!1,condition:"price"}],icons:{top:"./static/image/graytop.png",topChecked:"./static/image/redtop.png",bottom:"./static/image/graybottom.png",bottomChecked:"./static/image/redbottom.png"},checkedFilter:0,filter:this.GLOBAL.getStorage("filter")?this.GLOBAL.getStorage("filter"):"",catId:this.$route.query.cat_id||0,brand:this.$route.query.brand,hot:this.$route.query.hot||0,keywords:this.$route.query.keywords||0,list:[]}},mounted:function(){var t=this;if(this.GLOBAL.getStorage("filter")){var i=this.GLOBAL.getStorage("filter").split(" ");this.label.forEach(function(e,o){e.condition===i[0]?(t.checkedFilter=o,e.checked=!0,"asc"===i[1]?e.top=!0:e.top=!1,"desc"===i[1]?e.bottom=!0:e.bottom=!1):(e.checked=!1,e.top=!1,e.bottom=!1)})}else this.label[0].checked=!0;this.goodsList()},methods:{clickFilter:function(t){var i=this;this.checkedFilter===t&&0!==t?(this.label[t].top=!this.label[t].top,this.label[t].bottom=!this.label[t].bottom):this.label.forEach(function(e,o){o===t?(i.checkedFilter=t,e.checked=!0,2===o?e.top=!0:e.bottom=!0):(e.checked=!1,e.top=!1,e.bottom=!1)});var e="";this.label[t].condition&&(e=this.label[t].top?" asc":" desc"),this.filter=this.label[t].condition+e,this.GLOBAL.setStorage("filter",this.filter),this.page=1,this.goodsList()},goodsList:function(){var t=this;this.$api.goodsList(this.conditions(),function(i){var e=i.data.list;t.list=[].concat(a()(e)),e.length<t.pageSize&&t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone"),t.page++})},loadMore:function(){var t=this;this.$api.goodsList(this.conditions(),function(i){var e=i.data.list;t.list=[].concat(a()(t.list),a()(e)),e.length<t.pageSize&&t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone"),t.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.finishLoad"),t.page++})},conditions:function(){var t={};this.catId?t={cat_id:this.catId}:this.hot?t={hot:this.hot}:this.keywords?t={search_name:this.keywords}:this.brand&&(t={brand_id:this.brand});var i={page:this.page,limit:this.pageSize,where:s()(t)};return this.filter&&(i.order=this.filter),i}},beforeRouteLeave:function(t,i,e){"/goodsdetail"!==t.path&&this.GLOBAL.removeStorage("filter"),e()}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"goodslist"},[t.list.length?e("div",{staticClass:"itembox"},[e("ul",t._l(t.label,function(i,o){return e("li",{key:o},[e("span",{class:{active:i.checked},on:{click:function(i){t.clickFilter(o)}}},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"sort-img"},[o?e("img",{staticClass:"top",attrs:{src:i.top?t.icons.topChecked:t.icons.top}}):t._e(),t._v(" "),e("img",{staticClass:"bottom",attrs:{src:i.bottom?t.icons.bottomChecked:t.icons.bottom}})])])}),0)]):t._e(),t._v(" "),e("yd-infinitescroll",{ref:"infinitescrollDemo",staticClass:"itemgoodslist",attrs:{callback:t.loadMore,distance:2,"scroll-top":!1}},[e("yd-list",{attrs:{slot:"list",theme:"4"},slot:"list"},t._l(t.list,function(i,o){return e("yd-list-item",{key:o,attrs:{type:"link",href:{path:"goodsdetail",query:{goods_id:i.id}}}},[e("img",{attrs:{slot:"img",src:i.image_url},slot:"img"}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(i.name))]),t._v(" "),e("yd-list-other",{attrs:{slot:"other"},slot:"other"},[e("div",[e("span",{staticClass:"demo-list-price"},[e("em",[t._v("¥")]),t._v(t._s(i.price))])])])],1)}),1)],1),t._v(" "),e("yd-backtop")],1)},staticRenderFns:[]};var n=e("C7Lr")(c,r,!1,function(t){e("WgyF")},null,null);i.default=n.exports}});
//# sourceMappingURL=29.c62f40396563167d4880.js.map