(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-user"],{"258a":function(t,e,i){"use strict";i.r(e);var n=i("259e"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"259e":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("4693")),o=i("2b71"),s=i("4289"),r={components:{jihaiCopyright:a.default},mixins:[o.checkLogin],data:function(){return{orderItems:{freeze:{name:"冻结金额",nums:"0"},settlement:{name:"已结算金额",nums:"0"},current_month_order:{name:"本月订单数",nums:"0"}},utilityMenus:{invite:{name:"我的邀请",icon:"/static/image/ic-me-invite.png",router:"../invite/list"},order:{name:"推广订单",icon:"/static/image/extension_order.png",router:"./order"},balance:{name:"我的佣金",icon:"/static/image/ic-me-balance.png",router:"../balance/details?status=5"},my_store:{name:"我的店铺",icon:"/static/image/my_store.png",router:"./my_store"},store_setting:{name:"店铺设置",icon:"/static/image/me-ic-set.png",router:"./store_setting"}},info:{}}},onShow:function(){var t=this;"1"!=t.$store.state.config.distribution_store&&(delete this.utilityMenus.my_store,delete this.utilityMenus.store_setting),t.$api.getDistributioninfo({},function(e){e.status?(t.info=e.data,1!=e.data.verify&&t.$common.redirectTo("/pages/member/distribution/index"),t.orderItems.freeze.nums=t.info.freeze_amount,t.orderItems.settlement.nums=t.info.settlement_amount,t.orderItems.current_month_order.nums=t.info.current_month_order,"1"==t.$store.state.config.distribution_store&&(t.utilityMenus.my_store.router="./my_store?store="+t.info.store)):t.$common.errorToShow(e.msg)})},methods:{navigateToHandle:function(t){this.$common.navigateTo(t)},orderNavigateHandle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.hasLogin)return this.checkIsLogin();this.$store.commit("orderTab",e),this.$common.navigateTo(t)},goAfterSaleList:function(){if(!this.hasLogin)return this.checkIsLogin();this.$common.navigateTo("../after_sale/list")},createPoster:function(){var t=this,e={type:4,id:this.info.store},i=getCurrentPages(),n=(i[i.length-1],"/pages/share/jump");e.source=1,e.return_url=s.apiBaseUrl+"wap/"+n;var a=this.$db.get("userToken");a&&(e.token=a),this.$api.createPoster(e,function(e){e.status?t.$common.navigateTo("/pages/share?poster="+e.data):t.$common.errorToShow(e.msg)})}},onShareAppMessage:function(){var t=this.myShareCode?this.myShareCode:"",e=this.$common.shareParameterDecode("type=3&invite="+t),i="/pages/share/jump?scene="+e;return{title:this.$store.state.config.share_title,imageUrl:this.$store.state.config.share_image,path:i}}};e.default=r},"2b71":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.tools=e.checkLogin=e.jumpBackPage=e.goBack=e.goods=e.orders=void 0;var a=n(i("a4bb")),o={mounted:function(){},methods:{orderDetail:function(t){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+t)},toPay:function(t){this.$common.navigateTo("/pages/goods/payment/index?order_id="+t+"&type=1")},toEvaluate:function(t){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+t)},showExpress:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=encodeURIComponent("code="+t+"&no="+e+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+n)}}};e.orders=o;var s={mounted:function(){},methods:{goodsDetail:function(t){this.$common.navigateTo("/pages/goods/index/index?id="+t)},goodsList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="/pages/classify/index";(0,a.default)(t).length&&(e=this.$common.builderUrlParams(e,t)),this.$common.navigateTo(e)},groupDetail:function(t,e){this.$common.navigateTo("/pages/goods/index/group?id="+t+"&group_id="+e)},pintuanDetail:function(t,e){e?this.$common.navigateTo("/pages/goods/index/pintuan?id="+t+"&team_id="+e):this.$common.navigateTo("/pages/goods/index/pintuan?id="+t)}}};e.goods=s;var r={onBackPress:function(t){if("navigateBack"===t.from)return!1;var e=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return e.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0}};e.goBack=r;var c={methods:{handleBack:function(){var t=this.$store.state.redirectPage;this.$store.commit({type:"redirect",page:""});var e=["/pages/index/index","/pages/member/index/index"];e.indexOf(t)>-1?uni.switchTab({url:t}):t?uni.redirectTo({url:t}):uni.switchTab({url:"/pages/index/index"})}}};e.jumpBackPage=c;var u={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录!",icon:"none",duration:800,success:function(t){setTimeout(function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})},800)}})}}};e.checkLogin=u;var d={methods:{copyData:function(t){var e=this;uni.setClipboardData({data:t,success:function(){e.$common.errorToShow("复制成功")}})}}};e.tools=d},"392f":function(t,e,i){"use strict";var n=i("7f97"),a=i.n(n);a.a},4693:function(t,e,i){"use strict";i.r(e);var n=i("9a45"),a=i("6418");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("392f");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"1e031ba0",null);e["default"]=r.exports},"4be7":function(t,e,i){"use strict";var n=i("c955"),a=i.n(n);a.a},"4c38":function(t,e,i){"use strict";i.r(e);var n=i("d85f"),a=i("258a");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("4be7");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"323d903a",null);e["default"]=r.exports},6418:function(t,e,i){"use strict";i.r(e);var n=i("fa99b"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"7f97":function(t,e,i){var n=i("894b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6325bfb9",n,!0,{sourceMap:!1,shadowMode:!1})},"88c7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".member-top[data-v-323d903a]{position:relative;width:100%;height:%?340?%;background-color:#ff7159}.bg-img[data-v-323d903a]{position:absolute;width:100%;height:100%}.member-top-c[data-v-323d903a]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.user-head-img[data-v-323d903a]{display:block;width:%?160?%;height:%?160?%;border-radius:50%;overflow:hidden;background-color:hsla(0,0%,100%,.7)}.user-name[data-v-323d903a]{font-size:%?30?%;color:#fff}.member-grid[data-v-323d903a]{background-color:#fff;border-top:%?2?% solid #eee;padding:%?20?% 0}.margin-cell-group[data-v-323d903a]{margin:%?20?% 0;color:#666}.badge[data-v-323d903a]{left:%?80?%;top:%?-6?%}uni-button.cell-item-hd[data-v-323d903a]{background-color:#fff;padding:0;line-height:1.4;color:#333}uni-button.cell-item-hd[data-v-323d903a]:after{border:none}.login-btn[data-v-323d903a]{color:#fff;width:%?160?%;height:%?50?%;line-height:%?50?%;border-radius:%?25?%;background:#ff7159;font-size:12px;margin-top:%?16?%}",""])},"894b":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".cpr[data-v-1e031ba0]{text-align:center;font-size:%?24?%;margin:%?20?% 0}",""])},"9a45":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cpr"},[i("v-uni-view",{staticClass:"color-9"},[t._v("吉海科技 © jihainet.com")]),i("v-uni-view",{staticClass:"color-9"},[t._v("版权所有")])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},c955:function(t,e,i){var n=i("88c7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("499340ed",n,!0,{sourceMap:!1,shadowMode:!1})},d85f:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"member-top"},[i("v-uni-view",{staticClass:"member-top-c"},[i("v-uni-view",{staticClass:"fsz50 color-f"},[t._v(t._s(t.info.total_settlement_amount))]),i("v-uni-view",{staticClass:"fsz26 color-d"},[t._v("累计收入")])],1)],1),i("v-uni-view",{staticClass:"member-grid"},t._l(t.orderItems,function(e,n){return i("v-uni-view",{key:n,staticClass:"member-item"},[i("v-uni-text",{staticClass:"member-item-text"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"color-o fsz38"},[t._v(t._s(e.nums))])],1)}),1),i("v-uni-view",{staticClass:"cell-group margin-cell-group right-img"},[t._l(t.utilityMenus,function(e,n){return i("v-uni-view",{key:n,staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(i){i=t.$handleEvent(i),t.navigateToHandle(e.router)}}},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:e.icon}}),i("v-uni-view",{staticClass:"cell-hd-title"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)}),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(e){e=t.$handleEvent(e),t.createPoster()}}},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"/static/image/extension.png"}}),i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("我要推广")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/right.png"}})],1)],1)],2),i("jihaiCopyright")],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},fa99b:function(t,e,i){}}]);