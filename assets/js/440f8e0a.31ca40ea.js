"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[357],{4822:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(5893),o=t(1151);const a={title:"InitializedContext"},s=void 0,r={id:"api/initialized-context",title:"InitializedContext",description:"InitializedContext is an object that is returned from ContainerManager.init/getOrInit/get methods.",source:"@site/docs/api/initialized-context.mdx",sourceDirName:"api",slug:"/api/initialized-context",permalink:"/docs/api/initialized-context",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701792449,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"InitializedContext"},sidebar:"docs",previous:{title:"CatContext",permalink:"/docs/api/cat-context"},next:{title:"ScopeRegister",permalink:"/docs/api/scope-register"}},l={},c=[{value:"Methods overview",id:"methods-overview",level:2},{value:"<code>InitializedContext.getBean</code>",id:"initializedcontextgetbean",level:3},{value:"<code>InitializedContext.getBeans</code>",id:"initializedcontextgetbeans",level:3},{value:"<code>InitializedContext.getAllBeans</code>",id:"initializedcontextgetallbeans",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["InitializedContext is an object that is returned from ",(0,i.jsx)(n.code,{children:"ContainerManager.init/getOrInit/get"})," methods.\nYou can use to access public beans in context, or to retrieve Map of all beans in context."]}),"\n",(0,i.jsx)(n.h2,{id:"methods-overview",children:"Methods overview"}),"\n",(0,i.jsx)(n.h3,{id:"initializedcontextgetbean",children:(0,i.jsx)(n.code,{children:"InitializedContext.getBean"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns external bean that is defined in ",(0,i.jsx)(n.code,{children:"ExternalBeans"})," interface by name."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { Bean, CatContext, ContainerManager } from '@clawject/di';\n\ninterface MyExternalBeans {\n  foo: string;\n}\n\nclass MyContext extends CatContext<MyExternalBeans> {\n  @Bean foo = 'fooValue';\n}\n\nconst myContext = ContainerManager.init(MyContext);\n\nconsole.log(myContext.getBean('foo')) // <-- Will print \"fooValue\"\n"})}),"\n",(0,i.jsx)(n.h3,{id:"initializedcontextgetbeans",children:(0,i.jsx)(n.code,{children:"InitializedContext.getBeans"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns ",(0,i.jsx)(n.code,{children:"ExternalBeans"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { Bean, CatContext, ContainerManager } from '@clawject/di';\n\ninterface MyExternalBeans {\n  foo: string;\n}\n\nclass MyContext extends CatContext<MyExternalBeans> {\n  @Bean foo = 'fooValue';\n}\n\nconst myContext = ContainerManager.init(MyContext);\n\nconsole.log(myContext.getBeans()) // <-- Will print \"{ foo: 'fooValue' }\"\n"})}),"\n",(0,i.jsx)(n.h3,{id:"initializedcontextgetallbeans",children:(0,i.jsx)(n.code,{children:"InitializedContext.getAllBeans"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns ",(0,i.jsx)(n.code,{children:"Map<string, unknown>"})," where ",(0,i.jsx)(n.code,{children:"string"})," is bean name, and ",(0,i.jsx)(n.code,{children:"unknown"})," is bean value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { Bean, CatContext, ContainerManager } from '@clawject/di';\n\ninterface MyExternalBeans {\n  foo: string;\n}\n\nclass MyContext extends CatContext<MyExternalBeans> {\n  @Bean foo = 'fooValue';\n}\n\nconst myContext = ContainerManager.init(MyContext);\n\nmyContext.getAllBeans().forEach((value, name) => {\n  console.log(name, value) // <-- Will print \"foo fooValue\"\n});\n"})})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);