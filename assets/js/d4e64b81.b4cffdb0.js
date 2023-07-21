"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));n(44996);const o={title:"Username & Password"},i="Username & Password",s={unversionedId:"guides/username-password",id:"guides/username-password",title:"Username & Password",description:"Configuration",source:"@site/docs/guides/username-password.md",sourceDirName:"guides",slug:"/guides/username-password",permalink:"/docs/guides/username-password",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/guides/username-password.md",tags:[],version:"current",frontMatter:{title:"Username & Password"},sidebar:"docs",previous:{title:"Email Authentication",permalink:"/docs/guides/email-auth"},next:{title:"CSS Frameworks",permalink:"/docs/integrations/css-frameworks"}},u={},l=[{value:"Configuration",id:"configuration",level:3},{value:"Client-side",id:"client-side",level:3},{value:"Server-side",id:"server-side",level:3}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"username--password"},"Username & Password"),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To get started with a simple Username & Password Auth strategy, you'll need to add the Auth object with the following configuration to your ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'},'app Example {\n  wasp: {\n    version: "^0.11.0"\n  },\n\n  title: "Example",\n\n  auth: {\n    userEntity: User,\n    methods: {\n      usernameAndPassword: {},\n    },\n    onAuthFailedRedirectTo: "/login"\n  }\n}\n\n// Wasp requires the userEntity to have at least the following fields\nentity User {=psl\n    id                        Int           @id @default(autoincrement())\n    username                  String        @unique\n    password                  String\npsl=}\n\n// ...\n')),(0,r.kt)("p",null,"For more info on the specific fields, check out this ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/features#authentication--authorization"},"Auth")," section of the docs."),(0,r.kt)("p",null,"If you're adding a new entity to your ",(0,r.kt)("inlineCode",{parentName:"p"},".wasp")," file for the first time, make sure to create the table for it in your database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wasp db migrate-dev\n")),(0,r.kt)("p",null,"You'll also need to add these environment variables to your ",(0,r.kt)("inlineCode",{parentName:"p"},".env.server")," file at the root of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env.server"',title:'".env.server"'},"JWT_SECRET=random-string-at-least-32-characters-long.\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," now defined, Wasp offers a number of handy features out of the box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/auth-ui"},'"AuthUI" Login and Signup forms')," located at ",(0,r.kt)("inlineCode",{parentName:"li"},"@wasp/auth/forms/Login")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"@wasp/auth/forms/Signup")," paths, ready to be styled and used."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"logout()")," action."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"useAuth()")," hook to access the logged-in user client-side."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"context.user")," object as an argument server-side within ",(0,r.kt)("a",{parentName:"li",href:"/docs/language/features#queries-and-actions-aka-operations"},"Operations"),".")),(0,r.kt)("admonition",{title:"Customizing Auth",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is a very high-level API for auth which makes it very easy to get started quickly, but is\nnot very flexible. If you require more control (e.g. want to execute some custom code on the server\nduring signup, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/features#lower-level-api"},"lower-level auth API"),".")),(0,r.kt)("h3",{id:"client-side"},"Client-side"),(0,r.kt)("p",null,"To access the logged-in user client-side, you have two options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"user")," object that Wasp passes to all pages by default:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const Page = ({ user }) => {\n  const username = user.username\n\n  //...\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"useAuth()")," hook: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import useAuth from '@wasp/auth/useAuth.js'\n\nconst Page = () => {\n  const { data: user, isLoading, isError } = useAuth();\n\n  //...\n}\n")),(0,r.kt)("p",null,"You can then do things like displaying some of the user information on the page. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import useAuth from '@wasp/auth/useAuth.js'\nimport logout from '@wasp/auth/logout.js'\nimport Todo from '../Todo.js'\n\nconst Page = () => {\n  const { data: user } = useAuth()\n\n  return (\n    <>\n      <h1>Welcome {user.username}!</h1>\n      <Todo />\n      <button onClick={logout}>Logout</button>\n    </>\n  )\n}\n\nexport default Page\n")),(0,r.kt)("p",null,"You don't need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAuth()")," hook if you're trying to protect a page from unauthorized users. Wasp takes care of that for you with its ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/features#authentication--authorization"},"higher-level API"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.wasp" {28}',title:'"main.wasp"',"{28}":!0},'app Example {\n  wasp: {\n    version: "^0.8.0"\n  },\n\n  title: "Example",\n\n  auth: {\n    userEntity: User,\n    methods: {\n      usernameAndPassword: {},\n    },\n    onAuthFailedRedirectTo: "/login"\n  }\n}\n\n// Wasp requires the userEntity to have at least the following fields\nentity User {=psl\n    id                        Int           @id @default(autoincrement())\n    username                  String        @unique\n    password                  String\npsl=}\n\n// By adding `authRequired: true` to a page, Wasp will automatically\n// redirect unauthenticated users to the `onAuthFailedRedirectTo` route \nroute MainRoute { path: "/", to: MainPage }\npage MainPage {\n  authRequired: true,\n  component: import Main from "@client/MainPage"\n}\n\nroute LoginRoute { path: "/login", to: LoginPage }\npage LoginPage {\n  component: import Login from "@client/LoginPage"\n}\n\nroute SignupRoute { path: "/signup", to: SignupPage }\npage SignupPage {\n  component: import Signup from "@client/SignupPage"\n}\n')),(0,r.kt)("h3",{id:"server-side"},"Server-side"),(0,r.kt)("p",null,"To access the logged-in user server-side, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"context.user")," object within ",(0,r.kt)("a",{parentName:"p",href:"/docs/language/features#queries-and-actions-aka-operations"},"Operations (i.e. ",(0,r.kt)("em",{parentName:"a"},"queries and actions"),")"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/actions.js" {4}',title:'"src/server/actions.js"',"{4}":!0},"import HttpError from '@wasp/core/HttpError.js'\n\nexport const createTask = async (task, context) => {\n  if (!context.user) {\n    throw new HttpError(401, 'You need to be logged in to create a task.')\n  }\n\n  return context.entities.Task.create({\n    data: {\n      description: task.description,\n      user: {\n        connect: { id: context.user.id }\n      }\n    }\n  })\n}\n")))}d.isMDXComponent=!0}}]);