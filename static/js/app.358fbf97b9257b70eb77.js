webpackJsonp([0],{"+ySO":function(t,e,s){t.exports=s.p+"static/img/slide2.89b04ae.jpg"},"7KrV":function(t,e){},FGMY:function(t,e){},K5Jf:function(t,e,s){t.exports=s.p+"static/img/slide3.d507211.jpg"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"name-and-pic"},[e("img",{staticClass:"background-pic",attrs:{src:s("USNd")}}),this._v(" "),e("img",{staticClass:"small-pic",attrs:{src:s("wjFS")}}),this._v(" "),e("span",{staticClass:"title"},[this._v("Zikun Deng")]),this._v(" "),e("span",{staticClass:"sub-title"},[this._v("A bachelor?")]),this._v(" "),e("span",{staticClass:"email"},[this._v("zikun.rain@gmail.com")])])}]};var a=s("VU/8")({name:"NameAndPic"},n,!1,function(t){s("lQVI")},null,null).exports,r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu-bar"},[s("div",{staticClass:"menu"},[s("div",{staticClass:"menu-item"},[t._v("HOME")]),t._v(" "),s("div",{staticClass:"menu-item"},[t._v("ABOUT")]),t._v(" "),s("div",{staticClass:"menu-item"},[t._v("GITHUB")]),t._v(" "),s("div",{staticClass:"menu-item"},[t._v("BLOG")]),t._v(" "),s("div",{staticClass:"menu-item"},[t._v("PUBLICATIONS")])])])}]};var c=s("VU/8")({},r,!1,function(t){s("7KrV")},null,null).exports,l=s("zC/h"),o=s.n(l),u=s("Paz5"),v=s.n(u),h=s("+ySO"),_=s.n(h),d=s("K5Jf"),m=s.n(d),f={name:"d",data:function(){return{slideList:[{desc:"nhwc",image:o.a},{desc:"hxrj",image:v.a},{desc:"rsdh",image:_.a},{desc:"rsah",image:m.a}],currentIndex:0,timer:""}},mounted:function(){var t=this;this.$nextTick(function(){t.timer=setInterval(function(){t.autoPlay()},4e3)})},methods:{autoPlay:function(){this.currentIndex++,this.currentIndex>this.slideList.length-1&&(this.currentIndex=0)}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-view"},[t._m(0),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"about-message"},[t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"slides"},[s("transition-group",{staticClass:"slide-ul",attrs:{tag:"ul",name:"list"}},t._l(t.slideList,function(e,i){return i===t.currentIndex?s("li",{key:i},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e.image,alt:e.desc}})])]):t._e()}))],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-title"},[this._v("\n    About\n    "),e("div",{staticClass:"card-sub-title"},[this._v("\n      What I am all about.\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("Zikun Deng")]),this._v("\n        attended Transportation of Engineering, Sun Yat-sen University(SYSU) in September 2014. During study in SYSU, he successively\n        focused on the smart card data mining for public transportation and travel time prediction in Guangdong Provincial Key Lab of ITS.\n        In addition, he has won the "),e("b",[this._v("national scholarship")]),this._v(" in 2015 and his GPA ranked the top 5% as of the third year.\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        Since February 2017, he has begun to study computer science and engaged in the research of urban data visualization.\n        He has been in "),e("a",{attrs:{href:"http://zjuvis.org"}},[this._v("ZJUVIS Group")]),this._v(" at the State Key Lab of CAD&CG, Zhejiang University(ZJU),\n        under Prof. "),e("a",{attrs:{href:"http://www.ycwu.org"}},[this._v("Yingcai Wu")]),this._v("'s supervision.\n        Starting from September 2018, he will pursue a Ph.D. in Computer Science from ZJU.\n        His research interests include Urban Computing and Visual Analytics, especially "),e("b",[this._v("the Visualization of Urban Data")]),this._v(".\n      ")])}]};var g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"publication-view"},[e("div",{staticClass:"card-title"},[this._v("\n    Publications\n    "),e("div",{staticClass:"card-sub-title"},[this._v("\n      I build the real value.\n    ")])]),this._v(" "),e("div",{staticClass:"card"},[e("div",{staticClass:"publication-message"},[e("p",[this._v("\n        To be updated. There will be a submission in 2018 IEEE VIS. I hope that it will have good reviews.\n      ")])])])])}]};var b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"blog-view"},[s("div",{staticClass:"card-title"},[t._v("\n    Blog\n    "),s("div",{staticClass:"card-sub-title"},[t._v("\n      Penny and penny!\n    ")])]),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"blog-message"},[s("p",[t._v("\n        The followings are my illustrative notes and homeworks during my study, in order to help myself quickly regain those knowledge\n        and facilitate further research in the future.\n        In addition, it is also a task for me to keep learning english writing and advanced knowledge fetching.\n        Inevitably, some of them would have some mistakes and confuse somebody.\n        Please take the essence and discard the dregs.\n      ")]),t._v(" "),s("article",{staticClass:"film_review"},[s("header",[s("h2",[t._v("Jurassic Park")])]),t._v(" "),s("section",{staticClass:"main_review"},[s("p",[t._v("Dinos were great!")])]),t._v(" "),s("section",{staticClass:"user_reviews"},[s("article",{staticClass:"user_review"},[s("p",[t._v("Way too scary for me.")]),t._v(" "),s("footer",[s("p",[t._v("\n                Posted on\n                "),s("time",{attrs:{datetime:"2015-05-16 19:00"}},[t._v("May 16")]),t._v("\n                by Lisa.\n              ")])])]),t._v(" "),s("article",{staticClass:"user_review"},[s("p",[t._v("I agree, dinos are my favorite.")]),t._v(" "),s("footer",[s("p",[t._v("\n                Posted on\n                "),s("time",{attrs:{datetime:"2015-05-17 19:00"}},[t._v("May 17")]),t._v("\n                by Tom.\n              ")])])])]),t._v(" "),s("footer",[s("p",[t._v("\n            Posted on\n            "),s("time",{attrs:{datetime:"2015-05-15 19:00"}},[t._v("May 15")]),t._v("\n            by Staff.\n          ")])])])])])])}]};var C={name:"App",components:{NameAndPic:a,MenuBar:c,AboutView:s("VU/8")(f,p,!1,function(t){s("zpZ7")},null,null).exports,PublicationView:s("VU/8")({},g,!1,function(t){s("vlBi")},null,null).exports,BlogView:s("VU/8")({},b,!1,function(t){s("x2wP")},null,null).exports}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("name-and-pic"),this._v(" "),e("menu-bar"),this._v(" "),e("about-view"),this._v(" "),e("publication-view"),this._v(" "),e("blog-view")],1)},staticRenderFns:[]};var y=s("VU/8")(C,w,!1,function(t){s("FGMY")},null,null).exports,k=s("/ocq"),x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var E=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},x,!1,function(t){s("Ugm9")},"data-v-694cd902",null).exports;i.a.use(k.a);var U=new k.a({routes:[{path:"/",name:"HelloWorld",component:E}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:U,components:{App:y},template:"<App/>"})},Paz5:function(t,e,s){t.exports=s.p+"static/img/slide1.06c329b.jpg"},USNd:function(t,e,s){t.exports=s.p+"static/img/cat2.5ce7970.jpg"},Ugm9:function(t,e){},lQVI:function(t,e){},vlBi:function(t,e){},wjFS:function(t,e,s){t.exports=s.p+"static/img/cat3.f6bc61b.jpg"},x2wP:function(t,e){},"zC/h":function(t,e,s){t.exports=s.p+"static/img/slide0.6b2d0d7.jpg"},zpZ7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.358fbf97b9257b70eb77.js.map