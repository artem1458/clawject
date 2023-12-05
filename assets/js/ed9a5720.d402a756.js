"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[330],{4641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(5893),r=t(1151),s=t(4866),o=t(5162);const i={title:"Clawject Type System"},l=void 0,c={id:"core-concepts/type-system",title:"Clawject Type System",description:"Clawject type system following a typescript type system as much as possible,",source:"@site/docs/core-concepts/type-system.mdx",sourceDirName:"core-concepts",slug:"/core-concepts/type-system",permalink:"/docs/core-concepts/type-system",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701792449,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"Clawject Type System"},sidebar:"docs",previous:{title:"Clawject IoC Container",permalink:"/docs/core-concepts/clawject-ioc"},next:{title:"ContainerManager",permalink:"/docs/api/container-manager"}},d={},u=[{value:"Primitive types",id:"primitive-types",level:2},{value:"Object types",id:"object-types",level:2},{value:"Generic types",id:"generic-types",level:2},{value:"Classes and Interfaces inheritance",id:"classes-and-interfaces-inheritance",level:2},{value:"Intersection types",id:"intersection-types",level:2},{value:"Union types",id:"union-types",level:2},{value:"Type aliases",id:"type-aliases",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Clawject type system following a typescript type system as much as possible,\nbut there is one major difference -\nTypeScript using\n",(0,a.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#structural-type-system",children:"structural type system (duck typing)"}),"\nbut Clawject using ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Nominal_type_system",children:"nominal typing"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["As an example - we have 2 classes ",(0,a.jsx)(n.code,{children:"Cat"})," and ",(0,a.jsx)(n.code,{children:"Dog"}),", both of them have the same properties and methods,\nif we will use ",(0,a.jsx)(n.code,{children:"Cat"})," instead of ",(0,a.jsx)(n.code,{children:"Dog"})," or vice versa -\nTypeScript will not complain about it."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Cat {\n  name = 'cat';\n  voice(): void {\n    console.log('meow');\n  }\n}\n\nclass Dog {\n  name = 'dog';\n  voice(): void {\n    console.log('woof');\n  }\n}\n\nfunction doMeow(animal: Cat): void {\n  animal.voice();\n}\n\nconst dog = new Dog();\ndoMeow(dog); // <- TypeScript will not complain about it\n"})}),"\n",(0,a.jsxs)(n.p,{children:["But clawject will and report compile error about missing Bean declaration for ",(0,a.jsx)(n.code,{children:"Cat"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Cat {\n  name = 'cat';\n  voice(): void {\n    console.log('meow');\n  }\n}\n\nclass Dog {\n  name = 'dog';\n  voice(): void {\n    console.log('woof');\n  }\n}\n\nclass MyContext extends CatContext {\n  @PostConstruct\n  doMeow(animal: Cat): void { // <- error will be reported here\n    animal.voice();\n  }\n\n  dog = Bean(Dog);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"primitive-types",children:"Primitive types"}),"\n",(0,a.jsx)(n.p,{children:"Clawject supports all primitive types from TypeScript:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"any | unknown"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"void | undefined"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"null"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"string"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"number"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"boolean"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"enum"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"bigint"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"symbol"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"unique symbol"})}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Check ",(0,a.jsx)(n.a,{href:"/docs/api/bean#bean-types",children:"Bean Types"})," section for not supported bean types."]})}),"\n",(0,a.jsx)(n.p,{children:"Also - Clawject supports literal (const) types, literal types are compatible with base types:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["string literal: ",(0,a.jsx)(n.code,{children:"'string_literal'"})]}),"\n",(0,a.jsxs)(n.li,{children:["number literal: ",(0,a.jsx)(n.code,{children:"123"})]}),"\n",(0,a.jsxs)(n.li,{children:["boolean literal: ",(0,a.jsx)(n.code,{children:"true"})," or ",(0,a.jsx)(n.code,{children:"false"})]}),"\n",(0,a.jsxs)(n.li,{children:["enum literal: ",(0,a.jsx)(n.code,{children:"MyEnum.FIRST"})]}),"\n",(0,a.jsxs)(n.li,{children:["bigint literal: ",(0,a.jsx)(n.code,{children:"42n"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Let's look at the example:"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"explicit-type",label:"Explicit type declaration",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean stringLiteral: 'string_literal' = 'string_literal';\n  @Bean numberLiteral: 42 = 42;\n  @Bean booleanLiteral: true = true;\n  @Bean enumLiteral: MyEnum.FIRST = MyEnum.FIRST;\n  @Bean bigintLiteral: 42n = 42n;\n\n  @PostConstruct\n  postConstruct(\n    string: string, // <- stringLiteral bean will be injected here\n    number: number, // <- numberLiteral bean will be injected here\n    boolean: boolean, // <- booleanLiteral bean will be injected here\n    Enum: MyEnum, // <- enumLiteral bean will be injected here\n    bigint: bigint, // <- bigintLiteral bean will be injected here\n  ) {}\n}\n"})})}),(0,a.jsx)(o.Z,{value:"const-type",label:"Type declaration with const",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean stringLiteral = 'string_literal' as const;\n  @Bean numberLiteral = 42 as const;\n  @Bean booleanLiteral = true as const;\n  @Bean enumLiteral = MyEnum.FIRST as const;\n  @Bean bigintLiteral = 42n as const;\n\n  @PostConstruct\n  postConstruct(\n    string: string, // <- stringLiteral bean will be injected here\n    number: number, // <- numberLiteral bean will be injected here\n    boolean: boolean, // <- booleanLiteral bean will be injected here\n    Enum: MyEnum, // <- enumLiteral bean will be injected here\n    bigint: bigint, // <- bigintLiteral bean will be injected here\n  ) {}\n}\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"object-types",children:"Object types"}),"\n",(0,a.jsxs)(n.p,{children:["Because Clawject is using nominal typing \u2014 it's relying on at type declaration name and place,\nso it's not possible to use anonymous types, but it's possible to use named types like ",(0,a.jsx)(n.code,{children:"class"}),", ",(0,a.jsx)(n.code,{children:"interface"})," or ",(0,a.jsx)(n.code,{children:"type"}),":"]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"type-references",label:"Using type references",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Foo {}\ninterface Bar {}\ntype Baz = {};\n\nclass MyContext extends CatContext {\n  @Bean foo: Foo = new Foo();\n  @Bean bar: Bar = {};\n  @Bean baz: Baz = {};\n\n  @PostConstruct\n  postConstruct(\n    dep0: Foo, // <- foo bean will be injected here\n    dep1: Bar, // <- bar bean will be injected here\n    dep2: Baz, // <- baz bean will be injected here\n  ) {}\n}\n"})})}),(0,a.jsx)(o.Z,{value:"type-literals",label:"Using object-like literals",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean foo: { bar: string } = {bar: 'barValue'};\n\n  @PostConstruct\n  postConstruct(\n    // compilation error will be reported here, because structurally these types are identical,\n    // but they have different declarations\n    foo: { bar: string },\n  ) {}\n}\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"generic-types",children:"Generic types"}),"\n",(0,a.jsx)(n.p,{children:"Clawject has first-class support for generic types:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import {Bean, CatContext} from '@clawject/di';\n\nclass Foo<T> {\n  constructor(\n    private data: T\n  ) {}\n}\n\nclass ApplicationContext extends CatContext {\n  @Bean stringData = 'meow';\n  @Bean numberData = 42;\n\n  /* `stringData` bean will be injected for constructor parameter `data` */\n  fooWithString = Bean(Foo<string>);\n\n  /* `numberData` bean will be injected for constructor parameter `data` */\n  fooWithNumber = Bean(Foo<number>);\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If a generic type has a default value, it will be used as a fallback type."}),"\n",(0,a.jsxs)(n.li,{children:["If a generic type has ",(0,a.jsx)(n.code,{children:"extends"})," constraint - it will be used as a fallback type."]}),"\n",(0,a.jsxs)(n.li,{children:["If you're not specifying a generic type explicitly, and it doesn't have default value or ",(0,a.jsx)(n.code,{children:"extends"})," constraint - it will be treated as ",(0,a.jsx)(n.code,{children:"unknown"})," type."]}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"Let's take a look at the next example to better understand how generic types are resolved when they are not specified explicitly:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Foo<T> {\n  constructor(data: T) {}\n}\n\nclass Bar<T = string> {\n  constructor(data: T) {}\n}\n\nclass Baz {}\nclass Quux<T extends Baz> {\n  constructor(data: T) {}\n}\n\nclass ApplicationContext extends CatContext {\n  /* The type of parameter `data` will be `unknown` */\n  foo = Bean(Foo)\n\n  /* The type of parameter `data` will be `string` */\n  bar = Bean(Bar)\n\n  baz = Bean(Baz)\n  /* The type of parameter `data` will be `Baz` */\n  quux = Bean(Quux)\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"classes-and-interfaces-inheritance",children:"Classes and Interfaces inheritance"}),"\n",(0,a.jsxs)(n.p,{children:["When type is a class or interface type -\nClawject will automatically resolve a chain of type inheritance together with generics.\nSo, if you have class ",(0,a.jsx)(n.code,{children:"CacheImpl<T>"})," that implements ",(0,a.jsx)(n.code,{children:"ICache<T>"})," interface, and ",(0,a.jsx)(n.code,{children:"ICahce<T>"})," is extends ",(0,a.jsx)(n.code,{children:"IReadOnlyCache<T>"})," interface,\nClawject will treat ",(0,a.jsx)(n.code,{children:"CacheImpl<T>"})," as an intersection of ",(0,a.jsx)(n.code,{children:"CacheImpl<T>"}),", ",(0,a.jsx)(n.code,{children:"ICache<T>"})," and ",(0,a.jsx)(n.code,{children:"IReadOnlyCache<T>"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { Customer } from './customer';\nimport { Store } from './store';\n\ninterface IReadOnlyCache<V> {\n  get(key: string): V | null;\n}\n\ninterface ICache<V> extends IReadOnlyCache<V> {\n  set(key: string, value: V): void;\n  clear(): void;\n}\n\nclass CacheImpl<V> implements ICache<V> {\n  /* ... */\n}\n\nclass CustomerService {\n  constructor(\n    /* Clawject injects \"customerCache\" bean just by interface with a generic type */\n    private cache: IReadOnlyCache<Customer>\n  ) {}\n}\n\nclass StoreService {\n  constructor(\n    /* Clawject injects \"storeCache\" bean just by interface with a generic type */\n    private cache: ICache<Store>\n  ) {}\n}\n\nclass CacheManager {\n  constructor(\n    /* Clawject injects array of all found beans with type ICache (customerCache, storeCache) */\n    private caches: ICache<any>[]\n  ) {}\n}\n\nclass ApplicationContext extends CatContext {\n  customerCache = Bean(CacheImpl<Customer>);\n  storeCache = Bean(CacheImpl<Store>);\n  customerService = Bean(CustomerService);\n  storeService = Bean(StoreService);\n  cacheManager = Bean(CacheManager);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"intersection-types",children:"Intersection types"}),"\n",(0,a.jsx)(n.p,{children:"Clawject fully supports intersection types as bean types, and as bean dependency types:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface IFoo { foo: string }\ninterface IBar { bar: string }\ninterface IBaz { baz: string }\n\nclass MyContext extends CatContext {\n  @Bean fooAndBar: IFoo & IBar = { foo: 'fooValue', bar: 'barValue' }\n  @Bean fooAndBaz: IFoo & IBaz = { foo: 'fooValue', baz: 'bazValue' }\n  @Bean fooAndBarAndBaz: IFoo & IBar & IBaz = { foo: 'fooValue', bar: 'barValue', baz: 'bazValue' }\n\n  @PostConstruct\n  postConstruct(\n    dep0: IFoo & IBar, // <- \"fooAndBar\" will be injected\n    dep1: IFoo & IBaz, // <- \"fooAndBaz\" will be injected\n    dep2: IFoo & IBar & IBaz, // <- \"fooAndBarAndBaz\" will be injected\n  ) {}\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Clawject also can resolve complex generic types as a dependencies:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'class Repository<T> {}\nclass Service<T> {\n  constructor(\n    private repository: Repository<T>,\n  ) {}\n}\n\ninterface Foo { foo: string }\ninterface Bar { bar: string }\n\nclass MyContext extends CatContext {\n  fooRepository = Bean(Repository<Foo>);\n  barRepository = Bean(Repository<Bar>);\n  fooService = Bean(Service<Foo>)  // <- "fooRepository" will be injected as a "repository" dependency\n\n  @PostConstruct\n  postConstruct(\n    service: Service<Foo>, // <- "fooService" will be injected\n  ) {}\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"union-types",children:"Union types"}),"\n",(0,a.jsx)(n.p,{children:"Clawject supports union types only as a bean dependency types,\nso it's not possible to create a bean with a union type, but it's possible to request a bean using a union type:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface IFoo { foo: string }\ninterface IBar { bar: string }\n\nclass MyContext extends CatContext {\n  @Bean bar: IBar = { bar: 'barValue' }\n  @Bean foo: IFoo = { foo: 'fooValue' }\n\n  @PostConstruct\n  postConstruct(\n    dep0: IFoo | IBar, // <- \"bar\" will be injected here, because it was registered as a bean before 'foo'\n  ) {}\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"type-aliases",children:"Type aliases"}),"\n",(0,a.jsxs)(n.p,{children:["From the typescript point of view -\ntype aliases are just a wrapper sugar around base types like ",(0,a.jsx)(n.code,{children:"string"}),", ",(0,a.jsx)(n.code,{children:"number"}),", ",(0,a.jsx)(n.code,{children:"interface"}),", etc.\nSo type aliases will be treated as a set base types."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface Foo {}\ninterface Bar {}\n\ntype Baz = Foo & Bar;\n\nclass MyContext extends CatContext {\n  /* Type of Bean resolved to `Foo` */\n  @Bean foo: Foo = {};\n  /* Type of Bean resolved to `Bar` */\n  @Bean bar: Bar = {};\n  /* Type of Bean resolved to `Foo & Bar` */\n  @Bean baz: Baz = {};\n  /* Type is identical to `baz` Bean */\n  @Bean fooAndBar: Foo & Bar = {};\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(6905);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>v});var a=t(7294),r=t(6905),s=t(2466),o=t(6550),i=t(469),l=t(1980),c=t(7392),d=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=b({queryString:t,groupId:r}),[m,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=c??m;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,s]),tabValues:s}}var y=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function f(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(c(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function C(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function v(e){const n=(0,y.Z)();return(0,j.jsx)(C,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(7294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);