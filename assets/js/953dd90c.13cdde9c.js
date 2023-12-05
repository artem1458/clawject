"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[440],{8995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(5893),s=t(1151);const o={title:"Clawject IoC Container"},c=void 0,i={id:"core-concepts/clawject-ioc",title:"Clawject IoC Container",description:"An IoC container is a common characteristic of frameworks that implement IoC.",source:"@site/docs/core-concepts/clawject-ioc.mdx",sourceDirName:"core-concepts",slug:"/core-concepts/clawject-ioc",permalink:"/docs/core-concepts/clawject-ioc",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701792449,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"Clawject IoC Container"},sidebar:"docs",previous:{title:"IoC and DI",permalink:"/docs/core-concepts/ioc-di-basics"},next:{title:"Clawject Type System",permalink:"/docs/core-concepts/type-system"}},r={},l=[{value:"Constructor-Based Dependency Injection",id:"constructor-based-dependency-injection",level:2},{value:"Bean scopes",id:"bean-scopes",level:2},{value:"Lazy Initialized Beans",id:"lazy-initialized-beans",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"An IoC container is a common characteristic of frameworks that implement IoC."}),"\n",(0,a.jsxs)(n.p,{children:["In Clawject, ",(0,a.jsx)(n.strong,{children:"CatContext"})," abstract class is a representation of the single IoC container.\nThe Clawject container is responsible for instantiating, configuring and assembling objects known as Beans,\nas well as managing their life cycles."]}),"\n",(0,a.jsxs)(n.p,{children:["Right now Clawject provides one way to manage IoC containers. This is ",(0,a.jsx)(n.strong,{children:"ContainerManager"})," interface."]}),"\n",(0,a.jsx)(n.p,{children:"Here is the way to initialize the container:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { ContainerManager, CatContext } from '@clawject/di';\n\nclass ApplicationContext extends CatContext {}\n\nContainerManager.init(ApplicationContext);\n"})}),"\n",(0,a.jsx)(n.h2,{id:"constructor-based-dependency-injection",children:"Constructor-Based Dependency Injection"}),"\n",(0,a.jsx)(n.p,{children:"In the case of constructor-based dependency injection,\nthe container will invoke a constructor with arguments each representing a dependency we want to set."}),"\n",(0,a.jsx)(n.p,{children:"Clawject resolves each argument primarily by type, followed by the name of the constructor parameter.\nLet's see the configuration of a bean and its dependencies using Bean call:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Bar {}\nclass Foo {\n  constructor(private bar: Bar) {}\n}\n\nclass ApplicationContext extends CatContext {\n  foo = Bean(Foo)\n  bar = Bean(Bar)\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"We're passing class constructor to the Bean function and assigning the result of function to the class property to define a bean;\nBean name is a class property name."}),"\n",(0,a.jsx)(n.h2,{id:"bean-scopes",children:"Bean scopes"}),"\n",(0,a.jsxs)(n.p,{children:["You can read more about scopes more here ",(0,a.jsx)(n.a,{href:"/docs/api/scope",children:"@Scope"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For a bean with the default ",(0,a.jsx)(n.strong,{children:"singleton scope"}),",\nClawject first checks if instance of the bean already created,\nand only creates a new one if it doesn't.\nIf we're using the ",(0,a.jsx)(n.strong,{children:"dedicated scope"}),", the container returns a new bean instance for each bean request."]}),"\n",(0,a.jsxs)(n.p,{children:["Let's see how we can define a bean with the ",(0,a.jsx)(n.strong,{children:"dedicated"})," scope.\nWe have two beans that require the ",(0,a.jsx)(n.strong,{children:"Baz"})," instance,\nfor each of which the container creates a new instance of a ",(0,a.jsx)(n.strong,{children:"Baz"})," class."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Baz {}\nclass Bar {\n  constructor(private baz: Baz) {}\n}\nclass Foo {\n  constructor(private baz: Baz) {}\n}\n\nclass ApplicationContext extends CatContext {\n  foo = Bean(Foo)\n  bar = Bean(Bar)\n\n  @Scope('dedicated')\n  baz = Bean(Baz)\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"lazy-initialized-beans",children:"Lazy Initialized Beans"}),"\n",(0,a.jsxs)(n.p,{children:["You can read more about lazy beans here ",(0,a.jsx)(n.a,{href:"/docs/api/lazy",children:"@Lazy"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, the container creates and configures all singleton beans during initialization.\nTo avoid this, we can use the ",(0,a.jsx)(n.strong,{children:"lazy"})," decorator with on the bean configuration level:"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"foo"})," bean will only be initialized when it's first requested, and not at startup."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class ApplicationContext extends CatContext {\n  @Lazy\n  foo = Bean(Foo)\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can redefine the default lazy value for all beans in clawject configuration file ",(0,a.jsx)(n.a,{href:"/docs/configuration#featureslazybeans",children:"features.lazyBeans"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var a=t(7294);const s={},o=a.createContext(s);function c(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);