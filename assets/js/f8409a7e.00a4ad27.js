"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6903],{1706:(e,n,o)=>{o.r(n),o.d(n,{NestJSLogo:()=>h,SpringLogo:()=>d,assets:()=>y,contentTitle:()=>u,default:()=>j,frontMatter:()=>p,metadata:()=>m,toc:()=>I});var t=o(4848),r=o(8453),i=(o(6540),o(1470)),s=o(9365),a=o(4284);const c=()=>{const e="\ninterface IRepository<T> { /*...*/ }\nclass RepositoryImpl<T> implements IRepository<T> { /*...*/ }\nclass PrimitivesService {\n  constructor(\n    private stringRepository: IRepository<string>,\n    private numberRepository: IRepository<number>,\n    private booleanRepository: IRepository<boolean>,\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  stringRepository = Bean(RepositoryImpl<string>);\n  numberRepository = Bean(RepositoryImpl<number>);\n  booleanRepository = Bean(RepositoryImpl<boolean>);\n  primitivesService Bean(PrimitivesService);\n}\n",n="\ninterface IRepository<T> { /*...*/ }\n@Injectable()\nclass RepositoryImpl<T> implements IRepository<T> { /*...*/ }\nconst InjectionTokens = {\n  StringRepository: Symbol('StringRepository'),\n  NumberRepository: Symbol('NumberRepository'),\n  BooleanRepository: Symbol('BooleanRepository'),\n}\n\n@Injectable()\nclass PrimitivesService {\n  constructor(\n    @Inject(InjectionTokens.StringRepository)\n    private stringRepository: IRepository<string>,\n    @Inject(InjectionTokens.NumberRepository)\n    private numberRepository: IRepository<number>,\n    @Inject(InjectionTokens.BooleanRepository)\n    private booleanRepository: IRepository<boolean>,\n  ) {}\n}\n\n@Module({\n  providers: [\n    PrimitivesService,\n    { provide: InjectionTokens.StringRepository, useClass: RepositoryImpl },\n    { provide: InjectionTokens.NumberRepository, useClass: RepositoryImpl },\n    { provide: InjectionTokens.BooleanRepository, useClass: RepositoryImpl },\n  ],\n})\nclass Application {}\n",o="\ninterface IRepository<T> { /*...*/ }\n@Injectable()\nclass RepositoryImpl<T> implements IRepository<T> { /*...*/ }\nconst InjectionTokens = {\n  StringRepository: new InjectionToken<IRepository<string>>('StringRepository'),\n  NumberRepository: new InjectionToken<IRepository<number>>('NumberRepository'),\n  BooleanRepository: new InjectionToken<IRepository<boolean>>('BooleanRepository'),\n}\n\n@Injectable()\nclass PrimitivesService {\n  constructor(\n    @Inject(InjectionTokens.StringRepository)\n    private stringRepository: IRepository<string>,\n    @Inject(InjectionTokens.NumberRepository)\n    private numberRepository: IRepository<number>,\n    @Inject(InjectionTokens.BooleanRepository)\n    private booleanRepository: IRepository<boolean>,\n  ) {}\n}\n\n@NgModule({\n  providers: [\n    PrimitivesService,\n    { provide: InjectionTokens.StringRepository, useClass: RepositoryImpl },\n    { provide: InjectionTokens.NumberRepository, useClass: RepositoryImpl },\n    { provide: InjectionTokens.BooleanRepository, useClass: RepositoryImpl },\n  ],\n})\nclass Application {}\n",r="\ninterface IRepository<T> { /*...*/ }\n@injectable()\nclass RepositoryImpl<T> implements IRepository<T> { /*...*/ }\nconst InjectionTokens = {\n  StringRepository: Symbol('StringRepository'),\n  NumberRepository: Symbol('NumberRepository'),\n  BooleanRepository: Symbol('BooleanRepository'),\n}\n\n@injectable()\nclass PrimitivesService {\n  constructor(\n    @inject(InjectionTokens.StringRepository)\n    private stringRepository: IRepository<string>,\n    @inject(InjectionTokens.NumberRepository)\n    private numberRepository: IRepository<number>,\n    @inject(InjectionTokens.BooleanRepository)\n    private booleanRepository: IRepository<boolean>,\n  ) {}\n}\n\ncontainer.register(InjectionTokens.StringRepository, { useClass: RepositoryImpl });\ncontainer.register(InjectionTokens.NumberRepository, { useClass: RepositoryImpl });\ncontainer.register(InjectionTokens.BooleanRepository, { useClass: RepositoryImpl });\ncontainer.register(PrimitivesService, { useClass: PrimitivesService });\n";return(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"clawject",label:"Clawject",default:!0,children:(0,t.jsx)(a.A,{showLineNumbers:!0,language:"typescript",children:e.trim()})}),(0,t.jsx)(s.A,{value:"nest",label:"NestJS",children:(0,t.jsx)(a.A,{showLineNumbers:!0,language:"typescript",children:n.trim()})}),(0,t.jsx)(s.A,{value:"angular",label:"Angular",children:(0,t.jsx)(a.A,{showLineNumbers:!0,language:"typescript",children:o.trim()})}),(0,t.jsx)(s.A,{value:"tsyringe",label:"TSyringe",children:(0,t.jsx)(a.A,{showLineNumbers:!0,language:"typescript",children:r.trim()})})]})},l=()=>{const e="\ninterface ICache<T> {}\nclass CacheImpl<T> implements ICache<T> {}\ninterface IRepository<T> { /*...*/ }\nclass RepositoryImpl<T> implements IRepository<T> {\n  constructor(\n    private cache: ICache<T>,\n  ) {}\n}\nclass PrimitivesService {\n  constructor(\n    private stringRepository: IRepository<string>,\n    private numberRepository: IRepository<number>,\n    private booleanRepository: IRepository<boolean>,\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  stringCache = Bean(CacheImpl<string>);\n  numberCache = Bean(CacheImpl<number>);\n  booleanCache = Bean(CacheImpl<boolean>);\n  stringRepository = Bean(RepositoryImpl<string>);\n  numberRepository = Bean(RepositoryImpl<number>);\n  booleanRepository = Bean(RepositoryImpl<boolean>);\n  primitivesService = Bean(PrimitivesService);\n}\n",n="\ninterface ICache<T> {}\nclass CacheImpl<T> implements ICache<T> {}\ninterface IRepository<T> { /*...*/ }\nclass RepositoryImpl<T> implements IRepository<T> {\n  constructor(\n    private cache: ICache<T>,\n  ) {}\n}\n\nconst InjectionTokens = {\n  StringCache: Symbol('StringCache'),\n  NumberCache: Symbol('NumberCache'),\n  BooleanCache: Symbol('BooleanCache'),\n  StringRepository: Symbol('StringRepository'),\n  NumberRepository: Symbol('NumberRepository'),\n  BooleanRepository: Symbol('BooleanRepository'),\n}\n\n@Injectable()\nclass PrimitivesService {\n  constructor(\n    @Inject(InjectionTokens.StringRepository)\n    private stringRepository: IRepository<string>,\n    @Inject(InjectionTokens.NumberRepository)\n    private numberRepository: IRepository<number>,\n    @Inject(InjectionTokens.BooleanRepository)\n    private booleanRepository: IRepository<boolean>,\n  ) {}\n}\n\n@Module({\n  providers: [\n    PrimitivesService,\n    { provide: InjectionTokens.StringCache, useClass: CacheImpl },\n    { provide: InjectionTokens.NumberCache, useClass: CacheImpl },\n    { provide: InjectionTokens.BooleanCache, useClass: CacheImpl },\n    {\n      provide: InjectionTokens.StringRepository,\n      useFactory: (cache: ICache<string>) => new RepositoryImpl(cache),\n      inject: [InjectionTokens.StringCache],\n    },\n    {\n      provide: InjectionTokens.NumberRepository,\n      useFactory: (cache: ICache<number>) => new RepositoryImpl(cache),\n      inject: [InjectionTokens.NumberCache],\n    },\n    {\n      provide: InjectionTokens.BooleanRepository,\n      useFactory: (cache: ICache<boolean>) => new RepositoryImpl(cache),\n      inject: [InjectionTokens.BooleanCache],\n    },\n  ]\n})\nexport class Application {}\n",o="\ninterface ICache<T> {}\nclass CacheImpl<T> implements ICache<T> {}\ninterface IRepository<T> { /*...*/ }\nclass RepositoryImpl<T> implements IRepository<T> {\n  constructor(\n    private cache: ICache<T>,\n  ) {}\n}\n\nconst InjectionTokens = {\n  StringCache: new InjectionToken<ICache<string>>('StringCache'),\n  NumberCache: new InjectionToken<ICache<number>>('NumberCache'),\n  BooleanCache: new InjectionToken<ICache<boolean>>('BooleanCache'),\n  StringRepository: new InjectionToken<IRepository<string>>('StringRepository'),\n  NumberRepository: new InjectionToken<IRepository<number>>('NumberRepository'),\n  BooleanRepository: new InjectionToken<IRepository<boolean>>('BooleanRepository'),\n}\n\n@Injectable()\nclass PrimitivesService {\n  constructor(\n    @Inject(InjectionTokens.StringRepository)\n    private stringRepository: IRepository<string>,\n    @Inject(InjectionTokens.NumberRepository)\n    private numberRepository: IRepository<number>,\n    @Inject(InjectionTokens.BooleanRepository)\n    private booleanRepository: IRepository<boolean>,\n  ) {}\n}\n\n@NgModule({\n  providers: [\n    PrimitivesService,\n    { provide: InjectionTokens.StringCache, useClass: CacheImpl },\n    { provide: InjectionTokens.NumberCache, useClass: CacheImpl },\n    { provide: InjectionTokens.BooleanCache, useClass: CacheImpl },\n    {\n      provide: InjectionTokens.StringRepository,\n      useFactory: (cache: ICache<string>) => new RepositoryImpl(cache),\n      inject: [InjectionTokens.StringCache],\n    },\n    {\n      provide: InjectionTokens.NumberRepository,\n      useFactory: (cache: ICache<number>) => new RepositoryImpl(cache),\n      inject: [InjectionTokens.NumberCache],\n    },\n    {\n      provide: InjectionTokens.BooleanRepository,\n      useFactory: (cache: ICache<boolean>) => new RepositoryImpl(cache),\n      inject: [InjectionTokens.BooleanCache],\n    },\n  ]\n})\nexport class Application {}\n",r="\ninterface ICache<T> {}\nclass CacheImpl<T> implements ICache<T> {}\ninterface IRepository<T> { /*...*/ }\nclass RepositoryImpl<T> implements IRepository<T> {\n  constructor(\n    private cache: ICache<T>,\n  ) {}\n}\n\nconst InjectionTokens = {\n  StringCache: Symbol('StringCache'),\n  NumberCache: Symbol('NumberCache'),\n  BooleanCache: Symbol('BooleanCache'),\n  StringRepository: Symbol('StringRepository'),\n  NumberRepository: Symbol('NumberRepository'),\n  BooleanRepository: Symbol('BooleanRepository'),\n}\n\n@injectable()\nclass PrimitivesService {\n  constructor(\n    @inject(InjectionTokens.StringRepository)\n    private stringRepository: IRepository<string>,\n    @inject(InjectionTokens.NumberRepository)\n    private numberRepository: IRepository<number>,\n    @inject(InjectionTokens.BooleanRepository)\n    private booleanRepository: IRepository<boolean>,\n  ) {}\n}\n\ncontainer.register(InjectionTokens.StringCache, { useClass: CacheImpl });\ncontainer.register(InjectionTokens.NumberCache, { useClass: CacheImpl });\ncontainer.register(InjectionTokens.BooleanCache, { useClass: CacheImpl });\ncontainer.register(\n  InjectionTokens.StringRepository,\n  { useFactory: (container) => new RepositoryImpl(container.resolve(InjectionTokens.StringCache)) },\n);\ncontainer.register(\n  InjectionTokens.NumberRepository,\n  { useFactory: (container) => new RepositoryImpl(container.resolve(InjectionTokens.NumberCache)) },\n);\ncontainer.register(\n  InjectionTokens.BooleanRepository,\n  { useFactory: (container) => new RepositoryImpl(container.resolve(InjectionTokens.BooleanCache)) },\n);\ncontainer.register(PrimitivesService, { useClass: PrimitivesService });\n";return(0,t.jsxs)(i.A,{children:[(0,t.jsx)(s.A,{value:"clawject",label:"Clawject",default:!0,children:(0,t.jsx)(a.A,{showLineNumbers:!0,language:"typescript",children:e.trim()})}),(0,t.jsx)(s.A,{value:"nest",label:"NestJS",children:(0,t.jsx)(a.A,{showLineNumbers:!0,language:"typescript",children:n.trim()})}),(0,t.jsx)(s.A,{value:"angular",label:"Angular",children:(0,t.jsx)(a.A,{showLineNumbers:!0,language:"typescript",children:o.trim()})}),(0,t.jsx)(s.A,{value:"tsyringe",label:"TSyringe",children:(0,t.jsx)(a.A,{showLineNumbers:!0,language:"typescript",children:r.trim()})})]})},p={title:"Introduction \ud83d\ude80",hide_title:!0,slug:"/"},u=void 0,m={id:"intro",title:"Introduction \ud83d\ude80",description:"Introduction \ud83d\ude80",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1721595883e3,frontMatter:{title:"Introduction \ud83d\ude80",hide_title:!0,slug:"/"},sidebar:"docs",next:{title:"Setup \ud83d\udee0",permalink:"/docs/setup"}},y={},d=()=>{const e={img:"img",...(0,r.R)()};return(0,t.jsx)(e.img,{src:"/img/spring.svg",alt:"spring_logo",style:{width:"1em",height:"auto"}})},h=()=>{const e={img:"img",...(0,r.R)()};return(0,t.jsx)(e.img,{src:"https://docs.nestjs.com/assets/logo-small.svg",alt:"nestjs_logo",style:{width:"1em",height:"auto"}})},I=[{value:"Introduction \ud83d\ude80",id:"introduction-",level:2},{value:"Main Features",id:"main-features",level:3},{value:"Inspiration",id:"inspiration",level:3}];function b(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"introduction-",children:"Introduction \ud83d\ude80"}),"\n",(0,t.jsxs)(n.p,{children:["Clawject is TypeScript Dependency Injection framework that's here to make your coding life easier.\nForget about ",(0,t.jsx)(n.strong,{children:"injection tokens"})," and a huge number of ",(0,t.jsx)(n.strong,{children:"decorators on and in your business classes"}),".\nUse typescript features like interfaces, generics, type hierarchies in\na declarative and intuitive way and let Clawject do messy work for you!"]}),"\n",(0,t.jsx)(n.h3,{id:"main-features",children:"Main Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ahead of Time Dependency Injection based on TypeScript types, full type safety because no injection tokens are used."}),"\n",(0,t.jsx)(n.li,{children:"Can be used both in Node.js and in the browser."}),"\n",(0,t.jsx)(n.li,{children:"Declarative and intuitive API."}),"\n",(0,t.jsx)(n.li,{children:"Fast at runtime, all dependency-resolution work is done at compile time!"}),"\n",(0,t.jsx)(n.li,{children:"IDEs support, all errors and warnings are shown right in your code editor window."}),"\n",(0,t.jsx)(n.li,{children:"Ahead of Time circular dependencies detection with a clear cycle path, forget about runtime loops and stack overflows!"}),"\n",(0,t.jsx)(n.li,{children:"No need to refer to a dependency injection library in your business-oriented classes, leave them clean and framework independent!"}),"\n",(0,t.jsx)(n.li,{children:"Injection scopes support and ability to create your own custom scopes."}),"\n",(0,t.jsxs)(n.li,{children:["Supports both experimental and stable JavaScript decorators + no dependency on ",(0,t.jsx)(n.code,{children:"reflect-metadata"})," library."]}),"\n",(0,t.jsx)(n.li,{children:"Minimal runtime overhead."}),"\n",(0,t.jsx)(n.li,{children:"Clawject is not modifying your classes, not adding additional runtime fields, so it's safe to use it with any other library or framework."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Let's compare Clawject with other popular frameworks that implements Dependency Injection, note how class is using interfaces with generics to declare dependencies:"}),"\n","\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(n.p,{children:"When it comes to the more complex scenarios, like generic inside constructors - with Clawject,\nit's still easy and type-safe but with other frameworks, it's getting really messy and hard to maintain, see the comparison below:"}),"\n",(0,t.jsx)(l,{}),"\n",(0,t.jsxs)(n.p,{children:["As you can see - Clawject requires much less boilerplate code, not pollutes ",(0,t.jsx)(n.strong,{children:"business classes"})," and provides an intuitive,\ndeclarative and ",(0,t.jsx)(n.strong,{children:"really"})," type-safe API where you can't miss a thing.\nLet's clawject your codebase and make it more maintainable and easy to understand!"]}),"\n",(0,t.jsx)(n.h3,{id:"inspiration",children:"Inspiration"}),"\n","\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Clawject"})," is inspired by ",(0,t.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/reference/core/beans.html",children:"Spring framework"})," ",(0,t.jsx)(d,{})," and ",(0,t.jsx)(n.a,{href:"https://nestjs.com/",children:"NestJS"})," ",(0,t.jsx)(h,{})]})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},9365:(e,n,o)=>{o.d(n,{A:()=>s});o(6540);var t=o(4164);const r={tabItem:"tabItem_Ymn6"};var i=o(4848);function s(e){let{children:n,hidden:o,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,s),hidden:o,children:n})}},1470:(e,n,o)=>{o.d(n,{A:()=>T});var t=o(6540),r=o(4164),i=o(3104),s=o(6347),a=o(205),c=o(7485),l=o(1682),p=o(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:r}}=e;return{value:n,label:o,attributes:t,default:r}}))}(o);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function y(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:o}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function h(e){const{defaultValue:n,queryString:o=!1,groupId:r}=e,i=m(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!y({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[l,u]=d({queryString:o,groupId:r}),[h,I]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,p.Dv)(o);return[r,(0,t.useCallback)((e=>{o&&i.set(e)}),[o,i])]}({groupId:r}),b=(()=>{const e=l??h;return y({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&c(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!y({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),I(e)}),[u,I,i]),tabValues:i}}var I=o(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=o(4848);function R(e){let{className:n,block:o,selectedValue:t,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),p=e=>{const n=e.currentTarget,o=c.indexOf(n),r=a[o].value;r!==t&&(l(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;n=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;n=c[o]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},n),children:a.map((e=>{let{value:n,label:o,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:p,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function g(e){let{lazy:n,children:o,selectedValue:r}=e;const i=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=h(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,j.jsx)(R,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function T(e){const n=(0,I.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(6540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);