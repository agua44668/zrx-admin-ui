(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{619:function(e,l,a){},690:function(e,l,a){"use strict";a(619)},787:function(e,l,a){"use strict";a.r(l);a(70),a(43);var t={name:"TreeSelectDemo",data:function(){return{isClearable:!0,isAccordion:!0,valueId:1,valueId1:null,valueId2:[11,2],valueId3:null,valueId4:null,list:[{id:1,label:"节点1",children:[{id:2,label:"节点1-1"},{id:3,label:"节点1-2"},{id:4,label:"节点1-3",children:[{id:11,label:"节点1-3-1"},{id:12,label:"节点1-3-2",children:[{id:13,label:"节点1-4-1"},{id:14,label:"节点1-4-2",children:[{id:15,label:"节点1-5-1"},{id:16,label:"节点1-5-2"}]}]}]}]},{id:5,label:"节点2"},{id:6,label:"节点3",disabled:!0},{id:7,label:"节点4"},{id:8,label:"节点5"},{id:9,label:"节点6"},{id:10,label:"节点7"}]}},computed:{optionData:function(){return JSON.parse(JSON.stringify(this.list))},optionData1:function(){return JSON.parse(JSON.stringify(this.list))}},methods:{getValue:function(e,l){e.node;var a=e.value,t=e.valueArr;this[l]=a,console.log("valueArr:",t)},loadNode:function(e){var l=e.node,a=e.resolve;return 0===l.level?a([{label:"region",id:"node_".concat(l.level,"_").concat((new Date).getTime())}]):l.level>1?a([]):void setTimeout((function(){var e=[{label:"leaf",isLeaf:!0,id:"node_".concat(l.level,"_").concat((new Date).getTime())},{label:"zone",isLeaf:!0,id:"node_".concat(l.level,"_1_").concat((new Date).getTime())}];a(e)}),500)}}},i=(a(690),a(2)),o=Object(i.a)(t,(function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"tree-select-demo"},[a("h2",{staticClass:"title"},[e._v("基础用法")]),e._v(" "),a("div",{staticClass:"mb20"},[a("el-tree-select",{attrs:{options:e.optionData,value:e.valueId,clearable:e.isClearable,accordion:e.isAccordion},on:{getValue:function(l){return e.getValue(l,"valueId")}}})],1),e._v(" "),a("h2",{staticClass:"title"},[e._v("附带搜索框")]),e._v(" "),a("div",{staticClass:"mb20"},[a("el-tree-select",{attrs:{options:e.optionData,value:e.valueId1,showSelect:!0,clearable:e.isClearable,accordion:e.isAccordion,reload:!0},on:{getValue:function(l){return e.getValue(l,"valueId1")}}})],1),e._v(" "),a("h2",{staticClass:"title"},[e._v("多选用法")]),e._v(" "),a("div",{staticClass:"mb20"},[a("el-tree-select",{attrs:{options:e.optionData,value:e.valueId2,showSelect:!0,clearable:e.isClearable,accordion:e.isAccordion,showCheckbox:!0},on:{getValue:function(l){return e.getValue(l,"valueId2")}}})],1),e._v(" "),a("h2",{staticClass:"title"},[e._v("懒加载")]),e._v(" "),a("div",{staticClass:"mb20"},[a("el-tree-select",{attrs:{lazy:"",showSelect:"",value:e.valueId3,clearable:e.isClearable,accordion:e.isAccordion},on:{load:e.loadNode,getValue:function(l){return e.getValue(l,"valueId3")}}})],1),e._v(" "),a("h2",{staticClass:"title"},[e._v("显示父级")]),e._v(" "),a("div",{staticClass:"mb20"},[a("el-tree-select",{attrs:{lazy:"",showSelect:"",value:e.valueId4,clearable:e.isClearable,accordion:e.isAccordion,showParentLabel:""},on:{load:e.loadNode,getValue:function(l){return e.getValue(l,"valueId4")}}})],1)])}),[],!1,null,"0d64ff29",null);l.default=o.exports}}]);