(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SEO"],{"1b6e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feature-template",attrs:{id:"feature","data-matching-link":"#feature"}},[a("Navigation"),a("div",{staticClass:"container"},[a("div",{staticClass:"overlay",style:t.backgroundImg}),a("div",{staticClass:"title"},[t._v(t._s(t.article.title))])]),a("div",[a("nav",{staticClass:"feature-nav",attrs:{"data-matching-link":"#features-link"}},[a("div",{staticClass:"feature-links"},[a("div",{staticClass:"mobile-feature-nav"},[a("h3",{on:{click:t.showFeatureItems}},[t._v("Other Features"),a("i",{staticClass:"fas fa-caret-right"})])]),a("ul",{class:{"show-on-large":t.isLargeScreen},attrs:{id:"mobile-dropdown"}},[a("li",{staticClass:"feature-item"},[a("router-link",{attrs:{to:{name:"webdesign"}}},[t._v("Web Design")])],1),a("li",{staticClass:"feature-item"},[a("router-link",{attrs:{to:{name:"socialmedia"}}},[t._v("Social Media")])],1),a("li",{staticClass:"feature-item"},[a("router-link",{attrs:{to:{name:"seo"}}},[t._v("SEO")])],1),a("li",{staticClass:"feature-item"},[a("router-link",{attrs:{to:{name:"photoAndVideo"}}},[t._v("Photography & Videography")])],1),a("li",{staticClass:"feature-item"},[a("router-link",{attrs:{to:{name:"reputationManagement"}}},[t._v("Reputation Management")])],1),a("li",{staticClass:"feature-item"},[a("router-link",{attrs:{to:{name:"contentAndGraphic"}}},[t._v("Content & Graphic Creation")])],1)])])]),a("div",{staticClass:"article-heading"},[a("div",{staticClass:"line"},[t._v(" ")]),a("h2",{staticClass:"articleTitle"},[t._v(t._s(t.article.title))]),a("div",{staticClass:"line"},[t._v(" ")])]),a("div",{staticClass:"copy"},[a("div",[a("img",{staticClass:"floated",attrs:{src:t.svgUrl}}),t._l(t.article.paragraphs,function(e,i,s){return a("div",["subHeading"==i?a("h2",[t._v(t._s(e))]):"bullets"==i?a("ul",{staticClass:"listed-items"},t._l(e,function(e){return a("li",{staticClass:"list-item"},[t._v(t._s(e))])}),0):a("p",[t._v(t._s(e))])])})],2)])]),a("TheFooter"),a("router-view")],1)},s=[],n=(a("cadf"),a("551c"),a("097d"),a("f4dd")),r=a("07a3"),l={name:"FeatureTemplate",components:{Navigation:n["a"],TheFooter:r["a"]},props:["article"],data:function(){return{showMobile:!1,isLargeScreen:!0,windowWidth:0}},methods:{showFeatureItems:function(){return this.showMobile=!this.showMobile,this.showMobile?document.getElementById("mobile-dropdown").style.display="block":document.getElementById("mobile-dropdown").style.display="none"}},computed:{backgroundImg:function(){return"background-image: url(".concat(this.article.imgUrl,");")},svgUrl:function(){return"".concat(this.article.svgUrl)}},watch:{windowWidth:function(t){document.getElementById("mobile-dropdown").style.display=t>=1010?"block":"none"}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",function(){t.windowWidth=window.innerWidth})})}},o=l,c=(a("8a49"),a("2877")),d=Object(c["a"])(o,i,s,!1,null,null,null);d.options.__file="FeatureTemplate.vue";e["default"]=d.exports},"8a49":function(t,e,a){"use strict";var i=a("9e0e"),s=a.n(i);s.a},"9e0e":function(t,e,a){}}]);
//# sourceMappingURL=SEO.a8801987.js.map