(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{605:function(e,n,u){},676:function(e,n,u){"use strict";u(605)},767:function(e,n,u){"use strict";u.r(n);var t={name:"paginationDemo",data:function(){return{queryBody:{pageSize:10,pageNum:1}}},methods:{testFunc:function(){this.queryBody.pageNum=20},testFunc2:function(){this.queryBody.pageSize=20},prevClickFunc:function(e){this.queryBody.pageNum=e},nextClickFunc:function(e){this.queryBody.pageNum=e},currentChangeFunc:function(e){console.log("currentChangeFunc",e),this.queryBody.pageNum=e},sizeChangeFunc:function(e){console.log("sizeChangeFunc",e),this.queryBody.pageSize=e}}},a=(u(676),u(2)),i=Object(a.a)(t,(function(){var e=this,n=e.$createElement,u=e._self._c||n;return u("div",{staticClass:"pagination-demo"},[e._v("\n    "+e._s(e.queryBody)+"\n    "),u("zrx-pagination",{attrs:{layout:"total, sizes, ->, prev, pager, next, jumper","page-size":e.queryBody.pageSize,"current-page":e.queryBody.pageNum,total:150,pagerCount:10,background:""},on:{"prev-click":e.prevClickFunc,"next-click":e.nextClickFunc,"current-change":e.currentChangeFunc,"size-change":e.sizeChangeFunc}}),e._v(" "),u("div",{staticClass:"item"},[u("label",[e._v("改变页数")]),e._v(" "),u("el-input-number",{model:{value:e.queryBody.pageNum,callback:function(n){e.$set(e.queryBody,"pageNum",n)},expression:"queryBody.pageNum"}}),e._v(" "),u("el-button",{on:{click:e.testFunc}},[e._v("改变页数")])],1),e._v(" "),u("div",{staticClass:"item"},[u("label",[e._v("改变分页")]),e._v(" "),u("el-input-number",{model:{value:e.queryBody.pageSize,callback:function(n){e.$set(e.queryBody,"pageSize",n)},expression:"queryBody.pageSize"}})],1)],1)}),[],!1,null,"521c5e16",null);n.default=i.exports}}]);