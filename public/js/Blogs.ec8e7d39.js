(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Blogs"],{"02f4":function(t,e,n){var i=n("4588"),a=n("be13");t.exports=function(t){return function(e,n){var c,o,s=String(a(e)),r=i(n),l=s.length;return r<0||r>=l?t?"":void 0:(c=s.charCodeAt(r),c<55296||c>56319||r+1===l||(o=s.charCodeAt(r+1))<56320||o>57343?t?s.charAt(r):c:t?s.slice(r,r+2):o-56320+(c-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var i=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"0a0d":function(t,e,n){},"0bfb":function(t,e,n){"use strict";var i=n("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var i=n("2aba"),a=n("32e9"),c=n("79e5"),o=n("be13"),s=n("2b4c"),r=n("520a"),l=s("species"),u=!c(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=s(t),v=!c(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),g=v?!c(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e}):void 0;if(!v||!g||"replace"===t&&!u||"split"===t&&!d){var h=/./[f],p=n(o,f,""[t],function(t,e,n,i,a){return e.exec===r?v&&!a?{done:!0,value:h.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),b=p[0],m=p[1];i(String.prototype,t,b),a(RegExp.prototype,f,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"239b":function(t,e,n){},4917:function(t,e,n){"use strict";var i=n("cb7c"),a=n("9def"),c=n("0390"),o=n("5f1b");n("214f")("match",1,function(t,e,n,s){return[function(n){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=s(n,t,this);if(e.done)return e.value;var r=i(t),l=String(this);if(!r.global)return o(r,l);var u=r.unicode;r.lastIndex=0;var d,f=[],v=0;while(null!==(d=o(r,l))){var g=String(d[0]);f[v]=g,""===g&&(r.lastIndex=c(l,a(r.lastIndex),u)),v++}return 0===v?null:f}]})},"520a":function(t,e,n){"use strict";var i=n("0bfb"),a=RegExp.prototype.exec,c=String.prototype.replace,o=a,s="lastIndex",r=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[s]||0!==e[s]}(),l=void 0!==/()??/.exec("")[1],u=r||l;u&&(o=function(t){var e,n,o,u,d=this;return l&&(n=new RegExp("^"+d.source+"$(?!\\s)",i.call(d))),r&&(e=d[s]),o=a.call(d,t),r&&o&&(d[s]=d.global?o.index+o[0].length:e),l&&o&&o.length>1&&c.call(o[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),t.exports=o},"5f1b":function(t,e,n){"use strict";var i=n("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"5f45":function(t,e,n){},"70d9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"padding-top"},[n("div",{staticClass:"contact-container"},t._l(t.contacts,function(e,i){return n("div",{staticClass:"contact-card"},[n("h2",{staticClass:"contact-info"},[t._v("DB ID:"),n("span",[t._v(t._s(t.id[i]))])]),n("div",{staticClass:"contact-btns-container"},[n("button",{staticClass:"contact-button",on:{click:function(e){t.deleteContact(i)}}},[n("i",{staticClass:"fas fa-times contact-delete-icon"})]),n("a",{staticClass:"contact-button",attrs:{href:t.callContact(e)}},[n("i",{staticClass:"fas fa-phone contact-call-icon"})])]),n("h2",{staticClass:"contact-info"},[t._v("Name:"),n("span",[t._v(t._s(e.name))])]),n("h2",{staticClass:"contact-info"},[t._v("E-Mail:"),n("span",[t._v(t._s(e.email))])]),n("h2",{staticClass:"contact-info"},[t._v("Tel:"),n("span",[t._v(t._s(e.number))])]),n("h2",{staticClass:"contact-info"},[t._v("Message:"),n("span",[t._v(t._s(e.message))])])])}),0)])},a=[],c=(n("ac6a"),n("1543")),o={name:"showContacts",components:{},data:function(){return{id:[],contacts:[]}},methods:{deleteContact:function(t){var e=this,n=confirm("You are about to delete this. Continue?");n&&c.contactCollection.doc(this.id[t]).delete().then(function(){console.log("Document deleted"),e.id=[],e.contacts=[],c.contactCollection.orderBy("createdOn").get().then(function(t){t.forEach(function(t){e.id.push(t.id),e.contacts.push(t.data())}),e.id.reverse(),e.contacts.reverse()})}).catch(function(t){console.log("error deleting document","=>",t)})},callContact:function(t){return"tel:".concat(t.number)}},created:function(){var t=this;c.contactCollection.orderBy("createdOn").get().then(function(e){e.forEach(function(e){t.id.push(e.id),t.contacts.push(e.data())}),t.id.reverse(),t.contacts.reverse()})}},s=o,r=(n("f17c"),n("2877")),l=Object(r["a"])(s,i,a,!1,null,null,null);l.options.__file="showContacts.vue";e["default"]=l.exports},"81e0":function(t,e,n){"use strict";var i=n("f51f"),a=n.n(i);a.a},"884c":function(t,e,n){"use strict";var i=n("239b"),a=n.n(i);a.a},a481:function(t,e,n){"use strict";var i=n("cb7c"),a=n("4bf8"),c=n("9def"),o=n("4588"),s=n("0390"),r=n("5f1b"),l=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,h){return[function(i,a){var c=t(this),o=void 0==i?void 0:i[e];return void 0!==o?o.call(i,c,a):n.call(String(c),i,a)},function(t,e){var a=h(n,t,this,e);if(a.done)return a.value;var d=i(t),f=String(this),v="function"===typeof e;v||(e=String(e));var b=d.global;if(b){var m=d.unicode;d.lastIndex=0}var C=[];while(1){var _=r(d,f);if(null===_)break;if(C.push(_),!b)break;var x=String(_[0]);""===x&&(d.lastIndex=s(f,c(d.lastIndex),m))}for(var S="",w=0,y=0;y<C.length;y++){_=C[y];for(var L=String(_[0]),k=l(u(o(_.index),f.length),0),B=[],E=1;E<_.length;E++)B.push(g(_[E]));var T=_.groups;if(v){var M=[L].concat(B,k,f);void 0!==T&&M.push(T);var $=String(e.apply(void 0,M))}else $=p(L,f,k,B,T,e);k>=w&&(S+=f.slice(w,k)+$,w=k+L.length)}return S+f.slice(w)}];function p(t,e,i,c,o,s){var r=i+t.length,l=c.length,u=v;return void 0!==o&&(o=a(o),u=f),n.call(s,u,function(n,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(r);case"<":s=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return a;if(u>l){var f=d(u/10);return 0===f?a:f<=l?void 0===c[f-1]?a.charAt(1):c[f-1]+a.charAt(1):a}s=c[u-1]}return void 0===s?"":s})}})},ac6a:function(t,e,n){for(var i=n("cadf"),a=n("0d58"),c=n("2aba"),o=n("7726"),s=n("32e9"),r=n("84f2"),l=n("2b4c"),u=l("iterator"),d=l("toStringTag"),f=r.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=a(v),h=0;h<g.length;h++){var p,b=g[h],m=v[b],C=o[b],_=C&&C.prototype;if(_&&(_[u]||s(_,u,f),_[d]||s(_,d,b),r[b]=f,m))for(p in i)_[p]||c(_,p,i[p],!0)}},b0c5:function(t,e,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},be5a:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"padding-top"},[n("h1",[t._v(t._s(t.blogTitle))]),t._m(0),n("div",{staticClass:"line"}),n("div",{staticClass:"most-recent-blog"},[t.currentUser?n("button",{staticClass:"delete",on:{click:function(e){t.deleteBlog(t.id[0])}}},[n("i",{staticClass:"fas fa-times"})]):t._e(),t.currentUser?n("button",{staticClass:"edit",on:{click:function(e){t.editBlog(t.id[0])}}},[n("i",{staticClass:"fas fa-pencil-alt"})]):t._e(),t.currentUser?t._e():n("div",{staticClass:"overlay",on:{click:function(e){t.singleBlog(t.id[0],t.blogTitle[0])}}},[n("h2",[t._v("read more")])]),n("img",{attrs:{src:t.blogs[0].imgUrl}}),n("h1",[t._v(t._s(t.blogTitle[0]))]),n("p",{staticClass:"hidden-on-small"},[t._v("...read more")])]),n("div",{staticClass:"line"}),n("div",{staticClass:"flex-showBlogs"},t._l(t.blogs,function(e,i){return i>=1?n("div",{staticClass:"container"},[t.currentUser?n("button",{staticClass:"delete",on:{click:function(e){t.deleteBlog(t.id[i])}}},[n("i",{staticClass:"fas fa-times"})]):t._e(),t.currentUser?n("button",{staticClass:"edit",on:{click:function(e){t.editBlog(t.id[i])}}},[n("i",{staticClass:"fas fa-pencil-alt"})]):t._e(),t.currentUser?t._e():n("div",{staticClass:"overlay",on:{click:function(e){t.singleBlog(t.id[i],t.blogTitle[i])}}},[n("h2",[t._v("read more")])]),n("img",{attrs:{src:e.imgUrl}}),n("h1",{staticClass:"align-left",domProps:{innerHTML:t._s(t.blogTitle[i]+"...")}}),n("p",{staticClass:"hidden-on-small"},[t._v("...read more")])]):t._e()}),0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"heading-title"},[t._v(" Our Most"),n("span",{staticClass:"font-weight"},[t._v(" recent Posts")])])}],c=n("cebc"),o=(n("4917"),n("ac6a"),n("a481"),n("c0d6"),n("2f62")),s=n("1543"),r={name:"ShowBlogs",components:{},data:function(){return{id:[],blogs:[],blogTitle:[]}},methods:{singleBlog:function(t,e){var n=e.replace(/\s+/g,"-");this.$router.push({name:"singleBlog",params:{id:"".concat(t),title:"".concat(n)}})},deleteBlog:function(t){var e=this;console.log(t);var n=confirm("You are about to delete this. Continue?");n&&s.blogCollection.doc(t).delete().then(function(){console.log("Blog deleted"),e.$router.push("/blogs")}).catch(function(t){console.log("error deleting document","=>",t)})},editBlog:function(t){this.$router.push("/blog/edit/".concat(t))}},created:function(){var t=this;s.blogCollection.orderBy("createdOn","desc").get().then(function(e){e.forEach(function(e,n){t.id.push(e.id),t.blogs.push(e.data());var i=e.data().content.match(/(?<=(<h1>)).*?(?=(<\/h1>))/)[0];t.blogTitle.push(i)})})},computed:Object(c["a"])({},Object(o["b"])(["currentUser"]))},l=r,u=(n("cce0"),n("2877")),d=Object(u["a"])(l,i,a,!1,null,null,null);d.options.__file="ShowBlogs.vue";e["default"]=d.exports},cce0:function(t,e,n){"use strict";var i=n("5f45"),a=n.n(i);a.a},ec95:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"padding-top"},[n("div",{staticClass:"container-dash"},[n("h1",{staticClass:"dash-title"},[t._v("Dashboard")]),n("div",{staticClass:"flex space-between"},[n("div",{staticClass:"card flex-wrap"},[n("h2",{staticClass:"card-title"},[t._v("Add Blog Post")]),n("p",{staticClass:"card-instructions"},[t._v("Click this to make a new post")]),n("div",{staticClass:"card-link-container"},[n("router-link",{staticClass:"card-link",attrs:{to:"addBlog"}},[t._v("New Post")])],1)]),n("div",{staticClass:"card flex-wrap"},[n("h2",{staticClass:"card-title"},[t._v("contact submissions")]),n("p",{staticClass:"card-instructions"},[t._v("Click this to see our contact submissions")]),n("div",{staticClass:"card-link-container"},[n("router-link",{staticClass:"card-link",attrs:{to:"contacts"}},[t._v("Show Contacts")])],1)])])])])},a=[],c={data:function(){return{}}},o=c,s=(n("81e0"),n("2877")),r=Object(s["a"])(o,i,a,!1,null,null,null);r.options.__file="Dashboard.vue";e["default"]=r.exports},f17c:function(t,e,n){"use strict";var i=n("0a0d"),a=n.n(i);a.a},f508:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"padding-top"},[n("form",{on:{submit:function(t){t.preventDefault()}}},[n("quillEditor",{ref:"myQuillEditor",staticClass:"width",attrs:{options:t.editorOption},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("label",{attrs:{for:"upload"}},[t._v("Upload Main Image")]),n("input",{attrs:{type:"file"},on:{change:t.handleFiles}}),n("button",{on:{click:function(e){return e.preventDefault(),t.postBlog(e)}}},[t._v("Post Blog")])],1),n("div",{staticClass:"preview"},[n("h1",[t._v("Preview")]),n("img",{attrs:{src:t.imgUrl}}),n("div",{domProps:{innerHTML:t._s(t.content)}},[t._v(t._s(t.content))])]),n("p",[t._v(t._s(t.body))]),n("p",[t._v(t._s(t.bodyItems))])])},a=[],c=(n("7f7f"),n("a753"),n("8096"),n("953d")),o=n("1543"),s={name:"AddBlog",components:{quillEditor:c["quillEditor"]},data:function(){return{imgUrl:"",content:"<p>example content</p>",editorOption:{}}},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},methods:{postBlog:function(){var t=this;o.blogCollection.add({createdOn:new Date,content:this.content,imgUrl:this.imgUrl}).then(function(e){t.content="<p>example content</p>",t.$router.push("/blogs")}).catch(function(t){console.log(t)})},handleFiles:function(t){var e=this,n=t.target.files[0];console.log(n);var i=o.storage.ref("blogImages/".concat(n.name));i.put(n).then(function(t){i.getDownloadURL().then(function(t){e.imgUrl=t})}).catch(function(t){console.log(t.message)})}}},r=s,l=(n("884c"),n("2877")),u=Object(l["a"])(r,i,a,!1,null,"c76859fc",null);u.options.__file="addBlog.vue";e["default"]=u.exports},f51f:function(t,e,n){}}]);
//# sourceMappingURL=Blogs.ec8e7d39.js.map