(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{278:function(t,a,s){"use strict";s.r(a);var n={data:function(){return{uploadImg:"",uploadFile:"",uploadImgList:[],uploadFileList:[]}},methods:{uploadAction:function(t,a){return new Promise(function(t,a){t({status:1,msg:"测试",data:{filePath:"https://avatars0.githubusercontent.com/u/15975059"}})})}}},e=s(1),o=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),s("p",[t._v("此组件使用的最佳方式(且只能)引入源码使用.hhhhhhhh，\n"),s("a",{attrs:{href:"https://github.com/yimogit/me-admin-template/blob/master/src/components/VUpload/",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整源码戳这里"),s("OutboundLink")],1)]),t._m(3),s("ul",[s("li",[t._v("上传图片："+t._s(t.uploadImg)+"\n"),s("v-upload-single",{model:{value:t.uploadImg,callback:function(a){t.uploadImg=a},expression:"uploadImg"}})],1)]),t._m(4),s("ul",[s("li",[t._v("上传文件："+t._s(t.uploadFile)+"\n"),s("v-upload-single",{attrs:{"is-file":""},model:{value:t.uploadFile,callback:function(a){t.uploadFile=a},expression:"uploadFile"}})],1)]),t._m(5),t._m(6),s("ul",[s("li",[t._v("多选上传多张图片，最多上传 2 张每张最大 1M："+t._s(t.uploadImgList)+"\n"),s("v-upload-multiple",{attrs:{multiple:!0,limit:2,"max-size":1},model:{value:t.uploadImgList,callback:function(a){t.uploadImgList=a},expression:"uploadImgList"}})],1)]),t._m(7),s("ul",[s("li",[t._v("多选上传单个文件，最多上传 2 张每张最大 1M："+t._s(t.uploadFileList)+"\n"),s("v-upload-multiple",{attrs:{"is-file":"",limit:2,"max-size":1},model:{value:t.uploadFileList,callback:function(a){t.uploadFileList=a},expression:"uploadFileList"}})],1)]),t._m(8),s("ul",[s("li",[t._v("自定义上传事件\n"),s("v-upload-multiple",{attrs:{action:t.uploadAction},model:{value:t.uploadFileList,callback:function(a){t.uploadFileList=a},expression:"uploadFileList"}})],1)]),t._m(9),t._m(10),t._m(11)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"组件说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件说明")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("此组件的封装时为了在项目中更加方便的使用，上传接口默认使用 FormData 的格式上传，后台通过接收 formData 保存后台并返回新的图片路径,若为相对路径则通过传递 "),a("code",[this._v("previewAction")]),this._v(" 参数获取预览路径即可\n默认数据返回接口如下：")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"status"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"data"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"filePath"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('".../xxxxxx.jpg"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"单选上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单选上传","aria-hidden":"true"}},[this._v("#")]),this._v(" 单选上传")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-upload-single")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("uploadImg"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-upload-single")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("uploadFile"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("is-file")]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"多选上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多选上传","aria-hidden":"true"}},[this._v("#")]),this._v(" 多选上传")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-upload-multiple")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("uploadImgList"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":multiple")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":limit")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":max-size")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-upload-multiple")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("uploadFileList"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("is-file")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":limit")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":max-size")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("v-upload-multiple")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("uploadFileList"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":action")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("uploadAction"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("uploadAction")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formData"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("category"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        status"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        msg"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'测试'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            filePath"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'https://avatars0.githubusercontent.com/u/15975059'")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"attribute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attribute","aria-hidden":"true"}},[this._v("#")]),this._v(" Attribute")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("默认值")])])]),s("tbody",[s("tr",[s("td",[t._v("value")]),s("td",[t._v("绑定值")]),s("td",[t._v("string")]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("category")]),s("td",[t._v("上传时追加的分类参数")]),s("td",[t._v("string")]),s("td",[t._v("common")])]),s("tr",[s("td",[t._v("formName")]),s("td",[t._v("指定上传文件的 form 名称")]),s("td",[t._v("String")]),s("td",[t._v("file")])]),s("tr",[s("td",[t._v("accept")]),s("td",[t._v("用逗号隔开的 MIME 类型列表")]),s("td",[t._v("String")]),s("td",[t._v("image/*")])]),s("tr",[s("td",[t._v("multiple")]),s("td",[t._v("是否能一次选择多个")]),s("td",[t._v("Boolean")]),s("td",[t._v("false")])]),s("tr",[s("td",[t._v("isFile")]),s("td",[t._v("是否时文件(false:图片,true:文件)")]),s("td",[t._v("Boolean")]),s("td",[t._v("false")])]),s("tr",[s("td",[t._v("limit")]),s("td",[t._v("最大多选数")]),s("td",[t._v("Number")]),s("td",[t._v("100")])]),s("tr",[s("td",[t._v("maxSize")]),s("td",[t._v("单个文件大小限制，兆(M)为单位")]),s("td",[t._v("Number")]),s("td",[t._v("5")])]),s("tr",[s("td",[t._v("disabled")]),s("td",[t._v("是否禁用")]),s("td",[t._v("Boolean")]),s("td",[t._v("false")])]),s("tr",[s("td",[t._v("action")]),s("td",[t._v("项目中应当在组件中使用通用上传接口")]),s("td",[t._v("Function")]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("toastAction")]),s("td",[t._v("通用提示方法")]),s("td",[t._v("Function")]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("previewAction")]),s("td",[t._v("通用图片预览方法")]),s("td",[t._v("Function")]),s("td",[t._v("-")])])])])}],!1,null,null,null);o.options.__file="element-ui-upload.md";a.default=o.exports}}]);