(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{763:function(t,n,e){"use strict";e.r(n);e(319),e(6),e(34),e(38);var o={name:"messageDemo",data:function(){return{msgMap:new Map([["info","你好！欢迎使用金融云2.0专业版，你可以根据自身需求添加业务模块。"],["success","恭喜！你所提交的信息已经审核通过，如有问题请联系客服。"],["warning","系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！"],["error","系统错误，请稍后再试。"]]),modalTextMap:new Map([["info",{title:"传入title：信息（当传入的参数一个有值，另一个参数为空时，传入的内容均已标题格式显示）",content:""}],["success",{title:"",content:"传入content：成功（当传入的参数一个有值，另一个参数为空时，传入的内容均已标题格式显示）"}],["warning",{title:"确认（动作）全部（操作对象类型）？",content:"一系列的信息描述，可能会很长。也可以是很短同样也可以带标点"}],["error",{title:"错误",content:"正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。"}]])}},methods:{openModalTitle:function(t){var n=this.modalTextMap.get(t);0==n.content?this.$confirm(n.title,"",{type:t,showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){})).catch((function(t){})):0==n.title?this.$confirm(n.content,"",{type:t,showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){})).catch((function(t){})):this.$confirm(n.content,n.title,{type:t,showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(t){})).catch((function(t){}))},openModal:function(t){var n=this.modalTextMap.get(t);0==n.content?this.$alert(n.title,"",{type:t,showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,confirmButtonText:"关闭"}).then((function(t){})).catch((function(t){})):0==n.title?this.$alert(n.content,"",{type:t,showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,confirmButtonText:"关闭"}).then((function(t){})).catch((function(t){})):this.$alert(n.content,n.title,{type:t,showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,confirmButtonText:"关闭"}).then((function(t){})).catch((function(t){}))},openMsgtipBounce:function(t){this.$message({type:t,showClose:!0,message:this.msgMap.get(t)})}}},c=e(2),i=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"message-demo"},[e("div",{staticStyle:{"padding-top":"15px"}},[e("h4",[t._v("Modal 对话框(纯标题)")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openModalTitle("success")}}},[t._v("成功对话框")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openModalTitle("warning")}}},[t._v("警告对话框")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openModalTitle("info")}}},[t._v("消息对话框")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openModalTitle("error")}}},[t._v("错误对话框")]),t._v(" "),e("h4",[t._v("Modal 对话框(标题加正文 )")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openModal("success")}}},[t._v("成功对话框")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openModal("warning")}}},[t._v("警告对话框")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openModal("info")}}},[t._v("消息对话框")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openModal("error")}}},[t._v("错误对话框")]),t._v(" "),e("h4",[t._v("Message 全局提示")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openMsgtipBounce("success")}}},[t._v("成功提示框")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openMsgtipBounce("warning")}}},[t._v("警告提示框")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openMsgtipBounce("info")}}},[t._v("消息提示框")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.openMsgtipBounce("error")}}},[t._v("错误提示框")])],1)])}),[],!1,null,"149a1f18",null);n.default=i.exports}}]);