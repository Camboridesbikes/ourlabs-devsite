(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(150);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},140:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),l=a(4),s=a.n(l),i=a(139),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var o=a(141),m=a.n(o);a.d(t,"PageRenderer",function(){return m.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},141:function(e,t,a){var n;e.exports=(n=a(143))&&n.default||n},142:function(e){e.exports={data:{site:{siteMetadata:{title:"OurLabs",subTitle:"Benefit Corp"}}}}},143:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),s=a.n(l),i=a(48),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},144:function(e,t,a){e.exports={z:"header-module--z--2uvXy"}},146:function(e,t,a){e.exports={absolute:"nav-module--absolute--2umVS",pos:"nav-module--pos--2kyWa"}},148:function(e,t,a){},150:function(e,t,a){"use strict";var n=a(142),r=a(0),l=a.n(r),s=a(4),i=a.n(s),c=a(151),o=a.n(c),m=a(140),u=(a(144),a(146)),d=a.n(u),f=function(e){var t=e.siteTitle;return l.a.createElement("nav",{id:"nav",className:"pt2 absolute dt w-100 center "+d.a.pos},l.a.createElement("div",{className:"dtc w5 v-mid "},l.a.createElement("h3",{className:"f3 fw4 grow pointer dib-ns ph3 ml3 mb3"},t)),l.a.createElement("div",{className:"dtc tr "},l.a.createElement("h4",{className:"f5 fw5 grow pointer dn dib-ns pr4 mb3"},"Mission"),l.a.createElement("h4",{className:"f5 fw5 grow pointer dn dib-ns pr4 mb3"},"Who")))},p=function(e){var t=e.siteTitle;return l.a.createElement("footer",{className:"pa4 pa5-l black-70 bt b--black-10"},l.a.createElement("div",{className:"mb4-l cf "},l.a.createElement("h1",{className:"fl w-100 pv0 f6 fw6  tracked mb4"},t),l.a.createElement("article",{className:"fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns"},l.a.createElement("h4",{className:"f5 f4-l fw6"},"London"),l.a.createElement("span",{className:"f7 f6-l db black-70"},"11 Downey St."),l.a.createElement("span",{className:"f7 f6-l black-70"},"London, UK"),l.a.createElement("a",{href:"tel:+5555555555",className:"link dim f6 db fw6 pv3 black-70",title:"Call the London office"},"+44 0 5555-5555"))),l.a.createElement("section",{className:"cf mb5"},l.a.createElement("div",{className:"mb4 mb0-ns w-100 w-50-l fr"},l.a.createElement("a",{className:"black-70 f3 f2-ns fw6 tl link dim dib pv3 mt2 mb4 mb0-l",href:"mailto:hello@impossible.com"},"email@email.com")),l.a.createElement("div",{className:"mb4 mb0-ns fl w-100 w-50-l"},l.a.createElement("p",{className:"f4 fw6 mb2 f6 mt0"},"Sign up for our newsletter."),l.a.createElement("input",{placeholder:"Email Address",className:"mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box"}),l.a.createElement("input",{type:"submit",className:"input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray"}))),l.a.createElement("div",{className:"dt dt--fixed w-100"},l.a.createElement("div",{className:"dn dtc-ns v-mid"},l.a.createElement("p",{className:"f7 black-70 dib pr3 mb3"},"Copyright © Your Company 2048"))),l.a.createElement("div",{className:"db dn-ns"},l.a.createElement("p",{className:"f7 black-70 mt4 tc"},"Copyright ©")))},b=(a(148),function(e){var t=e.children;return l.a.createElement(m.StaticQuery,{query:"3324153991",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:e.site.siteMetadata.title,subTitle:e.site.siteMetadata.subTitle,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",null,t),l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}))},data:n})});b.propTypes={children:i.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-404-jsx-8e668eeb32bbc4244586.js.map