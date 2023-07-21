"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5547],{85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),s=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),s=n(67294),r=n(86010),i=n(12466),o=n(16550),l=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,u]=k({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=l??p;return m({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var g=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=h(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},s.createElement(v,(0,a.Z)({},e,t)),s.createElement(b,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return s.createElement(T,(0,a.Z)({key:String(t)},e))}},48863:(e,t,n)=>{n.d(t,{A:()=>i,v:()=>o});var a=n(67294),s=n(50012),r=n(70143);function i(e){let{children:t}=e;const[n]=(0,s.Nk)("docusaurus.tab.js-ts");return"ts"===n&&a.createElement(r.Z,null,t)}function o(e){let{children:t}=e;const[n]=(0,s.Nk)("docusaurus.tab.js-ts");return"js"===n&&a.createElement(r.Z,null,t)}},45215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),s=(n(67294),n(3905)),r=n(85162),i=n(74866),o=(n(44996),n(48863));const l={id:"05-updating-tasks",title:"Updating tasks"},u=void 0,c={unversionedId:"tutorials/todo-app/05-updating-tasks",id:"tutorials/todo-app/05-updating-tasks",title:"Updating tasks",description:"Our Todo app isn't finished if you we can't mark a task as finished!",source:"@site/docs/tutorials/todo-app/05-updating-tasks.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/05-updating-tasks",permalink:"/docs/tutorials/todo-app/05-updating-tasks",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/tutorials/todo-app/05-updating-tasks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"05-updating-tasks",title:"Updating tasks"},sidebar:"docs",previous:{title:"Creating tasks",permalink:"/docs/tutorials/todo-app/04-creating-tasks"},next:{title:"Authentication",permalink:"/docs/tutorials/todo-app/06-auth"}},p={},d=[{value:"Defining the Action",id:"defining-the-action",level:2},{value:"Wasp declaration",id:"wasp-declaration",level:3},{value:"JavaScript implementation",id:"javascript-implementation",level:3},{value:"TypeScript implementation",id:"typescript-implementation",level:3},{value:"Invoking the Action on the frontend",id:"invoking-the-action-on-the-frontend",level:2}],m={toc:d},k="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Our Todo app isn't finished if you we can't mark a task as finished!"),(0,s.kt)("p",null,"To do that, we'll need to do two things:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Implement a Wasp Action for toggling a task's ",(0,s.kt)("inlineCode",{parentName:"li"},"isDone")," state."),(0,s.kt)("li",{parentName:"ol"},"Call this Action from React whenever the user toggles a checkbox.")),(0,s.kt)("h2",{id:"defining-the-action"},"Defining the Action"),(0,s.kt)("h3",{id:"wasp-declaration"},"Wasp declaration"),(0,s.kt)("p",null,"Let's first define the Action in ",(0,s.kt)("inlineCode",{parentName:"p"},"main.wasp"),":"),(0,s.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction updateTask {\n  fn: import { updateTask } from "@server/actions.js",\n  entities: [Task]\n}\n'))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction updateTask {\n  fn: import { updateTask } from "@server/actions.js",\n  entities: [Task]\n}\n')))),(0,s.kt)(o.v,{mdxType:"ShowForJs"},(0,s.kt)("h3",{id:"javascript-implementation"},"JavaScript implementation"),(0,s.kt)("p",null,"Let's now define the Action's JavaScript implementation in ",(0,s.kt)("inlineCode",{parentName:"p"},"src/server/actions.js"),":")),(0,s.kt)(o.A,{mdxType:"ShowForTs"},(0,s.kt)("h3",{id:"typescript-implementation"},"TypeScript implementation"),(0,s.kt)("p",null,"Let's now define the Action's JavaScript implementation in ",(0,s.kt)("inlineCode",{parentName:"p"},"src/server/actions.ts"),":")),(0,s.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/actions.js"',title:'"src/server/actions.js"'},"// ...\n\nexport const updateTask = async ({ id, isDone }, context) => {\n  return context.entities.Task.update({\n    where: { id  },\n    data: {\n      isDone: isDone,\n    },\n  })\n}\n"))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/server/actions.ts"',title:'"src/server/actions.ts"'},'// highlight-next-line\nimport { CreateTask, UpdateTask } from "@wasp/actions/types"\n\n// ...\n\ntype UpdateTaskPayload = Pick<Task, "id" | "isDone">\n\nexport const updateTask: UpdateTask<UpdateTaskPayload, Task> = async (\n  { id, isDone },\n  context\n) => {\n  return context.entities.Task.update({\n    where: { id  },\n    data: {\n      isDone: isDone,\n    },\n  })\n}\n')))),(0,s.kt)("h2",{id:"invoking-the-action-on-the-frontend"},"Invoking the Action on the frontend"),(0,s.kt)("p",null,"Finally, all that's left to do is call the Action from the React component:"),(0,s.kt)(i.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{2,7-16,24} title="src/client/MainPage.jsx"',"{2,7-16,24}":!0,title:'"src/client/MainPage.jsx"'},'// ...\nimport updateTask from \'@wasp/actions/updateTask\'\n\n// ...\n\nconst Task = ({ task }) => {\n  const handleIsDoneChange = async (event) => {\n    try {\n      await updateTask({\n        id: task.id,\n        isDone: event.target.checked,\n      })\n    } catch (error: any) {\n      window.alert("Error while updating task: " + error.message)\n    }\n  }\n\n  return (\n    <div>\n      <input\n        type="checkbox"\n        id={String(task.id)}\n        checked={task.isDone}\n        onChange={handleIsDoneChange}\n      />\n      {task.description}\n    </div>\n  )\n}\n// ...\n'))),(0,s.kt)(r.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{2,4,9-18,26} title="src/client/MainPage.tsx"',"{2,4,9-18,26}":!0,title:'"src/client/MainPage.tsx"'},'// ...\nimport { FormEvent, ChangeEvent } from "react"\n// ...\nimport updateTask from \'@wasp/actions/updateTask\'\n\n// ...\n\nconst Task = ({ task }: { task: Task }) => {\n  const handleIsDoneChange = async (event: ChangeEvent<HTMLInputElement>) => {\n    try {\n      await updateTask({\n        id: task.id,\n        isDone: event.target.checked,\n      })\n    } catch (error: any) {\n      window.alert("Error while updating task: " + error.message)\n    }\n  }\n\n  return (\n    <div>\n      <input\n        type="checkbox"\n        id={String(task.id)}\n        checked={task.isDone}\n        onChange={handleIsDoneChange}\n      />\n      {task.description}\n    </div>\n  )\n}\n// ...\n')))),(0,s.kt)("p",null,"Awesome! We can now tick this task as done ;)."))}h.isMDXComponent=!0}}]);