(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6055],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2908:function(e,t,n){"use strict";var a=n(7294),i=n(6742),r=(n(4996),function(){return a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")});t.Z=function(){return a.createElement("p",null,a.createElement(i.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),a.createElement(r,null),a.createElement(i.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(r,null),a.createElement(i.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(9756),i=n(7294),r=n(3727),s=n(2263),o=n(3919),l=n(412),u=(0,i.createContext)({collectLink:function(){}}),c=n(4996),p=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var h=function(e){var t,n,h=e.isNavLink,f=e.to,m=e.href,g=e.activeClassName,k=e.isActive,w=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,b=void 0===v||v,x=(0,a.Z)(e,d),y=(0,s.Z)().siteConfig,N=y.trailingSlash,E=y.baseUrl,j=(0,c.C)().withBaseUrl,C=(0,i.useContext)(u),I=f||m,O=(0,o.Z)(I),M=null==I?void 0:I.replace("pathname://",""),S=void 0!==M?(n=M,b&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0;S&&O&&(S=(0,p.applyTrailingSlash)(S,{trailingSlash:N,baseUrl:E}));var P,A=(0,i.useRef)(!1),T=h?r.OL:r.rU,q=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!q&&O&&null!=S&&window.docusaurus.prefetch(S),function(){q&&P&&P.disconnect()}}),[S,q,O]);var W=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,Z=!S||!O||W;return S&&O&&!W&&!w&&C.collectLink(S),Z?i.createElement("a",Object.assign({href:S},I&&!O&&{target:"_blank",rel:"noopener noreferrer"},x)):i.createElement(T,Object.assign({},x,{onMouseEnter:function(){A.current||null==S||(window.docusaurus.preload(S),A.current=!0)},innerRef:function(e){var t,n;q&&e&&O&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},(P=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),n())}))}))).observe(t))},to:S||""},h&&{isActive:k,activeClassName:g}))}},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return r},Z:function(){return s}});var a=n(2263),i=n(3919);function r(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,s=r.forcePrependBaseUrl,o=void 0!==s&&s,l=r.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(r,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,r=e.split(/[#?]/)[0],s="/"===r||r===a?r:(i=r,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(r,s)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(i).default}});var r=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(r).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6709:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return d},default:function(){return f}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),s=n(2908),o=["components"],l={title:"Building a backbone for a full-stack web app with a single config file.",authors:["maksym36ua"],tags:["wasp"]},u=void 0,c={permalink:"/blog/2022/09/05/dev-excuses-app-tutrial",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-09-05-dev-excuses-app-tutrial.md",source:"@site/blog/2022-09-05-dev-excuses-app-tutrial.md",title:"Building a backbone for a full-stack web app with a single config file.",description:"We\u2019ll build a web app to solve every developer's most common problem \u2013 finding an excuse to justify our messy work! And will do it with a single config file that covers the full-stack app architecture plus several dozen lines of code. In the quickest possible way, so we can\u2019t excuse ourselves from building it!",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"wasp",permalink:"/blog/tags/wasp"}],readingTime:7.36,truncated:!1,authors:[{name:"Maksym Khamrovskyi",title:"DevRel @ Wasp",key:"maksym36ua"}],nextItem:{title:"How and why I got started with Haskell",permalink:"/blog/2022/08/26/how-and-why-i-got-started-with-haskell"}},p={authorsImageUrls:[void 0]},d=[{value:"The requirements were unclear.",id:"the-requirements-were-unclear",children:[]},{value:"There\u2019s an issue with the 3-rd party library.",id:"theres-an-issue-with-the-3-rd-party-library",children:[]},{value:"Maybe something&#39;s wrong with the environment.",id:"maybe-somethings-wrong-with-the-environment",children:[]},{value:"That worked perfectly when I developed it.",id:"that-worked-perfectly-when-i-developed-it",children:[]},{value:"It would have taken twice as long to build it properly.",id:"it-would-have-taken-twice-as-long-to-build-it-properly",children:[]}],h={toc:d};function f(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We\u2019ll build a web app to solve every developer's most common problem \u2013 finding an excuse to justify our messy work! And will do it with a single config file that covers the full-stack app architecture plus several dozen lines of code. In the quickest possible way, so we can\u2019t excuse ourselves from building it!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Best excuse of all time",src:n(837).Z})),(0,r.kt)("h2",{id:"the-requirements-were-unclear"},"The requirements were unclear."),(0,r.kt)("p",null,"We\u2019ll use Michele Gerarduzzi\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/michelegera/devexcuses-api"},"open-source project"),". It provides a simple API and a solid number of predefined excuses. A perfect fit for our needs. Let\u2019s define the requirements for the project: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The app should be able to pull excuses data from a public API. "),(0,r.kt)("li",{parentName:"ul"},"Save the ones you liked (and your boss doesn't) to the database for future reference."),(0,r.kt)("li",{parentName:"ul"},"Building an app shouldn\u2019t take more than 15 minutes."),(0,r.kt)("li",{parentName:"ul"},"Use modern web dev technologies (NodeJS + React)")),(0,r.kt)("p",null,"As a result \u2013 we\u2019ll get a simple and fun pet project. You can find the complete codebase ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/tree/main/examples/tutorials/ItWaspsOnMyMachine"},"here"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final result",src:n(3179).Z})),(0,r.kt)("h2",{id:"theres-an-issue-with-the-3-rd-party-library"},"There\u2019s an issue with the 3-rd party library."),(0,r.kt)("p",null,"Setting up a backbone for the project is the most frustrating part of building any application. "),(0,r.kt)("p",null,"We are installing dependencies, tying up the back-end and front-end, setting up a database, managing connection strings, and so on. Avoiding this part will save us a ton of time and effort. So let\u2019s find ourselves an excuse to skip the initial project setup."),(0,r.kt)("p",null,"Ideally \u2013 use a framework that will create a project infrastructure quickly with the best defaults so that we\u2019ll focus on the business logic. A perfect candidate is ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/"},"Wasp"),". It\u2019s an open-source, declarative DSL for building web apps in React and Node.js with no boilerplate"),(0,r.kt)("p",null,"How it works: developer starts from a single config file that specifies the app architecture. Routes, CRUD API, auth, and so on. Then adds React/Node.js code for the specific business logic. Behind the scenes, Wasp compiler will produce the entire source code of the app - back-end, front-end, deployment template, database migrations and everything else you\u2019ve used to have in any other full-stack app. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wasp architecture",src:n(1193).Z})),(0,r.kt)("p",null,"So let\u2019s jump right in."),(0,r.kt)("h2",{id:"maybe-somethings-wrong-with-the-environment"},"Maybe something's wrong with the environment."),(0,r.kt)("p",null,"Wasp intentionally works with the LTS Node.js version since it guarantees stability and active maintenance. As for now, it\u2019s Node 16 and NPM 8. If you need another Node version for some other project \u2013 there\u2019s a possibility to ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs#1-requirements"},"use NVM")," to manage multiple Node versions on your computer at the same time."),(0,r.kt)("p",null,"Installing Wasp on Linux (for Mac/Windows, please ",(0,r.kt)("a",{parentName:"p",href:"https://wasp-lang.dev/docs#2-installation"},"check the docs"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -sSL https://get.wasp-lang.dev/installer.sh | sh\n")),(0,r.kt)("p",null,"Now let\u2019s create a new web app named ItWaspsOnMyMachine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wasp new ItWaspsOnMyMachine\n")),(0,r.kt)("p",null,"Changing the working directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ItWaspsOnMyMachine\n")),(0,r.kt)("p",null,"Starting the app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wasp start\n")),(0,r.kt)("p",null,"Now your default browser should open up with a simple predefined text message. That\u2019s it! \ud83e\udd73 We\u2019ve built and run a NodeJS + React application. And for now \u2013 the codebase consists of only two files! ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," is the config file that defines the application\u2019s functionality. And ",(0,r.kt)("inlineCode",{parentName:"p"},"MainPage.js")," is the front-end."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Initial page",src:n(6128).Z})),(0,r.kt)("h2",{id:"that-worked-perfectly-when-i-developed-it"},"That worked perfectly when I developed it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1) Let\u2019s add some additional configuration to our ",(0,r.kt)("inlineCode",{parentName:"strong"},"main.wasp")," file. So it will look like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.wasp | Defining Excuse entity, queries and action"',title:'"main.wasp',"|":!0,Defining:!0,Excuse:!0,"entity,":!0,queries:!0,and:!0,'action"':!0},'\n// Main declaration, defines a new web app.\napp ItWaspsOnMyMachine {\n\n  // Used as a browser tab title.                                  \n  title: "It Wasps On My Machine",\n\n  head: [\n    // Adding Tailwind to make our UI prettier\n    "<script src=\'https://cdn.tailwindcss.com\'><\/script>"\n  ],\n\n  dependencies: [ \n    // Adding Axios for making HTTP requests                                          \n    ("axios", "^0.21.1")\n  ]\n}\n\n// Render page MainPage on url `/` (default url).\nroute RootRoute { path: "/", to: MainPage }                 \n\n// ReactJS implementation of our page located in `ext/MainPage.js` as a default export\npage MainPage {                                             \n  component: import Main from "@ext/MainPage.js"\n}\n\n// Prisma database entity\nentity Excuse {=psl                                          \n    id          Int     @id @default(autoincrement())\n    text        String\npsl=}\n\n// Query declaration to get a new excuse\nquery getExcuse {                                           \n  fn: import { getExcuse } from "@ext/queries.js",\n  entities: [Excuse]\n}\n\n// Query declaration to get all excuses\nquery getAllSavedExcuses {                                  \n  fn: import { getAllSavedExcuses } from "@ext/queries.js",\n  entities: [Excuse]\n}\n\n// Action to save current excuse\naction saveExcuse {                                         \n  fn: import { saveExcuse } from "@ext/actions.js",\n  entities: [Excuse]\n}\n')),(0,r.kt)("p",null,"We\u2019ve added Tailwind to make our UI more pretty and Axios for making API requests. "),(0,r.kt)("p",null,"Also, we\u2019ve declared a database entity called ",(0,r.kt)("inlineCode",{parentName:"p"},"Excuse"),", queries, and action. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Excuse")," entity consists of the entity\u2019s ID and the text. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Queries")," are here when we need to fetch/read something, while ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," are here when we need to change/update data. Both query and action declaration consists of two lines \u2013 a reference to the file that contains implementation and a data model to operate on. You can find more info in the docs. So let\u2019s proceed with queries/actions. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2) Create two files: \u201cactions.js\u201d and \u201cqueries.js\u201d in the ",(0,r.kt)("inlineCode",{parentName:"strong"},"ext")," folder.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".../ext/actions.js | Defining an action"',title:'".../ext/actions.js',"|":!0,Defining:!0,an:!0,'action"':!0},"export const saveExcuse = async (excuse, context) => {\n  return context.entities.Excuse.create({\n    data: { text: excuse.text }\n  })\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".../ext/queries.js | Defining queries"',title:'".../ext/queries.js',"|":!0,Defining:!0,'queries"':!0},"import axios from 'axios';\n\nexport const getExcuse = async () => {\n  return axios\n    .get('https://api.devexcus.es/')\n    .then(res => {\n      return res.data;\n    })\n    .catch(error => {\n      console.error(error);\n    });\n}\n\nexport const getAllSavedExcuses = async (_args, context) => {\n  return context.entities.Excuse.findMany()\n}\n")),(0,r.kt)("p",null,"Let\u2019s add ",(0,r.kt)("inlineCode",{parentName:"p"},"saveExcuse()")," action to our ",(0,r.kt)("inlineCode",{parentName:"p"},"actions.js")," file. This action will save the text of our excuse to the database. Then let\u2019s create two queries in the ",(0,r.kt)("inlineCode",{parentName:"p"},"queries.js")," file. First, one ",(0,r.kt)("inlineCode",{parentName:"p"},"getExcuse")," will call an external API and fetch a new excuse. The second one, named ",(0,r.kt)("inlineCode",{parentName:"p"},"getAllSavedExcuses"),", will pull all the excuses we\u2019ve saved to our database. "),(0,r.kt)("p",null,"That\u2019s it! We finished our back-end. \ud83c\udf89 Now, let\u2019s use those queries/actions on our UI."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3) Let\u2019s erase everything we had in the ",(0,r.kt)("inlineCode",{parentName:"strong"},"MainPage.js")," file and substitute it with our new UI.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".../ext/MainPage.js | Updating the UI"',title:'".../ext/MainPage.js',"|":!0,Updating:!0,the:!0,'UI"':!0},"import React, { useState } from 'react'\nimport { useQuery } from '@wasp/queries'\nimport getExcuse from '@wasp/queries/getExcuse'\nimport getAllSavedExcuses from '@wasp/queries/getAllSavedExcuses'\nimport saveExcuse from '@wasp/actions/saveExcuse'\n\nconst MainPage = () => {\n  const [currentExcuse, setCurrentExcuse] = useState({ text: \"\" })\n  const { data: excuses } = useQuery(getAllSavedExcuses)\n\n  const handleGetExcuse = async () => {\n    try {\n      setCurrentExcuse(await getExcuse())\n    } catch (err) {\n      window.alert('Error while getting the excuse: ' + err.message)\n    }\n  }\n\n  const handleSaveExcuse = async () => {\n    if (currentExcuse.text) {\n      try {\n        await saveExcuse(currentExcuse)\n      } catch (err) {\n        window.alert('Error while saving the excuse: ' + err.message)\n      }\n    }\n  }\n\n  return (\n    <div className=\"grid grid-cols-2 text-3xl\">\n      <div>\n          <button onClick={handleGetExcuse} className=\"mx-2 my-1 p-2 bg-blue-600 hover:bg-blue-400 text-white rounded\"> Get excuse </button>\n          <button onClick={handleSaveExcuse} className=\"mx-2 my-1 p-2 bg-blue-600 hover:bg-blue-400 text-white rounded\"> Save excuse </button>\n        <Excuse excuse={currentExcuse} />\n      </div>\n      <div>\n        <div className=\"px-6 py-2 bg-blue-600 text-white\"> Saved excuses: </div>\n        {excuses && <ExcuseList excuses={excuses} />}\n      </div>\n    </div>\n  )\n}\n\nconst ExcuseList = (props) => { \n  return props.excuses?.length ?  props.excuses.map((excuse, idx) => <Excuse excuse={excuse} key={idx} />) : 'No saved excuses'\n}\n\nconst Excuse = ({ excuse }) => {\n  return (\n    <div className=\"px-6 py-2\">\n      {excuse.text}\n    </div>\n  )\n}\n\nexport default MainPage\n")),(0,r.kt)("p",null,"Our page consists of three components. ",(0,r.kt)("inlineCode",{parentName:"p"},"MainPage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ExcuseList")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Excuse"),". It may seem at first that this file is pretty complex. It\u2019s not, so let\u2019s look a bit closer. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Excuse")," is just a div with an excuse text, ",(0,r.kt)("inlineCode",{parentName:"p"},"ExcuseList")," checks if there are any excuses. If the list is empty \u2013 show a message ",(0,r.kt)("inlineCode",{parentName:"p"},"No saved excuses"),". In other case \u2013 excuses will be displayed. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MainPage")," contains info about the current excuses and the list of already saved excuses. Two buttons click handlers ",(0,r.kt)("inlineCode",{parentName:"p"},"handleGetExcuse")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"handleSaveExcuse"),". Plus, the markup itself with some Tailwind flavor. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4) Before starting an app \u2013 we need to execute database migration because we changed the DB schema by adding new entities. If you\u2019ve had something running in the terminal \u2013 stop it and run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wasp db migrate-dev\n")),(0,r.kt)("p",null,"You\u2019ll be prompted to enter a name for the migration. Something like ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," will be ok. Now we can start the application!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wasp start\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final empty result",src:n(3999).Z})),(0,r.kt)("p",null,"Now you can click the \u201cGet excuse\u201d button to receive an excuse. And save the ones you like into the DB with the \u201cSave excuse\u201d button. Our final project should look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Final result",src:n(3179).Z})),(0,r.kt)("h2",{id:"it-would-have-taken-twice-as-long-to-build-it-properly"},"It would have taken twice as long to build it properly."),(0,r.kt)("p",null,"Now we can think of some additional improvements. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1) Add a unique constraint to Entity\u2019s ID so we won\u2019t be able to save duplicated excuses. "),(0,r.kt)("li",{parentName:"ul"},"2) Add exceptions and edge cases handling. "),(0,r.kt)("li",{parentName:"ul"},"3) Make the markup prettier."),(0,r.kt)("li",{parentName:"ul"},"4) Optimize and polish the code ")),(0,r.kt)("p",null,"So, we\u2019ve been able to build a full-stack application with a database and external API call in a couple of minutes. And now we have a box full of excuses for all our development needs. "),(0,r.kt)(s.Z,{mdxType:"InBlogCta"}))}f.isMDXComponent=!0},837:function(e,t,n){"use strict";t.Z=n.p+"assets/images/compiling-f5efe2c14d949890ce85c23d36e10bd2.png"},3179:function(e,t,n){"use strict";t.Z=n.p+"assets/images/final-excuse-app-0c228a553be0865e245d5e421f86ea27.png"},3999:function(e,t,n){"use strict";t.Z=n.p+"assets/images/final-result-96b2236068263477dad9a4268828e539.png"},6128:function(e,t,n){"use strict";t.Z=n.p+"assets/images/init-page-aaf50a591cf68b5bdfa006e5dabb9f25.png"},1193:function(e,t,n){"use strict";t.Z=n.p+"assets/images/wasp-architecture-e941ac2db5e6aba2a48d56e15f6d849e.png"}}]);