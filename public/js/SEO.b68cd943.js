(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SEO"],{"1b6e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"feature-template",attrs:{id:"feature","data-matching-link":"#feature"}},[i("Navigation"),i("div",{staticClass:"container"},[i("div",{staticClass:"overlay",style:t.backgroundImg}),i("div",{staticClass:"title"},[t._v(t._s(t.article.title))])]),i("div",[i("nav",{staticClass:"feature-nav",attrs:{"data-matching-link":"#features-link"}},[i("div",{staticClass:"feature-links"},[i("div",{staticClass:"mobile-feature-nav"},[i("h3",{on:{click:t.showFeatureItems}},[t._v("Other Features"),i("i",{staticClass:"fas fa-caret-right"})])]),i("ul",{class:{"show-on-large":t.isLargeScreen},attrs:{id:"mobile-dropdown"}},[i("li",{staticClass:"feature-item"},[i("router-link",{attrs:{to:{name:"webdesign"}}},[t._v("Web Design")])],1),i("li",{staticClass:"feature-item"},[i("router-link",{attrs:{to:{name:"socialmedia"}}},[t._v("Social Media")])],1),i("li",{staticClass:"feature-item"},[i("router-link",{attrs:{to:{name:"seo"}}},[t._v("SEO")])],1),i("li",{staticClass:"feature-item"},[i("router-link",{attrs:{to:{name:"photoAndVideo"}}},[t._v("Photography & Videography")])],1),i("li",{staticClass:"feature-item"},[i("router-link",{attrs:{to:{name:"reputationManagement"}}},[t._v("Reputation Management")])],1),i("li",{staticClass:"feature-item"},[i("router-link",{attrs:{to:{name:"contentAndGraphic"}}},[t._v("Content & Graphic Creation")])],1)])])]),i("div",{staticClass:"article-heading"},[i("div",{staticClass:"line"},[t._v(" ")]),i("h2",{staticClass:"articleTitle"},[t._v(t._s(t.article.title))]),i("div",{staticClass:"line"},[t._v(" ")])]),i("div",{staticClass:"copy"},[i("div",[i("img",{staticClass:"floated",attrs:{src:t.svgUrl}}),t._l(t.article.paragraphs,function(e,a,s){return i("div",["subHeading"==a?i("h2",[t._v(t._s(e))]):"bullets"==a?i("ul",{staticClass:"listed-items"},t._l(e,function(e){return i("li",{staticClass:"list-item"},[t._v(t._s(e))])}),0):i("p",[t._v(t._s(e))])])})],2)])]),i("TheFooter"),i("router-view")],1)},s=[],n=i("f4dd"),r=i("07a3"),l={name:"FeatureTemplate",components:{Navigation:n["a"],TheFooter:r["a"]},props:["article"],data:function(){return{showMobile:!1,isLargeScreen:!0,windowWidth:0}},methods:{showFeatureItems:function(){return this.showMobile=!this.showMobile,this.showMobile?document.getElementById("mobile-dropdown").style.display="block":document.getElementById("mobile-dropdown").style.display="none"}},computed:{backgroundImg:function(){return"background-image: url(".concat(this.article.imgUrl,");")},svgUrl:function(){return"".concat(this.article.svgUrl)}},watch:{windowWidth:function(t){document.getElementById("mobile-dropdown").style.display=t>=1010?"block":"none"}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",function(){t.windowWidth=window.innerWidth})})}},o=l,c=(i("8a49"),i("2877")),u=Object(c["a"])(o,a,s,!1,null,null,null);u.options.__file="FeatureTemplate.vue";e["default"]=u.exports},"8a49":function(t,e,i){"use strict";var a=i("9e0e"),s=i.n(a);s.a},"9e0e":function(t,e,i){}}]);
//# sourceMappingURL=SEO.b68cd943.js.map