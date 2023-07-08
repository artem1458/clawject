"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,c]=b({queryString:n,groupId:a}),[p,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),y(e)}),[c,y,l]),tabValues:l}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==o&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=y(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(h,(0,a.Z)({},e,t)))}function C(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},7474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={title:"Clawject type system",id:"clawject-type-system"},s=void 0,c={unversionedId:"base-concepts/clawject-type-system",id:"base-concepts/clawject-type-system",title:"Clawject type system",description:"Clawject type system following a typescript type system as much as possible,",source:"@site/docs/03-base-concepts/02-type-system.mdx",sourceDirName:"03-base-concepts",slug:"/base-concepts/clawject-type-system",permalink:"/docs/base-concepts/clawject-type-system",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Clawject type system",id:"clawject-type-system"},sidebar:"tutorialSidebar",previous:{title:"Intro to IoC and DI",permalink:"/docs/base-concepts/ioc-di"},next:{title:"ContainerManager",permalink:"/docs/base-concepts/container-manager"}},u={},p=[{value:"Primitive types",id:"primitive-types",level:2},{value:"Object types",id:"object-types",level:2},{value:"Generic types",id:"generic-types",level:2},{value:"Intersection types",id:"intersection-types",level:2},{value:"Union types",id:"union-types",level:2}],m={toc:p},d="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Clawject type system following a typescript type system as much as possible,\nbut there is one major difference -\nTypeScript using\n",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#structural-type-system"},"duck typing"),",\nand Clawject using ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Nominal_type_system"},"nominal typing"),"."),(0,r.kt)("p",null,"As an example - we have 2 classes ",(0,r.kt)("inlineCode",{parentName:"p"},"Cat")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Dog"),", both of them have the same properties and methods,\nif we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"Cat")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Dog")," or vice versa -\nTypeScript will not complain about it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Cat {\n  name = 'cat';\n  voice(): void {\n    console.log('meow');\n  }\n}\n\nclass Dog {\n  name = 'dog';\n  voice(): void {\n    console.log('woof');\n  }\n}\n\nfunction meow(animal: Cat): void {\n  animal.voice();\n}\n\nconst dog = new Dog();\nmeow(dog); // <- TypeScript will not complain about it\n")),(0,r.kt)("p",null,"Clawject will complain about it, and will report compile error about missing Bean declaration for ",(0,r.kt)("inlineCode",{parentName:"p"},"Cat"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Cat {\n  name = 'cat';\n  voice(): void {\n    console.log('meow');\n  }\n}\n\nclass Dog {\n  name = 'dog';\n  voice(): void {\n    console.log('woof');\n  }\n}\n\nclass MyContext extends CatContext {\n  @PostConstruct\n  meow(animal: Cat): void {\n    animal.voice();\n  }\n\n  dog = Bean(Dog);\n}\n")),(0,r.kt)("h2",{id:"primitive-types"},"Primitive types"),(0,r.kt)("p",null,"Clawject supports all base types from TypeScript:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"any | unknown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"void | undefined")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enum")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"biging"))),(0,r.kt)("p",null,"Also - Clawject supports literal types, literal types are compatible with base types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"string literal: ",(0,r.kt)("inlineCode",{parentName:"li"},"'string_literal'")),(0,r.kt)("li",{parentName:"ul"},"number literal: ",(0,r.kt)("inlineCode",{parentName:"li"},"123")),(0,r.kt)("li",{parentName:"ul"},"boolean literal: ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},"enum literal: ",(0,r.kt)("inlineCode",{parentName:"li"},"MyEnum.FIRST")),(0,r.kt)("li",{parentName:"ul"},"bigint literal: ",(0,r.kt)("inlineCode",{parentName:"li"},"42n"))),(0,r.kt)("p",null,"Let's look at the example:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"explicit-type",label:"Explicit type declaration",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class MyContext extends CatContext {\n  @Bean stringLiteral: 'string_literal' = 'string_literal';\n  @Bean numberLiteral: 42 = 42;\n  @Bean booleanLiteral: true = true;\n  @Bean enumLiteral: MyEnum.FIRST = MyEnum.FIRST;\n  @Bean bigintLiteral: 42n = 42n;\n\n  @PostConstruct\n  postConstruct(\n    string: string, // <- stringLiteral bean will be injected here\n    number: number, // <- numberLiteral bean will be injected here\n    boolean: boolean, // <- booleanLiteral bean will be injected here\n    Enum: MyEnum, // <- enumLiteral bean will be injected here\n    bigint: bigint, // <- bigintLiteral bean will be injected here\n  ) {}\n}\n"))),(0,r.kt)(i.Z,{value:"compact-type",label:"Compact type declaration",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class MyContext extends CatContext {\n  @Bean stringLiteral = 'string_literal' as const;\n  @Bean numberLiteral = 42 as const;\n  @Bean booleanLiteral = true as const;\n  @Bean enumLiteral = MyEnum.FIRST as const;\n  @Bean bigintLiteral = 42n as const;\n\n  @PostConstruct\n  postConstruct(\n    string: string, // <- stringLiteral bean will be injected here\n    number: number, // <- numberLiteral bean will be injected here\n    boolean: boolean, // <- booleanLiteral bean will be injected here\n    Enum: MyEnum, // <- enumLiteral bean will be injected here\n    bigint: bigint, // <- bigintLiteral bean will be injected here\n  ) {}\n}\n")))),(0,r.kt)("h2",{id:"object-types"},"Object types"),(0,r.kt)("p",null,"Because Clawject is using nominal typing \u2014 it's relying on at type declaration name and place,\nso it's not possible to use anonymous types, but it's possible to use named types like ",(0,r.kt)("inlineCode",{parentName:"p"},"class"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),":"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"type-references",label:"Using type references",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Foo {}\ninterface Bar {}\ntype Baz = {};\n\nclass MyContext extends CatContext {\n  @Bean foo: Foo = new Foo();\n  @Bean bar: Bar = {};\n  @Bean baz: Baz = {};\n\n  @PostConstruct\n  postConstruct(\n    dep0: Foo, // <- foo bean will be injected here  \n    dep1: Bar, // <- bar bean will be injected here  \n    dep2: Baz, // <- baz bean will be injected here  \n  ) {}\n}\n"))),(0,r.kt)(i.Z,{value:"type-literals",label:"Using object-like literals",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class MyContext extends CatContext {\n  @Bean foo: { bar: string } = {bar: 'barValue'};\n\n  @PostConstruct\n  postConstruct(\n    // compilation error will be reported here, because structurally these types are identical,\n    // but they have different declarations\n    foo: { bar: string },\n  ) {}\n}\n")))),(0,r.kt)("h2",{id:"generic-types"},"Generic types"),(0,r.kt)("p",null,"Clawject has first-class support for generic types:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"string-generic",label:"String generic",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface WithGeneric<T> {\n  value: T;\n}\n\nclass MyContext extends CatContext {\n  @Bean withStringGeneric: WithGeneric<string> = {value: 'foo'};\n\n  @PostConstruct\n  postConstruct(\n    value: WithGeneric<string>,\n  ) {}\n}\n"))),(0,r.kt)(i.Z,{value:"string-literal-generic",label:"String literal generic",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface WithGeneric<T> {\n  value: T;\n}\n\nclass MyContext extends CatContext {\n  @Bean withStringGeneric: WithGeneric<'string_literal'> = {value: 'string_literal'};\n\n  @PostConstruct\n  postConstruct(\n    value: WithGeneric<'string_literal'>,\n  ) {}\n}\n"))),(0,r.kt)(i.Z,{value:"string-literal-generic-string",label:"String literal generic with base string",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface WithGeneric<T> {\n  value: T;\n}\n\nclass MyContext extends CatContext {\n  @Bean withStringGeneric: WithGeneric<'string_literal'> = {value: 'string_literal'};\n\n  @PostConstruct\n  postConstruct(\n    value: WithGeneric<string>,\n  ) {}\n}\n"))),(0,r.kt)(i.Z,{value:"string-literal-generic-any",label:"String literal generic with any",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface WithGeneric<T> {\n  value: T;\n}\n\nclass MyContext extends CatContext {\n  @Bean withStringGeneric: WithGeneric<'string_literal'> = {value: 'string_literal'};\n\n  @PostConstruct\n  postConstruct(\n    // \"withStringGeneric\" will be injected, because 'string_literal' is compatible with any\n    value: WithGeneric<any>,\n  ) {}\n}\n")))),(0,r.kt)("h2",{id:"intersection-types"},"Intersection types"),(0,r.kt)("p",null,"Clawject fully supports intersection types as bean types, and as bean dependency types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface IFoo { foo: string }\ninterface IBar { bar: string }\ninterface IBaz { baz: string }\n\nclass MyContext extends CatContext {\n  @Bean fooAndBar: IFoo & IBar = { foo: 'fooValue', bar: 'barValue' }\n  @Bean fooAndBaz: IFoo & IBaz = { foo: 'fooValue', baz: 'bazValue' }\n  @Bean fooAndBarAndBaz: IFoo & IBar & IBaz = { foo: 'fooValue', bar: 'barValue', baz: 'bazValue' }\n\n  @PostConstruct\n  postConstruct(\n    dep0: IFoo & IBar, // <- \"fooAndBar\" will be injected\n    dep1: IFoo & IBaz, // <- \"fooAndBaz\" will be injected\n    dep2: IFoo & IBar & IBaz, // <- \"fooAndBarAndBaz\" will be injected\n  ) {}\n}\n")),(0,r.kt)("h2",{id:"union-types"},"Union types"),(0,r.kt)("p",null,"Clawject supports union types only as a bean dependency types,\nso it's not possible to create a bean with a union type, but it's possible to request a bean using a union type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'interface IFoo { foo: string }\ninterface IBar { bar: string }\n\nclass MyContext extends CatContext {\n  @Bean bar: IBar = { bar: \'barValue\' }\n\n  @PostConstruct\n  postConstruct(\n    dep0: IFoo | IBar, // <- "bar" will be injected here, because no bean of type "IFoo" is declared\n  ) {}\n}\n')))}b.isMDXComponent=!0}}]);