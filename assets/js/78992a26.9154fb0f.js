"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,b=m["".concat(s,".").concat(u)]||m[u]||g[u]||o;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38610:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(44996);const o=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,r.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(39960);a(44996);const o=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(o,null),n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(o,null),n.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},27701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=(a(39960),a(44996),a(92908),a(70589),a(38610));const i={title:"Alpha Testing Program: post-mortem",authors:["matijasos"],image:"/img/atp/welcome-to-atp-notion.png",tags:["webdev","wasp","startups","github"]},l=void 0,s={permalink:"/blog/2022/11/16/alpha-testing-program-post-mortem",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-11-16-alpha-testing-program-post-mortem.md",source:"@site/blog/2022-11-16-alpha-testing-program-post-mortem.md",title:"Alpha Testing Program: post-mortem",description:"We are working on a new web framework that integrates with React & Node.js, and also happens to be a language. As you can probably imagine, it\u2019s not easy to get people to use a new piece of technology, especially while still in Alpha. On the other hand, without users and their feedback, it\u2019s impossible to know what to build.",date:"2022-11-16T00:00:00.000Z",formattedDate:"November 16, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"startups",permalink:"/blog/tags/startups"},{label:"github",permalink:"/blog/tags/github"}],readingTime:6.41,hasTruncateMarker:!0,authors:[{name:"Matija Sosic",title:"Co-founder & CEO @ Wasp",url:"https://github.com/matijasos",imageURL:"https://github.com/matijasos.png",key:"matijasos"}],frontMatter:{title:"Alpha Testing Program: post-mortem",authors:["matijasos"],image:"/img/atp/welcome-to-atp-notion.png",tags:["webdev","wasp","startups","github"]},prevItem:{title:"How Wasp reached all-time high PR count during Hacktoberfest: tips for OSS maintainers",permalink:"/blog/2022/11/17/hacktoberfest-wrap-up"},nextItem:{title:"Feature Announcement - Tailwind CSS support",permalink:"/blog/2022/11/16/tailwind-feature-announcement"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are working on a new web framework that integrates with React & Node.js, and also happens to be a language. As you can probably imagine, it\u2019s not easy to get people to use a new piece of technology, especially while still in Alpha. On the other hand, without users and their feedback, it\u2019s impossible to know what to build."),(0,r.kt)("p",null,"That is why we ran Alpha Testing Program for Wasp - here is what we learned and what went both well and wrong along the way."),(0,r.kt)(o.Z,{alt:"twitter DM - shared atp in swag groups",source:"img/atp/swag-groups-twitter.png",mdxType:"ImgWithCaption"}))}u.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...a}=e;return(0,r.kt)(i,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0}}]);