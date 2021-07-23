(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{104:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t(0),s=t.n(l),c=t(114),r=t(116),o=t(119);function i({title:e,children:a,language:t,metastring:n}){return s.a.createElement("div",{className:"code-with-header"},s.a.createElement("div",{className:"code-header"},e),s.a.createElement(o.a,{className:t,metastring:n},a))}t(89);var m=({placeholder:e})=>s.a.createElement("form",{className:"email-signup-form",action:"https://gmail.us4.list-manage.com/subscribe/post?u=8139c7de74df98aa17054b235&id=f0c6ba5f1d",method:"post"},s.a.createElement("input",{"aria-label":"Email address",name:"EMAIL",type:"email",required:!0,className:"input",placeholder:e||"Enter your email"}),s.a.createElement("div",{className:""},s.a.createElement("button",{className:"button button--primary",type:"submit"},"Subscribe"))),d=t(115),u=t(111),p=t(112),E=t(117),g=t(90),h=t.n(g),f=t(181),b=t.n(f);const v=[{title:"Quick start",description:s.a.createElement(s.a.Fragment,null,"No more endless configuration files. Create a production-ready web app with just a few lines of code - we will set you up with all the best defaults.")},{title:"Speed & Power",description:s.a.createElement(s.a.Fragment,null,"Move fast using Wasp's declarative language, but also drop down to ",s.a.createElement("code",null,"js/html/css...")," when you require more control.")},{title:"No lock-in",description:s.a.createElement(s.a.Fragment,null,"If Wasp becomes too limiting for you, simply eject and continue with the human-readable source code following industry best-practices.")}];function w({imageUrl:e,title:a,description:t}){const n=Object(p.a)(e);return s.a.createElement("div",{className:Object(c.a)("col col--4",h.a.feature)},n&&s.a.createElement("div",{className:"text--center"},s.a.createElement("img",{className:h.a.featureImage,src:n,alt:a})),s.a.createElement("h2",null,a),s.a.createElement("p",null,t))}function N(){return s.a.createElement("section",{className:"section-lg"},s.a.createElement("div",{className:"container",style:{textAlign:"center"}},s.a.createElement("img",{className:"logo",src:"img/eqpar-separator.png"})))}function y(){return s.a.createElement("a",{href:"https://www.producthunt.com/posts/wasp-lang-alpha?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-wasp-lang-alpha",target:"_blank"},s.a.createElement("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=277135&theme=light&period=daily",alt:"Wasp-lang Alpha - Develop web apps in React & Node.js with no boilerplate | Product Hunt",style:{width:"250px",height:"54px"},width:"250",height:"54"}))}function j(){return s.a.createElement(i,{title:"todoApp.wasp",language:"css"},'app todoApp {\n  title: "ToDo App" /* visible in tab */\n}\n\nroute "/" -> page Main\npage Main {\n  /* import your React code */\n  component: import Main from "@ext/Main.js"\n}\n\nauth { /* full-stack auth out-of-the-box */\n  userEntity: User,\n  methods: [ EmailAndPassword ],\n}\n')}function k(){const e=Object.freeze({NEW_APP:"Create a new app",DEFINE_ENTITY:"Define and query a data model",ADD_AUTH:"Add authentication"}),[a,t]=Object(l.useState)(e.NEW_APP);function n(){if(a===e.NEW_APP){const e='/* global app settings */\napp todoApp {\n  title: "ToDo App" /* browser tab title */\n}\n\n/* routing */\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/Main" /* import your React code */\n}\n',a="import React from 'react'\n\nexport default () => <span> Hello World! </span>\n";return s.a.createElement("div",{className:"codeExampleFiles"},s.a.createElement(i,{title:"todoApp.wasp",language:"css"},e),s.a.createElement(i,{title:"ext/Main.js | External React code, imported above",language:"jsx"},a),s.a.createElement("div",null,"That's it, this is the whole app! Run ",s.a.createElement("code",null,"wasp start")," and check it out at ",s.a.createElement("code",null,"http://localhost:3000"),"!"))}if(a===e.ADD_AUTH){const e='/* ... */\n\n/* full-stack auth out-of-the-box */\nauth {\n  userEntity: User,\n  methods: [ EmailAndPassword ], /* more methods coming soon */\n  onAuthFailedRedirectTo: "/login"\n}\n\n/* email & password required because of the auth method above */\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\npsl=}\n\npage Main {\n  authRequired: true, /* available only to logged in users */\n  component: import Main from "@ext/Main"\n}\n',a="import React from 'react'\nimport Todo from './Todo.js'\n\n/* Because of authRequired property in todoApp.wasp, this page is\n * available only to logged in users and prop 'user' is automatically provided by wasp. */\nexport default ({ user }) => {\n  return <Todo/>\n}\n";return s.a.createElement("div",{className:"codeExampleFiles"},s.a.createElement(i,{title:"todoApp.wasp",language:"css"},e),s.a.createElement(i,{title:"ext/Main.js | Checking if user is logged in",language:"jsx"},a),s.a.createElement("div",null,"To learn more about authentication & authorization in Wasp, check the ",s.a.createElement(d.a,{to:Object(p.a)("/docs/language/basic-elements#authentication--authorization")},"docs"),"."))}if(a===e.DEFINE_ENTITY){const e='/* ... */\n\n/* Data model is defined via Prisma Schema Language (PSL) */\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n\nquery getTasks {\n  fn: import { getTasks } from "@ext/queries.js", /* import Node.js function */\n  /* A list of entities this query uses - useful for automatic invalidation and refetching */\n  entities: [Task]\n}\n',a="export const getTasks = async (args, context) => {\n  // Since we above declared this query is using Task, it is automatically injected in the\n  // context.\n  return context.entities.Task.findMany()\n}\n",t="import React from 'react'\nimport { useQuery } from '@wasp/queries'\nimport getTasks from '@wasp/queries/getTasks.js'\n\nexport default () => {\n  // Standard useQuery syntax, Wasp provides a thin wrapper around it.\n  const { data: tasks } = useQuery(getTasks)\n  return <Tasks tasks={tasks}/>\n}\n";return s.a.createElement("div",{className:"codeExampleFiles"},s.a.createElement(i,{title:"todoApp.wasp",language:"css"},e),s.a.createElement(i,{title:"ext/queries.js | Node.js function imported in a query above",language:"jsx"},a),s.a.createElement(i,{title:"ext/Todo.js | Invoking query from React code",language:"jsx"},t),s.a.createElement("div",null,"To learn more about working with data in Wasp, check the ",s.a.createElement(d.a,{to:Object(p.a)("/docs/language/language/basic-elements#entity")},"docs"),"."))}return console.log("this should never happen."),null}function r(){function n({codeExampleKey:n}){return s.a.createElement("button",{className:Object(c.a)("button","info",a===e[n]&&"is-active","button--secondary"),onClick:()=>t(e[n])},e[n])}return Object.keys(e).map((e=>s.a.createElement(n,{codeExampleKey:e})))}return s.a.createElement("div",{className:"row CodeExamples"},s.a.createElement("div",{className:"ButtonTabs col col--3"},s.a.createElement("div",null,s.a.createElement(r,null))),s.a.createElement("div",{className:"col col--9"},s.a.createElement(n,null)))}function O(){return s.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=wasp-lang&repo=wasp&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"160px",height:"30px"})}function x(){return s.a.createElement("a",{href:"https://discord.gg/rzdnErX"},s.a.createElement("img",{alt:"discord",src:"https://img.shields.io/discord/686873244791210014?label=chat%20@%20discord",height:"29px"}))}function T(){return s.a.createElement("section",{className:"section-lg bg-diff",id:"signup"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h2",null,"Stay up to date"),s.a.createElement("h3",null,s.a.createElement("p",null,"Join our mailing list and be the first to know when we ship new features and updates!")))),s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered),style:{paddingTop:"1rem"}},s.a.createElement("div",{className:"col col--8 col--offset-2"},s.a.createElement(m,null))),s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered,"section-text")},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h3",null,s.a.createElement("p",null,"Also, make sure to check out ",s.a.createElement(d.a,{to:"https://github.com/wasp-lang/wasp"},"Wasp repo on Github")," and express your support by giving us a star!")))),s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered),style:{paddingTop:"1rem"}},s.a.createElement("div",{className:"col"},s.a.createElement(O,null),s.a.createElement(x,null)))))}function C(){return s.a.createElement("section",{className:Object(c.a)("section-lg","bg-diff",h.a.socialProofSection)},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("div",{className:Object(c.a)(h.a.socialProof)},s.a.createElement("div",{className:Object(c.a)(h.a.backedByYC)},s.a.createElement("img",{className:Object(c.a)(h.a.ycLogo),src:"img/ycombinator-logo.png"}),s.a.createElement("span",null,"backed by ",s.a.createElement("strong",null,"Y Combinator"))),s.a.createElement(y,null))))," "))}a.default=function(){const e=Object(u.a)(),{siteConfig:a={}}=e,[t,l]=s.a.useState(!1),o=Object(p.a)("docs/tutorials/todo-app"),i="https://wasp-rwa.netlify.app";return s.a.createElement(r.a,{title:""+a.title,description:a.tagline},s.a.createElement(E.a,null,s.a.createElement("meta",{property:"og:image",content:a.url+Object(p.a)("img/hero-code-shot.png")})),s.a.createElement("header",{className:Object(c.a)("hero",h.a.heroBanner)},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row hero-row"},s.a.createElement("div",{className:"col col--7"},s.a.createElement("div",{className:"hero-text-col"},s.a.createElement("h2",{className:"hero-subtitle"},a.tagline),s.a.createElement("div",{className:"hero-works-with"},s.a.createElement("h3",{className:"works-with-text"},"Describe high-level features with Wasp DSL and write the rest of your logic in React, Node.js and Prisma."),s.a.createElement("div",{className:"hero-works-with-icons"},s.a.createElement("img",{src:"img/react-logo.svg"}),s.a.createElement("img",{src:"img/nodejs-logo.svg"}),s.a.createElement("img",{src:"img/prisma-logo.svg"})))))," ",s.a.createElement("div",{className:"col col--5"},s.a.createElement(j,null))," ")," ",s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered,h.a.tryWaspRow)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("div",{className:Object(c.a)(h.a.tryWaspContainer)},s.a.createElement("div",{className:Object(c.a)(h.a.startCliCmd)},s.a.createElement("span",null,s.a.createElement("code",null,"curl -sSL http://get.wasp-lang.dev | sh"))),s.a.createElement("div",{className:(h.a.startButtonAndVersion,h.a.visibleOnDesktopOnly)},s.a.createElement("button",{className:Object(c.a)("button button--primary button--huge",h.a.heroButton),onClick:function(){l(!0)}},"Try Wasp in 5 minutes \u2192")),s.a.createElement("div",{className:Object(c.a)(h.a.startButtonAndVersion,h.a.visibleOnMobileOnly)},s.a.createElement(d.a,{className:Object(c.a)("button button--primary button--huge",h.a.heroButton),to:Object(p.a)("/docs")},"Try Wasp in 5 minutes \u2192"))),s.a.createElement("div",{className:Object(c.a)(h.a.usingWindows)},"Using Windows? Check the instructions ",s.a.createElement(d.a,{to:Object(p.a)("/docs/#2-installation")},"here"),"."),s.a.createElement(b.a,{isOpen:t,style:{content:{top:"40%",left:"40%",transform:"translate(-30%, -30%)",paddingTop:"4rem",background:"var(--ifm-hero-background-color)"}},onRequestClose:function(){l(!1)},shouldCloseOnOverlayClick:!0},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(c.a)("row")},s.a.createElement("div",{className:"col col--10"},s.a.createElement("h2",{className:"modal-step-title"},"1. Open your terminal and run:"),s.a.createElement("div",{className:Object(c.a)(h.a.startCliCmd),style:{height:"40px"}},s.a.createElement("span",null,s.a.createElement("code",null,"curl -sSL http://get.wasp-lang.dev | sh"))),s.a.createElement("h2",{className:"modal-step-title ",style:{marginTop:"4rem"}},"2. Create a new project:"),s.a.createElement("div",{className:Object(c.a)(h.a.startCliCmd),style:{height:"40px"}},s.a.createElement("span",null,s.a.createElement("code",null,"wasp new MyFirstApp"))),s.a.createElement("h2",{className:"modal-step-title",style:{marginTop:"4rem"}},"3. Run your first app:"),s.a.createElement("div",{className:Object(c.a)(h.a.startCliCmd),style:{height:"40px",marginRight:"10px"}},s.a.createElement("span",null,s.a.createElement("code",null,"cd MyFirstApp && wasp start"))),s.a.createElement("span",null,"That's it! Open ",s.a.createElement(d.a,{to:"http://localhost:3000/"},"http://localhost:3000")," and see how it looks like!"),s.a.createElement("div",{style:{marginTop:"4rem"}},s.a.createElement("span",null,"You ran into problems or want more details? Refer to the ",s.a.createElement(d.a,{to:Object(p.a)("/docs")},"docs"),".")))))),s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered),style:{paddingTop:"1rem"}},s.a.createElement("div",{className:"col"},s.a.createElement(O,null),s.a.createElement(x,null)))))," ")),s.a.createElement("main",null,s.a.createElement(C,null),s.a.createElement("section",{className:"section-lg"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--12"},s.a.createElement("h3",{className:"title"},"Wasp is an open source, declarative DSL for devs who want to ",s.a.createElement("span",{className:"title-strong"},"use modern web dev stack"),"\xa0",s.a.createElement("span",{style:{whiteSpace:"nowrap"}},"(React ",s.a.createElement("img",{src:"img/react-logo.png",height:"25px"}),", Node.js ",s.a.createElement("img",{src:"img/node-logo.png",height:"25px"}),", Prisma ",s.a.createElement("img",{src:"img/prisma-logo.png",height:"25px"}),", ...)"),"\xa0",s.a.createElement("span",{className:"title-strong"},"without writing boilerplate"),"."),s.a.createElement("h3",null,s.a.createElement("p",null,"Frontend, backend and deployment - all unified with one concise language."),s.a.createElement("p",null,"Zero configuration, all best practices.")))))),s.a.createElement(N,null),s.a.createElement("section",{className:"section-lg",id:"how-it-works"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h2",null,"How it works"),s.a.createElement("h3",null,s.a.createElement("p",null,"Given ",s.a.createElement("code",null,".wasp")," + ",s.a.createElement("code",null,".js"),", ",s.a.createElement("code",null,".css"),", ",s.a.createElement("code",null,"...")," files as an input, Wasp compiler behind the scene\xa0",s.a.createElement("span",{className:"title-strong"},"generates the full source code of your web app")," - front-end, back-end and deployment.")))),s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered),style:{paddingTop:"2rem"}},s.a.createElement("div",{className:"col"},s.a.createElement("img",{className:"wasp-diagram",src:"img/wasp-compilation.png",alt:"Wasp compilation"}))))),s.a.createElement(N,null),v&&v.length>0&&s.a.createElement("section",{className:Object(c.a)(h.a.features,"bg-diff")},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},v.map(((e,a)=>s.a.createElement(w,Object(n.a)({key:a},e))))))),s.a.createElement(N,null),s.a.createElement("section",{className:"section-lg",id:"fast-and-scalable"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h2",null,"Quick to start, easy to scale"),s.a.createElement("h3",null,s.a.createElement("p",null,"Wasp aims to be at least as flexible as the traditional web frameworks like Ruby on Rails.",s.a.createElement("br",null),"Start your project quickly with the best defaults and customize and scale it as it grows.")),s.a.createElement("h3",null,s.a.createElement("p",null,"As an example, we used Wasp to implement a copy of Medium:"))))," ",s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("a",{href:i,target:"_blank"},s.a.createElement("img",{className:"rwa",src:"img/rwa-screenshot.png",alt:"RealWorldApp in Wasp"})))),s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h3",null,"You can try out the deployed app ",s.a.createElement("a",{href:i},"here")," or check out the source code ",s.a.createElement("a",{href:"https://github.com/wasp-lang/wasp/tree/master/examples/realworld"},"here"),"."))))),s.a.createElement(N,null),s.a.createElement("section",{className:"section-lg",id:"what-can-do"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(c.a)(h.a.featuresAndRoadmap,"row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h2",null,"Features & Roadmap"))),s.a.createElement("div",{className:Object(c.a)("row")},s.a.createElement("div",{className:"col col--6"},s.a.createElement("h3",{className:h.a.featureListTitle},"Alpha"),s.a.createElement("ul",{className:Object(c.a)(h.a.featuresList,h.a.featuresListDone)},s.a.createElement("li",null," full-stack auth (email & password) "),s.a.createElement("li",null," pages & routing "),s.a.createElement("li",null," blurs the line between client & server - define your server actions and queries and call them directly in your client code (RPC)! "),s.a.createElement("li",null," smart caching of server actions and queries (automatic cache invalidation) "),s.a.createElement("li",null," entity (data model) definition with Prisma.io "),s.a.createElement("li",null," ACL on frontend "),s.a.createElement("li",null," importing NPM dependencies "))),s.a.createElement("div",{className:"col col--6"},s.a.createElement("h3",{className:h.a.featureListTitle},"Coming next"),s.a.createElement("ul",{className:Object(c.a)(h.a.featuresList,h.a.featuresListComing)},s.a.createElement("li",null," ACL on backend "),s.a.createElement("li",null," one-click deployment "),s.a.createElement("li",null," more auth methods (Google, Linkedin, ...) "),s.a.createElement("li",null," tighter integration of entities with other features "),s.a.createElement("li",null," themes and layouts "),s.a.createElement("li",null," support for explicitely defined server API "),s.a.createElement("li",null," inline JS - ability to mix JS code with Wasp code! "),s.a.createElement("li",null," Typescript support "),s.a.createElement("li",null," server-side rendering "),s.a.createElement("li",null," Visual Editor "),s.a.createElement("li",null," support for different languages on backend "),s.a.createElement("li",null," richer wasp language with better tooling ")))))),s.a.createElement(N,null),s.a.createElement("section",{className:"section-lg",id:"the-language"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h2",null,"The Language"),s.a.createElement("h3",null,s.a.createElement("p",null,"Concepts such as ",s.a.createElement("em",null,"app"),", ",s.a.createElement("em",null,"page"),", ",s.a.createElement("em",null,"route"),", ",s.a.createElement("em",null,"auth"),"\xa0 etc. are baked into Wasp, providing the higher level of expressiveness.")))),s.a.createElement(k,null))),s.a.createElement("section",{className:"section-lg"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered)},s.a.createElement("div",{className:"col col--10 col--offset-1"},s.a.createElement("h2",null,"Take the tutorial"),s.a.createElement("h3",null,s.a.createElement("p",null,"Take the ",s.a.createElement(d.a,{to:o}," Todo App tutorial ")," and build a full-fledged Todo app in Wasp!")))),s.a.createElement("div",{className:Object(c.a)("row",h.a.responsiveCentered),style:{paddingTop:"2rem"}},s.a.createElement("div",{className:"col"},s.a.createElement("img",{alt:"How Todo App will work once it is done",src:Object(p.a)("img/todo-app-tutorial-intro.gif"),style:{border:"1px solid black"}}))))),s.a.createElement("div",{id:"join-the-list"},s.a.createElement(T,null))))}}}]);