(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-setting-user_info-index"],{"0546":function(t,e,i){"use strict";i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"picker",avatar:"",objectSex:["男","女","未知"],index:2,nickname:"",username:"",mobile:"",date:"1990-01-01",birthday:"请选择",sex:0,submitStatus:!1}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{bindPickerChange:function(t){this.sex=t.target.value},bindDateChange:function(t){this.birthday=t.target.value},getDate:function(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,s=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),a=a>9?a:"0"+a,s=s>9?s:"0"+s,"".concat(i,"-").concat(a,"-").concat(s)},uploadAvatar:function(){var t=this;this.$api.uploadFiles((function(e){if(e.status){var i=e.data.url;t.$api.changeAvatar({avatar:i},(function(e){e.status?t.$common.successToShow("上传成功",(function(){t.avatar=e.data.avatar})):t.$common.errorToShow(e.msg)}))}else t.$common.errorToShow(e.msg)}))},submitHandler:function(){var t=this;this.submitStatus=!0;var e=this.sex+1;if("请选择"==this.birthday)return this.$common.successToShow("请选择出生日期"),this.submitStatus=!1,!1;this.$api.editInfo({sex:e,birthday:this.birthday,nickname:this.nickname},(function(e){t.$common.successToShow(e.msg,(function(t){uni.navigateBack({delta:1})}))}),(function(e){t.submitStatus=!1}))}},onLoad:function(){var t=this;t.$api.userInfo({},(function(e){if(e.status){var i=e.data.sex-1;null==e.data.birthday&&(e.data.birthday="请选择"),t.nickname=e.data.nickname,t.mobile=e.data.mobile,t.sex=i,t.index=i,t.birthday=e.data.birthday,t.avatar=e.data.avatar,e.data.username?t.username=e.data.username:t.username="暂无用户名","请选择"!=t.birthday&&(t.date=t.birthday)}else t.$common.errorToShow(e.msg)}))}};e.default=a},"382f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".user-head[data-v-1be9a546]{height:%?100?%}.user-head-img[data-v-1be9a546]{height:%?90?%;width:%?90?%;border-radius:50%}.cell-hd-title[data-v-1be9a546]{color:#333}.cell-item-bd[data-v-1be9a546]{color:#666;font-size:%?26?%}.cell-item-hd[data-v-1be9a546]{width:%?160?%}",""]),t.exports=e},"3a36":function(t,e,i){"use strict";i.r(e);var a=i("f540"),s=i("711e");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("ae2e");var l,c=i("f0c5"),u=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,"1be9a546",null,!1,a["a"],l);e["default"]=u.exports},"5c45":function(t,e,i){var a=i("382f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("2ce31a90",a,!0,{sourceMap:!1,shadowMode:!1})},"711e":function(t,e,i){"use strict";i.r(e);var a=i("0546"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},ae2e:function(t,e,i){"use strict";var a=i("5c45"),s=i.n(a);s.a},f540:function(t,e,i){"use strict";var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-top"},[i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell-item user-head"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("头像")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next user-head-img have-none",attrs:{mode:"aspectFill",src:t.avatar},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadAvatar.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"cell-item cell-item-mid"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("昵称")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{placeholder:""},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1)],1),i("v-uni-view",{staticClass:"cell-item cell-item-mid"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("用户名")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{placeholder:"",disabled:"true"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1),i("v-uni-view",{staticClass:"cell-item cell-item-mid"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("手机号")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-input",{staticClass:"cell-bd-input",attrs:{placeholder:"",disabled:"true"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1)],1),i("v-uni-view",{staticClass:"cell-item cell-item-mid right-img"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("性别")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{mode:"selector",value:t.index,range:t.objectSex},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.objectSex[t.sex]))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/ic-pull-down.png"}})],1)],1),i("v-uni-view",{staticClass:"cell-item cell-item-mid right-img"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("生日")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{mode:"date",value:t.date,start:t.startDate,end:t.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.birthday))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"/static/image/ic-pull-down.png"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"button-bottom"},[i("v-uni-button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover2",disabled:t.submitStatus,loading:t.submitStatus},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitHandler()}}},[t._v("保存")])],1)],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))}}]);