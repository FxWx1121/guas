(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{"0d13":function(t,e,i){"use strict";var n=i("dc73"),a=i.n(n);a.a},"264f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62");function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){s(t,e,i[e])})}return t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={data:function(){return{}},methods:a({},(0,n.mapMutations)(["logout"]),{navTo:function(t){},toLogout:function(){uni.showModal({content:"确定要退出登录吗",success:function(t){t.confirm&&(location="../user/user.vue",setTimeout(function(){uni.navigateBack()},1e3))}})}})};e.default=c},"2dd9":function(t,e,i){"use strict";i.r(e);var n=i("484a"),a=i("92f4");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("0d13");var c=i("2877"),l=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"63698ccc",null);e["default"]=l.exports},"484a":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"list-cell b-b m-t",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("新手指南")}}},[i("v-uni-text",{staticClass:"cell-tit b-t"},[t._v("新手指南")]),i("v-uni-image",{staticClass:"xiangyou",attrs:{src:"../../static/img/error/icon-xiangxia-n.png"}})],1),i("v-uni-navigator",{attrs:{url:"../set/message?title=message","hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("push消息提醒设置")}}},[i("v-uni-text",{staticClass:"cell-tit b-t"},[t._v("push消息提醒设置")]),i("v-uni-image",{staticClass:"xiangyou",attrs:{src:"../../static/img/error/icon-xiangxia-n.png"}})],1)],1),i("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("服务协议")}}},[i("v-uni-text",{staticClass:"cell-tit b-t"},[t._v("服务协议")]),i("v-uni-image",{staticClass:"xiangyou",attrs:{src:"../../static/img/error/icon-xiangxia-n.png"}})],1),i("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("关于我们")}}},[i("v-uni-text",{staticClass:"cell-tit b-t"},[t._v("关于我们")]),i("v-uni-image",{staticClass:"xiangyou",attrs:{src:"../../static/img/error/icon-xiangxia-n.png"}})],1),i("v-uni-navigator",{attrs:{url:"../set/suggest?title=suggest","hover-class":"navigator-hover"}},[i("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("投诉建议")}}},[i("v-uni-text",{staticClass:"cell-tit b-t"},[t._v("投诉建议")]),i("v-uni-image",{staticClass:"xiangyou",attrs:{src:"../../static/img/error/icon-xiangxia-n.png"}})],1)],1),i("v-uni-view",{staticClass:"list-cell"},[i("v-uni-text",{staticClass:"cell-tit b-t"},[t._v("当前版本")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("1.0.0")])],1),i("v-uni-view",{staticClass:"list-cell m-t b-b",staticStyle:{"border-bottom":"1px solid #E0E7EB"},attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){e=t.$handleEvent(e),t.navTo("清除缓存")}}},[i("v-uni-text",{staticClass:"cell-tit b-t"},[t._v("清除缓存")])],1),i("v-uni-view",{staticClass:"quit",on:{click:function(e){e=t.$handleEvent(e),t.toLogout(e)}}},[i("v-uni-text",[t._v("退出账号")])],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"7f75":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.list-cell[data-v-63698ccc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;padding:%?0?% %?40?%;line-height:%?103?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-top:%?1?% solid #e0e7eb}.list-cell.log-out-btn[data-v-63698ccc]{margin:%?344?% %?64?% %?100?% %?64?%;background-color:#f0632e;-webkit-border-radius:%?90?%;border-radius:%?90?%}.list-cell.log-out-btn .cell-tit[data-v-63698ccc]{text-align:center;margin-right:0}.list-cell.cell-hover[data-v-63698ccc]{background:#fafafa}.list-cell .b-t[data-v-63698ccc]{font-size:%?30?%;font-family:PingFangSC-Medium;font-weight:500;color:#4a4a4a}.list-cell .cell-more[data-v-63698ccc]{-webkit-align-self:baseline;-ms-flex-item-align:baseline;align-self:baseline;margin-left:%?10?%}.list-cell .cell-tit[data-v-63698ccc]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;margin-right:%?10?%}.quit[data-v-63698ccc]{width:%?520?%;height:%?80?%;background:#ff5847;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin:%?100?% %?115?% 0 %?115?%}.quit uni-text[data-v-63698ccc]{font-size:%?36?%;font-family:PingFangSC-Regular;font-weight:400;color:#fff;line-height:%?80?%;text-align:center;padding-left:%?188?%}.xiangyou[data-v-63698ccc]{width:%?30?%;height:%?30?%}',""])},"92f4":function(t,e,i){"use strict";i.r(e);var n=i("264f"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},dc73:function(t,e,i){var n=i("7f75");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4ebf4622",n,!0,{sourceMap:!1,shadowMode:!1})}}]);