"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3705],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(87462),r=a(67294),s=a(86010),i=a(12466),o=a(16550),l=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,c]=k({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=l??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,s]),tabValues:s}}var g=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==o&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,s.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",f.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},46300:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(50012);function s(e){let{path:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts"),s=t.lastIndexOf("{"),i=t.slice(s+1,t.length-1),[o,l]=i.split(","),c=t.slice(0,s);return n.createElement("code",null,c+("js"===a?o:l))}},48863:(e,t,a)=>{a.d(t,{A:()=>i,v:()=>o});var n=a(67294),r=a(50012),s=a(70143);function i(e){let{children:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts");return"ts"===a&&n.createElement(s.Z,null,t)}function o(e){let{children:t}=e;const[a]=(0,r.Nk)("docusaurus.tab.js-ts");return"js"===a&&n.createElement(s.Z,null,t)}},92511:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>k});var n=a(87462),r=(a(67294),a(3905)),s=a(46300),i=a(85162),o=a(74866),l=a(44996),c=a(48863);const u={id:"04-creating-tasks",title:"Creating tasks"},p=void 0,d={unversionedId:"tutorials/todo-app/04-creating-tasks",id:"tutorials/todo-app/04-creating-tasks",title:"Creating tasks",description:"To enable the creation of new tasks, we will need two things:",source:"@site/docs/tutorials/todo-app/04-creating-tasks.md",sourceDirName:"tutorials/todo-app",slug:"/tutorials/todo-app/04-creating-tasks",permalink:"/docs/tutorials/todo-app/04-creating-tasks",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/release/web/docs/tutorials/todo-app/04-creating-tasks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"04-creating-tasks",title:"Creating tasks"},sidebar:"docs",previous:{title:"Listing tasks",permalink:"/docs/tutorials/todo-app/03-listing-tasks"},next:{title:"Updating tasks",permalink:"/docs/tutorials/todo-app/05-updating-tasks"}},m={},k=[{value:"Defining the Action",id:"defining-the-action",level:2},{value:"Wasp declaration",id:"wasp-declaration",level:3},{value:"JavaScript implementation",id:"javascript-implementation",level:3},{value:"TypeScript implementation",id:"typescript-implementation",level:3},{value:"Invoking the Action on the frontend",id:"invoking-the-action-on-the-frontend",level:2},{value:"Side note: Automatic invalidation/updating of queries",id:"side-note-automatic-invalidationupdating-of-queries",level:2}],h={toc:k},g="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To enable the creation of new tasks, we will need two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A Wasp action that creates a new task."),(0,r.kt)("li",{parentName:"ol"},"A React form that calls that action with the new task's data.")),(0,r.kt)("h2",{id:"defining-the-action"},"Defining the Action"),(0,r.kt)("p",null,"Creating an action is very similar to creating a query."),(0,r.kt)("h3",{id:"wasp-declaration"},"Wasp declaration"),(0,r.kt)("p",null,"We must first declare the Action in ",(0,r.kt)("inlineCode",{parentName:"p"},"main.wasp"),":"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction createTask {\n  fn: import { createTask } from "@server/actions.js",\n  entities: [Task]\n}\n'))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-wasp",metastring:'title="main.wasp"',title:'"main.wasp"'},'// ...\n\naction createTask {\n  fn: import { createTask } from "@server/actions.js",\n  entities: [Task]\n}\n')))),(0,r.kt)(c.v,{mdxType:"ShowForJs"},(0,r.kt)("h3",{id:"javascript-implementation"},"JavaScript implementation"),(0,r.kt)("p",null,"Let's now define a JavaScript function for our action:")),(0,r.kt)(c.A,{mdxType:"ShowForTs"},(0,r.kt)("h3",{id:"typescript-implementation"},"TypeScript implementation"),(0,r.kt)("p",null,"Let's now define a TypeScript function for our action:")),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/server/actions.js"',title:'"src/server/actions.js"'},"export const createTask = async (args, context) => {\n  return context.entities.Task.create({\n    data: { description: args.description }\n  })\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/server/actions.ts"',title:'"src/server/actions.ts"'},'import { Task } from "@wasp/entities"\nimport { CreateTask } from "@wasp/actions/types"\n\ntype CreateTaskPayload = Pick<Task, "description">\n\nexport const createTask: CreateTask<CreateTaskPayload, Task> = async (\n  args,\n  context\n) => {\n  return context.entities.Task.create({\n    data: { description: args.description },\n  })\n}\n')),(0,r.kt)("p",null,"Once again, we've annotated the Action with proper types (using the types ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateTask")," Wasp generated for us). Annotating the Action makes the type information automatically available the frontend, giving us automatic ",(0,r.kt)("strong",{parentName:"p"},"full-stack type safety"),"."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We put the function in a new file ",(0,r.kt)(s.Z,{path:"src/server/actions.{js,ts}",mdxType:"FileExtSwitcher"}),", but we could have put it anywhere we wanted! There are no limitations here, as long as the import statement in the Wasp file is correct and the source file is inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/server")," folder.")),(0,r.kt)("h2",{id:"invoking-the-action-on-the-frontend"},"Invoking the Action on the frontend"),(0,r.kt)(o.Z,{groupId:"js-ts",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'{3,10,41-60} title="src/client/MainPage.jsx"',"{3,10,41-60}":!0,title:'"src/client/MainPage.jsx"'},'import getTasks from "@wasp/queries/getTasks"\nimport createTask from "@wasp/actions/createTask"\nimport { useQuery } from "@wasp/queries"\n\nconst MainPage = () => {\n  const { data: tasks, isLoading, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      <NewTaskForm />\n\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isLoading && "Loading..."}\n      {error && "Error: " + error}\n    </div>\n  )\n}\n\nconst Task = ({ task }) => {\n  return (\n    <div>\n      <input type="checkbox" id={String(task.id)} checked={task.isDone} />\n      {task.description}\n    </div>\n  )\n}\n\nconst TasksList = ({ tasks }) => {\n  if (!tasks?.length) return <div>No tasks</div>\n\n  return (\n    <div>\n      {tasks.map((task, idx) => (\n        <Task task={task} key={idx} />\n      ))}\n    </div>\n  )\n}\n\nconst NewTaskForm = () => {\n  const handleSubmit = async (event) => {\n    event.preventDefault()\n    try {\n      const target = event.target\n      const description = target.description.value\n      target.reset()\n      await createTask({ description })\n    } catch (err) {\n      window.alert("Error: " + err.message)\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="description" type="text" defaultValue="" />\n      <input type="submit" value="Create task" />\n    </form>\n  )\n}\n\nexport default MainPage\n'))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'{1,3,12,43-62} title="src/client/MainPage.tsx"',"{1,3,12,43-62}":!0,title:'"src/client/MainPage.tsx"'},'import { FormEvent } from "react"\nimport getTasks from "@wasp/queries/getTasks"\nimport createTask from "@wasp/actions/createTask"\nimport { useQuery } from "@wasp/queries"\nimport { Task } from "@wasp/entities"\n\nconst MainPage = () => {\n  const { data: tasks, isLoading, error } = useQuery(getTasks)\n\n  return (\n    <div>\n      <NewTaskForm />\n\n      {tasks && <TasksList tasks={tasks} />}\n\n      {isLoading && "Loading..."}\n      {error && "Error: " + error}\n    </div>\n  )\n}\n\nconst Task = ({ task }: { task: Task }) => {\n  return (\n    <div>\n      <input type="checkbox" id={String(task.id)} checked={task.isDone} />\n      {task.description}\n    </div>\n  )\n}\n\nconst TasksList = ({ tasks }: { tasks: Task[] }) => {\n  if (!tasks?.length) return <div>No tasks</div>\n\n  return (\n    <div>\n      {tasks.map((task, idx) => (\n        <Task task={task} key={idx} />\n      ))}\n    </div>\n  )\n}\n\nconst NewTaskForm = () => {\n  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {\n    event.preventDefault()\n    try {\n      const target = event.target as HTMLFormElement\n      const description = target.description.value\n      target.reset()\n      await createTask({ description })\n    } catch (err: any) {\n      window.alert("Error: " + err.message)\n    }\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="description" type="text" defaultValue="" />\n      <input type="submit" value="Create task" />\n    </form>\n  )\n}\n\nexport default MainPage\n')))),(0,r.kt)("p",null,"We're calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"createTask")," Action directly this time (i.e., without wrapping it with a hook) because we don't need reactivity. The rest is just regular React code."),(0,r.kt)(c.A,{mdxType:"ShowForTs"},(0,r.kt)("p",null,"Finally, because we've previously annotated the Action's backend implementation with the correct type, Wasp knows that the ",(0,r.kt)("inlineCode",{parentName:"p"},"createTask")," action expects a value of type ",(0,r.kt)("inlineCode",{parentName:"p"},"{ description: string }")," (try changing the argument and reading the error message). Wasp also knows that a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"createTask")," action returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Task"),", but we don't need it.")),(0,r.kt)("p",null,"That's it!"),(0,r.kt)("p",null,'Try creating a "Build a Todo App in Wasp" task and see it appear in the list below.\nThe task is created on the server and also saved in the database. Try refreshing the page or opening it in another browser - you\'ll see the tasks are still here!'),(0,r.kt)("img",{alt:"Todo App - creating new task",src:(0,l.Z)("img/todo-app-new-task.png"),style:{border:"1px solid black"}}),(0,r.kt)("h2",{id:"side-note-automatic-invalidationupdating-of-queries"},"Side note: Automatic invalidation/updating of queries"),(0,r.kt)("p",null,"You will notice that when you create a new task, the list of tasks is automatically updated with that new task, although we have written no code to take care of that! Normally, you would have to do this explicitly, e.g. with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query")," you would invalidate the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks")," query via its key, or would call its ",(0,r.kt)("inlineCode",{parentName:"p"},"refetch()")," method."),(0,r.kt)("p",null,"The reason why the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks")," query automatically updates when the ",(0,r.kt)("inlineCode",{parentName:"p"},"createTask")," action is executed is that Wasp is aware that both of them are working with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," entity, and therefore assumes that the action that operates on ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," (in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"createTask"),") might have changed the result of the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks")," query. Therefore, in the background, Wasp nudges the ",(0,r.kt)("inlineCode",{parentName:"p"},"getTasks")," query to update. This means that ",(0,r.kt)("strong",{parentName:"p"},"out of the box, Wasp will make sure that all your queries that deal with entities are always in sync with any changes that the actions might have done"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"While this kind of approach to automatic invalidation of queries is very convenient, it is in some situations wasteful and could become a performance bottleneck as the app grows. In that case, you will be able to override this default behavior and instead provide more detailed (and performant) instructions on how the specific action should affect queries."),(0,r.kt)("p",{parentName:"admonition"},"Overriding the default behavior is not yet supported but it is something we plan to do and you can track the progress ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/63"},"here")," (or even contribute!).")))}f.isMDXComponent=!0}}]);