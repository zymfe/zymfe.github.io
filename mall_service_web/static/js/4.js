(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{105:function(t,a,e){},109:function(t,a,e){"use strict";var s=window.location.protocol,i=s+"//admin-mallservice-healthcare.qschou.com";e.d(a,"b",function(){return o}),e.d(a,"a",function(){return n});var o=window.location.protocol+"//admin-template-healthcare.qschou.com/api/sso/system/upload/file",n=i+"/api/service/config/Sort/lists"},166:function(t,a,e){"use strict";var s=e(105);e.n(s).a},171:function(t,a,e){"use strict";e.r(a);var s=e(125),i=(e(109),"https://wb-dajiankang.oss-cn-hangzhou.aliyuncs.com/qsc_health/default_header.png"),o=e(28),n={data:function(){return{systemName:"电话问诊后台管理系统",menuList:this.$Sso.getMenu(),productList:[],curProduct:{},pageTitle:"",curRouteName:"",isShowPwdModal:!1,loading:!1,pwd:"",vpwd:"",isShowUserModal:!1,userInfo:{name:"",avatar:"",mobile:""},uploadAvatarList:[],uploadImageUrl:"",headers:{}}},components:{Icon:s.Icon},directives:{slideToggle:function(e){e.onclick=function(){var t=e.parentNode.querySelector(".child-menu").classList,a=e.querySelector(".menu-status").classList;t.contains("dis-none")?(t.remove("dis-none"),t.add("dis-block"),a.remove("el-icon-arrow-up"),a.add("el-icon-arrow-down")):(t.remove("dis-block"),t.add("dis-none"),a.remove("el-icon-arrow-down"),a.add("el-icon-arrow-up"))}}},watch:{$route:function(t,a){this.initPage(t.meta.pageTitle,t.name)}},created:function(){var t=this.$route;this.initPage(t.meta.pageTitle,t.name),this.initUserInfo()},mounted:function(){this.initUpload()},methods:{initPage:function(t,a){this.pageTitle=t,this.curRouteName=a},initUserInfo:function(){var t=this;try{var a=window.localStorage,e=JSON.parse(a.user_info);this.userInfo=e,this.userInfo.avatar=e.avatar?e.avatar:i,setTimeout(function(){t.uploadAvatarList=[{status:"finished",url:t.userInfo.avatar?t.userInfo.avatar:i,name:""}]},300)}catch(t){this.logout()}},logout:function(){this.$Sso.logout()},toIndex:function(){this.$router.push({name:"Index"})},showPwdModal:function(){var t=this;setTimeout(function(){t.isShowPwdModal=!0})},confirmPwd:function(){var t=Object(o.f)(this.pwd),a=t.length,e=Object(o.f)(this.vpwd);return a<8||32<a?(this.$Message.warning({content:"亲，密码必须是8-32位字符",duration:3}),this.showPwdModal(),!1):t!==e?(this.$Message.warning({content:"亲，两次输入的密码不一致，请重新输入",duration:3}),this.showPwdModal(),!1):void this.$Sso.changePwd(t)},showUserModal:function(){this.isShowUserModal=!0},confirmUser:function(){this.$Sso.editPersonal(this.userInfo)},initUpload:function(){},handleView:function(t){this.imgName=t,this.visible=!0},handleRemove:function(t){this.uploadAvatarList.splice(0,1)},avatarBeforeUpload:function(){return this.uploadAvatarList.splice(0,1),!0},handleAvatarSuccess:function(t,a){var e=t.data.url;this.userInfo.avatar=e,this.uploadAvatarList=[{status:"finished",url:e,name:""}]}}},l=(e(166),e(23)),r=Object(l.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cont-wrap"},[s("div",{staticClass:"header-container"},[s("div",{staticClass:"logo"},[s("a",{staticClass:"logo-link",attrs:{href:"javascript:;",title:"轻松筹"},on:{click:e.toIndex}},[e._v(e._s(e.systemName))])]),e._v(" "),s("div",{staticClass:"menu clearfix"},[s("div",{staticClass:"handle",attrs:{id:"user-handle"}},[s("div",{staticClass:"title"},[s("div",{staticClass:"user-pic"},[s("img",{attrs:{src:e.userInfo.avatar,alt:"头像",width:"35",height:"35"}})]),e._v(" "),s("div",{staticClass:"user-name"},[e._v(e._s(e.userInfo.name))])]),e._v(" "),s("div",{staticClass:"menu-list",attrs:{id:"menu-list"}},[s("a",{attrs:{href:"javascript:;"},on:{click:e.showUserModal}},[e._v("修改用户信息")]),e._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:e.showPwdModal}},[e._v("修改密码")]),e._v(" "),s("a",{attrs:{href:"javascript:;"},on:{click:e.logout}},[e._v("退出")])])])])]),e._v(" "),s("div",{staticClass:"left-container"},[s("ul",{staticClass:"navlist"},e._l(e.menuList,function(t,a){return t.enable&&t.sub_nodes.length?s("li",{key:a,staticClass:"item"},[s("a",{directives:[{name:"slideToggle",rawName:"v-slideToggle"}],staticClass:"slide",attrs:{href:"javascript:;"}},[s("span",[s("Icon",{staticClass:"el-icon-setting"}),e._v("\n              "+e._s(t.node_name)+"\n            ")],1),e._v(" "),s("Icon",{staticClass:"menu-status el-icon-arrow-down"})],1),e._v(" "),s("div",{staticClass:"child-menu"},e._l(t.sub_nodes,function(t,a){return s("div",{key:a,staticClass:"next-level"},[t.enable?s("router-link",{class:{"this-nav":e.curRouteName===t.router_name},attrs:{tag:"a",to:{name:t.router_name,params:t.params}}},[s("span",[e._v(e._s(t.node_name))])]):e._e()],1)}),0)]):e._e()}),0)]),e._v(" "),s("div",{staticClass:"right-container"},[s("h1",{directives:[{name:"show",rawName:"v-show",value:e.pageTitle,expression:"pageTitle"}],staticClass:"title"},[e._v(e._s(e.pageTitle))]),e._v(" "),s("router-view")],1),e._v(" "),s("Dialog",{attrs:{loading:e.loading,title:"修改密码","mask-closable":!1,closable:!1,width:"800"},on:{"on-ok":e.confirmPwd},model:{value:e.isShowPwdModal,callback:function(t){e.isShowPwdModal=t},expression:"isShowPwdModal"}},[s("Form",{attrs:{"label-width":60}},[s("FormItem",{staticClass:"form-item",staticStyle:{width:"100%"},attrs:{label:"密码"}},[s("Input",{attrs:{type:"password",placeholder:"请输入8-16位的密码"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1),e._v(" "),s("FormItem",{staticClass:"form-item",staticStyle:{width:"100%"},attrs:{label:"确认密码"}},[s("Input",{attrs:{type:"password",placeholder:"再次输入密码"},model:{value:e.vpwd,callback:function(t){e.vpwd=t},expression:"vpwd"}})],1)],1)],1),e._v(" "),s("Dialog",{attrs:{loading:e.loading,title:"修改用户信息","mask-closable":!1,closable:!1,width:"800"},on:{"on-ok":e.confirmUser},model:{value:e.isShowUserModal,callback:function(t){e.isShowUserModal=t},expression:"isShowUserModal"}},[s("Form",{attrs:{"label-width":60}},[s("FormItem",{staticClass:"form-item",staticStyle:{width:"100%"},attrs:{label:"用户名称"}},[s("Input",{attrs:{placeholder:"请输入用户名称"},model:{value:e.userInfo.name,callback:function(t){e.$set(e.userInfo,"name",t)},expression:"userInfo.name"}})],1),e._v(" "),s("FormItem",{staticClass:"form-item",staticStyle:{width:"100%"},attrs:{label:"头像"}},[e._l(e.uploadAvatarList,function(a){return s("div",{staticClass:"demo-upload-list"},["finished"===a.status?[s("img",{attrs:{src:a.url}}),e._v(" "),s("div",{staticClass:"demo-upload-list-cover"},[s("Icon",{staticClass:"el-icon-setting",nativeOn:{click:function(t){return e.handleView(a.name)}}}),e._v(" "),s("Icon",{staticClass:"el-icon-setting",nativeOn:{click:function(t){return e.handleRemove(a)}}})],1)]:[a.showProgress?s("Progress",{attrs:{percent:a.percentage,"hide-info":""}}):e._e()]],2)}),e._v(" "),s("Upload",{ref:"uploadAvatar",staticStyle:{display:"inline-block",width:"58px"},attrs:{multiple:!1,"show-upload-list":!1,"before-upload":e.avatarBeforeUpload,"on-success":e.handleAvatarSuccess,format:["jpg","jpeg","png"],"max-size":2048,type:"drag",action:e.uploadImageUrl,headers:e.headers,name:"file"}},[s("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[s("Icon",{staticClass:"el-icon-setting",attrs:{size:"20"}})],1)])],2),e._v(" "),s("FormItem",{staticClass:"form-item",staticStyle:{width:"100%"},attrs:{label:"手机号"}},[s("Input",{attrs:{placeholder:"请输入用户手机号"},model:{value:e.userInfo.mobile,callback:function(t){e.$set(e.userInfo,"mobile",t)},expression:"userInfo.mobile"}})],1)],1)],1)],1)},[],!1,null,"64dbb7b3",null);a.default=r.exports}}]);