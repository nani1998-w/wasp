"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,p(p({ref:t},l),{},{components:r})):n.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905)),o=r(44996);const p={id:"01-creating-the-project",title:"Creating the project"},i=void 0,c={unversionedId:"tutorials/dev-excuses-app/01-creating-the-project",id:"tutorials/dev-excuses-app/01-creating-the-project",title:"Creating the project",description:"By now you've already learned how to install Wasp and create a new project. So let\u2019s create a new web app appropriately named ItWaspsOnMyMachine.",source:"@site/docs/tutorials/dev-excuses-app/01-creating-the-project.md",sourceDirName:"tutorials/dev-excuses-app",slug:"/tutorials/dev-excuses-app/01-creating-the-project",permalink:"/docs/tutorials/dev-excuses-app/01-creating-the-project",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/tutorials/dev-excuses-app/01-creating-the-project.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"01-creating-the-project",title:"Creating the project"}},s={},l=[],u={toc:l},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By now you've already learned ",(0,a.kt)("a",{parentName:"p",href:"/docs/quick-start"},"how to install Wasp and create a new project"),". So let\u2019s create a new web app appropriately named ",(0,a.kt)("inlineCode",{parentName:"p"},"ItWaspsOnMyMachine"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wasp new ItWaspsOnMyMachine\n")),(0,a.kt)("p",null,"Changing the working directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ItWaspsOnMyMachine\n")),(0,a.kt)("p",null,"Starting the app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wasp start\n")),(0,a.kt)("p",null,"Now your default browser should open up with a simple predefined text message. That\u2019s it! \ud83e\udd73 For now \u2013 the codebase consists of only two files! ",(0,a.kt)("inlineCode",{parentName:"p"},"main.wasp")," is the config file that defines the application\u2019s functionality. And ",(0,a.kt)("inlineCode",{parentName:"p"},"MainPage.js")," is the front-end. You can delete ",(0,a.kt)("inlineCode",{parentName:"p"},"Main.css"),", we won't use that. And don't forget to remove ",(0,a.kt)("inlineCode",{parentName:"p"},"import './Main.css'")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"MainPage.js")," file. "),(0,a.kt)("img",{alt:"Initial page",src:(0,o.Z)("img/init-page.png")}))}f.isMDXComponent=!0}}]);