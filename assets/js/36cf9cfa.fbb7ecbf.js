"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9076],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84780:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);const i=e=>n.createElement("span",null,n.createElement("a",{href:"https://discord.gg/rzdnErX"}," Discord "))},38610:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),i=a(44996);const s=e=>n.createElement("div",null,n.createElement("p",{align:"center"},n.createElement("figure",null,n.createElement("img",{style:{width:e.width},alt:e.alt,src:(0,i.Z)(e.source)}),n.createElement("figcaption",{class:"image-caption",style:{fontStyle:"italic",opacity:.6,fontSize:"0.9rem"}},e.caption))))},92908:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),i=a(39960);a(44996);const s=()=>n.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),o=()=>n.createElement("p",{className:"in-blog-cta-link-container"},n.createElement(i.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Beta (try it out)!"),n.createElement(s,null),n.createElement(i.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),n.createElement(s,null),n.createElement(i.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},38722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=a(87462),i=(a(67294),a(3905)),s=(a(39960),a(44996),a(92908),a(70589),a(38610)),o=a(84780);const r={title:"Wasp steps up its database game with Fully Managed Dev DB & DB Seeding",authors:["martinsos"],image:"/img/db-start-and-seed/wasp-db-improvements.png",tags:["database","wasp","webdev","prisma"]},l=void 0,d={permalink:"/blog/2023/04/13/db-start-and-seed",editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/blog/2023-04-13-db-start-and-seed.md",source:"@site/blog/2023-04-13-db-start-and-seed.md",title:"Wasp steps up its database game with Fully Managed Dev DB & DB Seeding",description:"As a full-stack framework, Wasp doesn\u2019t care \u201cjust\u201d about frontend and backend, but it also covers the database!",date:"2023-04-13T00:00:00.000Z",formattedDate:"April 13, 2023",tags:[{label:"database",permalink:"/blog/tags/database"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"webdev",permalink:"/blog/tags/webdev"},{label:"prisma",permalink:"/blog/tags/prisma"}],readingTime:5.085,hasTruncateMarker:!0,authors:[{name:"Martin Sosic",title:"Co-founder & CTO @ Wasp",url:"https://github.com/martinsos",imageURL:"https://github.com/martinsos.png",key:"martinsos"}],frontMatter:{title:"Wasp steps up its database game with Fully Managed Dev DB & DB Seeding",authors:["martinsos"],image:"/img/db-start-and-seed/wasp-db-improvements.png",tags:["database","wasp","webdev","prisma"]},prevItem:{title:"How I Built CoverLetterGPT - SaaS app with the PERN stack, GPT, Stripe, & Chakra UI",permalink:"/blog/2023/04/17/How-I-Built-CoverLetterGPT"},nextItem:{title:"Wasp Auth UI: The first full-stack auth with self-updating forms!",permalink:"/blog/2023/04/12/auth-ui"}},p={authorsImageUrls:[void 0]},u=[{value:"Fully Managed Dev Database \ud83d\ude80",id:"fully-managed-dev-database-",level:2},{value:"Database seeding \ud83c\udf31",id:"database-seeding-",level:2},{value:"Plans for the future \ud83d\udd2e",id:"plans-for-the-future-",level:2}],c={toc:u},m="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As a full-stack framework, Wasp doesn\u2019t care \u201cjust\u201d about frontend and backend, but it also covers the database!"),(0,i.kt)("p",null,"It does this by allowing you to define Prisma data models in a Wasp file, connecting them to the relevant Wasp Operations, warning you if you need to do database migrations, deploying the database for you (if you choose so), \u2026 ."),(0,i.kt)("p",null,"Since Wasp knows so much about your database, that puts us in a good position to keep finding ways to improve the developer experience regarding dealing with the database. For Wasp v0.10, we focused on:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Wasp running the dev database for you with no config needed \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Fully Managed Dev Database")," \ud83d\ude80"),(0,i.kt)("li",{parentName:"ol"},"Wasp helping you to initialize the database with some data \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Db Seeding")," \ud83c\udf31")),(0,i.kt)(s.Z,{caption:"Wasp now has `wasp start db` and `wasp db seed`!",alt:"strong wasp database",source:"img/db-start-and-seed/wasp-db-improvements.png",mdxType:"ImgWithCaption"}),(0,i.kt)("h2",{id:"fully-managed-dev-database-"},"Fully Managed Dev Database \ud83d\ude80"),(0,i.kt)("p",null,"You might have asked yourself:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If Wasp already knows so much about my database, why do I need to bother running it on my own!?")),(0,i.kt)("p",null,"Ok, when you start a new Wasp project it is easy because you are using an SQLite database, but once you switch to Postgres, it falls onto you to take care of it: run it, provide its URL to Wasp via env var, handle multiple databases if you have multiple Wasp apps, \u2026 ."),(0,i.kt)("p",null,"This can get tedious quickly, especially if you are visiting your Wasp project that you haven\u2019t worked on for a bit and need to figure out again how to run the db, or you need to check out somebody else\u2019s Wasp project and don\u2019t have it all set up yet. It is something most of us are used to, especially with other frameworks, but still, we can do better at Wasp!"),(0,i.kt)("p",null,"This is where ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp start db")," comes in!"),(0,i.kt)(s.Z,{caption:"wasp start db in action, running a posgtres dev db for you",alt:"wasp start db running in terminal",source:"img/db-start-and-seed/wasp-start-db-terminal.png",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"Now, all you need to do to run the development database, is run ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp start db"),", and Wasp will run it for you and will know how to connect to it during development."),(0,i.kt)("p",null,"No env var setting, no remembering how to run the db. The only requirement is that you have ",(0,i.kt)("inlineCode",{parentName:"p"},"Docker")," installed on your machine. Data from your database will be persisted on the disk between the runs, and each Wasp app will have its own database assigned. "),(0,i.kt)("p",null,"Btw, you can still use a custom database that you ran on your own if you want, the same way it was done before in Wasp: by setting env var ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL"),"."),(0,i.kt)("h2",{id:"database-seeding-"},"Database seeding \ud83c\udf31"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Database seeding"),"\xa0is a term for populating the database with some initial data."),(0,i.kt)("p",null,"Seeding is most commonly used for two following scenarios:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To put the development database into a state convenient for testing / playing with it."),(0,i.kt)("li",{parentName:"ol"},"To initialize the dev/staging/prod database with some essential data needed for it to be useful, for example, default currencies in a Currency table.")),(0,i.kt)("p",null,"Wasp so far had no direct support for seeding, so you had to either come up with your own solution (e.g. script that connects to the db and executes some queries), or massage data manually via Prisma Studio (",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db studio"),")."),(0,i.kt)("p",null,"There is one big drawback to both of the approaches I mentioned above though: there is no easy way to reuse logic that you have already implemented in your Wasp app, especially Actions (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"createTask"),")! This is pretty bad, as it makes your seeding logic brittle."),(0,i.kt)("p",null,"This is where ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db seed")," comes in! Now, Wasp allows you to write a JS/TS function, import any server logic (including Actions) into it as you wish, and then seed the database with it."),(0,i.kt)(s.Z,{caption:"wasp db seed in action, initializing the db with dev data",alt:"wasp db seed running in terminal",source:"img/db-start-and-seed/wasp-db-seed-terminal.png",mdxType:"ImgWithCaption"}),(0,i.kt)("p",null,"Registering seed functions in Wasp is easy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'app MyApp {\n  // ...\n  db: {\n    // ...\n    seeds: [\n      import { devSeedSimple } from "@server/dbSeeds.js",\n      import { prodSeed } from "@server/dbSeeds.js"\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"Example of a seed function from above, ",(0,i.kt)("inlineCode",{parentName:"p"},"devSeedSimple"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { createTask } from \'./actions.js\'\n\nexport const devSeedSimple = async (prismaClient) => {\n  const user = await createUser(prismaClient, {\n      username: "RiuTheDog",\n      password: "bark1234"\n  })\n\n  await createTask(\n    { description: "Chase the cat" },\n    { user, entities: { Task: prismaClient.task } }\n  )\n}\n\nasync function createUser (prismaClient, data) {\n  const { password, ...newUser } = await prismaClient.user.create({ data })\n  return newUser\n}\n')),(0,i.kt)("p",null,"Finally, to run these seeds, you can either do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wasp db seed"),": If you have just one seed function, it will run it. If you have multiple, it will interactively ask you to choose one to run."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wasp db seed <seed-name>"),": It will run the seed function with the specified name, where the name is the identifier you used in its\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"import"),"\xa0expression in the\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"app.db.seeds"),"\xa0list. Example:\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"wasp db seed devSeedSimple"),".")),(0,i.kt)("p",null,"We also added ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db reset")," command (calls ",(0,i.kt)("inlineCode",{parentName:"p"},"prisma db reset")," in the background) that cleans up the database for you (removes all data and tables and re-applies migrations), which is great to use in combination with ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp db seed"),", as a precursor."),(0,i.kt)("h2",{id:"plans-for-the-future-"},"Plans for the future \ud83d\udd2e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"allow customization of managed dev database (Postgres plugins, custom Dockerfile, \u2026)"),(0,i.kt)("li",{parentName:"ul"},"have Wasp run the managed dev database automatically whenever it needs it (instead of you having to run ",(0,i.kt)("inlineCode",{parentName:"li"},"wasp start db")," manually)"),(0,i.kt)("li",{parentName:"ul"},"dynamically find a free port for managed dev database (right now it requires port 5432)"),(0,i.kt)("li",{parentName:"ul"},"provide utility functions to make writing seeding functions easier (e.g. functions for creating new users)"),(0,i.kt)("li",{parentName:"ul"},"right now seeding functions are defined as part of a Wasp server code \u2192 it might be interesting to separate them in a standalone \u201cproject\u201d in the future, while still keeping their easy access to the server logic."),(0,i.kt)("li",{parentName:"ul"},"do you have any ideas/suggestions? Let us know in our ",(0,i.kt)(o.Z,{mdxType:"DiscordLink"}),"!")))}g.isMDXComponent=!0},70589:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(87462),i=(a(67294),a(3905));const s={toc:[]},o="wrapper";function r(e){let{components:t,...a}=e;return(0,i.kt)(o,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}r.isMDXComponent=!0}}]);