(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(140),l=a(150);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},140:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(139),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var o=a(141),m=a.n(o);a.d(t,"PageRenderer",function(){return m.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},141:function(e,t,a){var n;e.exports=(n=a(143))&&n.default||n},142:function(e){e.exports={data:{site:{siteMetadata:{title:"OurLabs",subTitle:"Benefit Corp"}}}}},143:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(48),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},144:function(e,t,a){e.exports={z:"header-module--z--2uvXy"}},146:function(e,t,a){e.exports={absolute:"nav-module--absolute--2umVS",pos:"nav-module--pos--2kyWa"}},148:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(142),r=a(0),i=a.n(r),l=a(4),s=a.n(l),c=a(151),o=a.n(c),m=a(140),u=(a(144),a(146)),d=a.n(u),p=function(e){var t=e.siteTitle;return i.a.createElement("nav",{id:"nav",className:"pt2 absolute dt w-100 center "+d.a.pos},i.a.createElement("div",{className:"dtc w5 v-mid "},i.a.createElement("p",{className:"f3 fw4 grow pointer dib-ns ph3 ml3 mb3"},t)),i.a.createElement("div",{className:"dtc tr mt1 "},i.a.createElement("p",{className:"f5 fw5 grow pointer dn dib-ns pr4 mb3"},"Mission"),i.a.createElement("p",{className:"f5 fw5 grow pointer dn dib-ns pr4 mb3"},"Who")))},f=function(e){var t=e.siteTitle;return i.a.createElement("footer",{className:"ph3 ph4-l black-70 bt b--black-10"},i.a.createElement("div",{className:"mb4-l cf "},i.a.createElement("h1",{className:"fl w-100 pv0 f6 fw6  tracked mb4"},t)),i.a.createElement("section",{className:"cf mb5"},i.a.createElement("div",{className:"mb4 mb0-ns w-100 w-50-l fr"},i.a.createElement("a",{className:"black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l",href:"mailto:hello@impossible.com"},"email@email.com")),i.a.createElement("div",{className:"mb4 mb0-ns fl w-100 w-50-l"},i.a.createElement("p",{className:"f4 fw6 mb2 f6 mt0"},"Sign up for our newsletter."),i.a.createElement("input",{placeholder:"Email Address",className:"mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"}),i.a.createElement("input",{type:"submit",className:"input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"}))),i.a.createElement("div",{className:"dt dt--fixed w-100"},i.a.createElement("div",{className:"dn dtc-ns v-mid"},i.a.createElement("p",{className:"f7 black-70 dib pr3 mb3"},"Copyright © Your Company 2048"))),i.a.createElement("div",{className:"db dn-ns"},i.a.createElement("p",{className:"f7 black-70 mt4 tc"},"Copyright ©")))},b=(a(148),function(e){var t=e.children;return i.a.createElement(m.StaticQuery,{query:"3324153991",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,subTitle:e.site.siteMetadata.subTitle,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t),i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}))},data:n})});b.propTypes={children:s.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-page-2-jsx-e1a92cf0d2d318d71a61.js.map