"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9559],{5534:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var t=a(5893),r=a(1151),o=a(4866),s=a(5162);const c={title:"Bean",hide_title:!0},l=void 0,i={id:"fundamentals/bean",title:"Bean",description:"Bean",source:"@site/docs/fundamentals/bean.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/bean",permalink:"/docs/fundamentals/bean",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710366144,formattedLastUpdatedAt:"Mar 13, 2024",frontMatter:{title:"Bean",hide_title:!0},sidebar:"docs",previous:{title:"Import",permalink:"/docs/fundamentals/import"},next:{title:"ExposeBeans",permalink:"/docs/fundamentals/expose-beans"}},d={},u=[{value:"Bean",id:"bean",level:2},{value:"Declare Bean",id:"declare-bean",level:3},{value:"<code>@Bean</code> decorator",id:"bean-decorator",level:4},{value:"<code>Bean</code> function",id:"bean-function",level:4},{value:"Bean Types",id:"bean-types",level:3},{value:"Specifying a Bean type",id:"specifying-a-bean-type",level:3},{value:"Bean type narrowing",id:"bean-type-narrowing",level:4},{value:"Asynchronous Beans",id:"asynchronous-beans",level:3},{value:"Bean Dependencies",id:"bean-dependencies",level:3},{value:"How dependencies are resolved",id:"how-dependencies-are-resolved",level:3},{value:"Optional dependencies",id:"optional-dependencies",level:3},{value:"Circular dependencies",id:"circular-dependencies",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"bean",children:"Bean"}),"\n",(0,t.jsx)(n.p,{children:"Bean is an object that is managed and constructed by Clawject container it can have dependencies,\nand it can be a dependency for other Beans."}),"\n",(0,t.jsx)(n.h3,{id:"declare-bean",children:"Declare Bean"}),"\n",(0,t.jsx)(n.p,{children:"There are a few ways to declare a Bean, let's explore all of them one by one."}),"\n",(0,t.jsxs)(n.h4,{id:"bean-decorator",children:[(0,t.jsx)(n.code,{children:"@Bean"})," decorator"]}),"\n",(0,t.jsxs)(n.p,{children:["You can decorate property, getter or method with ",(0,t.jsx)(n.code,{children:"@Bean"})," decorator to declare a Bean."]}),"\n",(0,t.jsxs)(n.p,{children:["When you're decorating ",(0,t.jsx)(n.strong,{children:"method"})," or property that holds ",(0,t.jsx)(n.strong,{children:"arrow function"})," -\nit's your responsibility to provide return value for bean,\nif it's class - it should be instantiated, if it's some dynamic value \u2014 it should be returned from function provided."]}),"\n",(0,t.jsxs)(n.p,{children:["Functions decorated with ",(0,t.jsx)(n.code,{children:"@Bean"})," decorator called ",(0,t.jsx)(n.strong,{children:"factory-functions"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You can provide bean dependencies via function arguments by specifying an argument type."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Declaring method and arrow function beans"',children:"class Foo {\n  name = 'foo';\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean foo() {\n    return new Foo();\n  }\n\n  @Bean fooName = (foo: Foo) => foo.name;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When your bean doesn't have any dependencies -\nyou can just assign value to property decorated with ",(0,t.jsx)(n.code,{children:"@Bean"})," decorator."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="Declaring bean without dependencies"',children:"class Foo {}\n\n@ClawjectApplication\nclass Application {\n  @Bean foo = new Foo();\n}\n"})}),"\n",(0,t.jsxs)(n.h4,{id:"bean-function",children:[(0,t.jsx)(n.code,{children:"Bean"})," function"]}),"\n",(0,t.jsxs)(n.p,{children:["It can be quite annoying to declare each dependency in method or arrow function for your class,\nespecially when your class has a lot of dependencies.\nSo, if you add/change/remove a dependency - you need to change it in factory-function level as well.\nTo solve this inconvenience Clawject has ",(0,t.jsx)(n.code,{children:"Bean"})," function that accepts class constructor,\nand automatically instantiate it with all needed dependencies."]}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"bean-function",label:"Declaring bean with Bean function",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Bar {}\nclass Baz {}\n\nclass Foo {\n  constructor(\n    private dependency0: string,\n    private dependency1: number,\n    private dependency2: Bar,\n    private dependency3: Baz,\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  foo = Bean(Foo);\n\n  @Bean stringBean = 'dependency0';\n  @Bean numberBean = 1;\n  barBean = Bean(Bar);\n  bazBean = Bean(Baz);\n}\n"})})}),(0,t.jsx)(s.Z,{value:"no-bean-function",label:"Declaring bean with @Bean decorator and method",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Bar {}\nclass Baz {}\n\nclass Foo {\n  constructor(\n    private dependency0: string,\n    private dependency1: number,\n    private dependency2: Bar,\n    private dependency3: Baz,\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean foo(\n    dependency0: string,\n    dependency1: number,\n    dependency2: Bar,\n    dependency3: Baz,\n  ) {\n    return new Foo(\n      dependency0,\n      dependency1,\n      dependency2,\n      dependency3,\n    );\n  }\n\n  @Bean stringBean = 'dependency0';\n  @Bean numberBean = 1;\n\n  @Bean barBean() {\n    return new Bar();\n  }\n\n  @Bean bazBean() {\n    return new Baz();\n  }\n}\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"bean-types",children:"Bean Types"}),"\n",(0,t.jsx)(n.p,{children:"Bean type is a type of value that bean will provide as a dependency for other beans."}),"\n",(0,t.jsxs)(n.p,{children:["There are a few restrictions on bean value types: ",(0,t.jsx)(n.code,{children:"undefined"}),", ",(0,t.jsx)(n.code,{children:"void"}),", ",(0,t.jsx)(n.code,{children:"null"})," and ",(0,t.jsx)(n.code,{children:"never"})," types.\nIf you specify an invalid bean type, you will get compile-time error."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  @Bean undefined = undefined;\n  @Bean void: void = undefined;\n  @Bean null = null;\n  @Bean never(): never { throw new Error('never'); }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"specifying-a-bean-type",children:"Specifying a Bean type"}),"\n",(0,t.jsx)(n.p,{children:"You can specify the type explicitly for each Bean,\nbut it is not necessary to, because Clawject using TypeScript type system to infer types."}),"\n",(0,t.jsx)(n.p,{children:"The next two examples are equivalent:"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"infer-type",label:"Infering type based on value",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {}\n\n@ClawjectApplication\nclass Application {\n  @Bean propertyBean = new Foo();\n  @Bean factoryMethodBean() { return new Foo(); }\n  @Bean arrowFunctionBean = () => new Foo();\n  functionBean = Bean(Foo);\n}\n"})})}),(0,t.jsx)(s.Z,{value:"explicitly-specify-type",label:"Specify type explicitly",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"@ClawjectApplication\nclass Application {\n  @Bean propertyBean: Foo = new Foo();\n  @Bean factoryMethodBean(): Foo { return new Foo(); }\n  @Bean arrowFunctionBean = (): Foo => new Foo();\n  functionBean = Bean<Foo, typeof Foo>(Foo);\n}\n"})})})]}),"\n",(0,t.jsx)(n.h4,{id:"bean-type-narrowing",children:"Bean type narrowing"}),"\n",(0,t.jsxs)(n.p,{children:["In this example we will narrow a bean type from ",(0,t.jsx)(n.code,{children:"FooBar & IFoo & IBar"})," to ",(0,t.jsx)(n.code,{children:"IFoo"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface IFoo {\n  foo: string;\n}\n\ninterface IBar {\n  bar: string;\n}\n\nclass FooBar implements IFoo, IBar {\n  foo = 'foo';\n  bar = 'bar';\n}\n\n@ClawjectApplication\nclass Application {\n  /* The type of bean is IFoo now */\n  fooBar = Bean<IFoo, typeof FooBar>(FooBar);\n\n  @PostConstruct\n  init(\n    /* fooBar bean will be injected */\n    foo: IFoo,\n    /* Compilation error here because no beans found with type IBar */\n    bar: IBar,\n    /* Compilation error here because no beans found with type FooBar */\n    fooBar: FooBar,\n  ) {}\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"asynchronous-beans",children:"Asynchronous Beans"}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes you need to create a bean asynchronously, for example, when you need to fetch some data from the server to create a bean.\nTo mark beans as asynchronous, you can just return ",(0,t.jsx)(n.code,{children:"Promise"})," from factory-function, ",(0,t.jsx)(n.code,{children:"async"})," method or just plain bean value."]}),"\n",(0,t.jsx)(n.p,{children:"When Bean is requested as a dependency for another bean or as an exposed bean, Clawject will wait for the promise to resolve and then use the resolved value as a bean."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    /*\n    * We don't need to specify parameter as Promise<string>\n    * because Clawject will handle promises automatically\n    */\n    private somePropertyThatFetchedAsynchronously: string,\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean async somePropertyThatFetchedAsynchronously() {\n    const response = await fetch('https://example.com/some-data');\n    return response.text();\n  }\n\n  foo = Bean(Foo);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Also if you want to use dynamic import to create a bean without factory functions (using only ",(0,t.jsx)(n.code,{children:"Bean"})," function) you can do it like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="foo.ts"',children:"export class Foo {}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="app.ts"',children:"@ClawjectApplication\nclass Application {\n  foo = Bean(import('./foo').then(module => module.Foo));\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"bean-dependencies",children:"Bean Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Bean dependency is a parameter of a bean that is injected by Clawject.\nDependency can be declared in class constructor, or in a ",(0,t.jsx)(n.code,{children:"factory-method"}),"."]}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"class-bean-dependency",label:"Class-Constructor Bean dependencies",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string,\n    private baz: number,\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean bar = 'barValue';\n  @Bean baz = 42;\n\n  foo = Bean(Foo);\n}\n"})})}),(0,t.jsx)(s.Z,{value:"factory-function-bean-dependencies",label:"Factory-Method bean dependencies",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string,\n    private baz: number,\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean bar = 'barValue';\n  @Bean baz = 42;\n\n  @Bean foo(bar: string, baz: number) {\n    return new Foo(bar, baz)\n  }\n}\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"how-dependencies-are-resolved",children:"How dependencies are resolved"}),"\n",(0,t.jsx)(n.p,{children:"There are a few steps that are taken to resolve bean dependencies."}),"\n",(0,t.jsx)(n.p,{children:"Firstly - Clawject try to find all beans that are compatible with a dependency type.\nIf none of the compatible bean candidates are found - compilation error will be reported."}),"\n",(0,t.jsxs)(n.p,{children:["If only ",(0,t.jsx)(n.strong,{children:"one"})," compatible bean is found - it's used as a dependency."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string // <- \"barBean\" will be injected\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean barBean = 'barValue';\n\n  foo = Bean(Foo);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.strong,{children:"more than one"})," compatible bean is found - Clawject try to find a candidate that has the same name as parameter.\nIf such a bean is found - it's used as a dependency."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string // <- \"bar\" will be injected\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean bar = 'barValue';\n  @Bean barOther = 'barOtherValue';\n\n  foo = Bean(Foo);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.strong,{children:"more than one"})," compatible bean is found, and none of them has the same name\nas parameter and not ",(0,t.jsx)(n.a,{href:"/docs/fundamentals/primary",children:(0,t.jsx)(n.code,{children:"@Primary"})})," - then compilation error will be reported."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string // <- compilation error\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean bar1 = 'bar1Value';\n  @Bean bar2 = 'bar2Value';\n\n  foo = Bean(Foo);\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"optional-dependencies",children:"Optional dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Dependencies can be optional, if there are no suitable bean candidates found - ",(0,t.jsx)(n.code,{children:"undefined"})," or ",(0,t.jsx)(n.code,{children:"null"})," will be injected."]}),"\n",(0,t.jsx)(n.p,{children:"Let's take a look at how you can mark dependency as optional:"}),"\n",(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{value:"optional-operator",label:"Optional operator",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar?: string, // <- optional dependency, `undefined` will be injected\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  foo = Bean(Foo);\n}\n"})})}),(0,t.jsx)(s.Z,{value:"union-undefined",label:"Union with undefined",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string | undefined, // <- optional dependency, `undefined` will be injected\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  foo = Bean(Foo);\n}\n"})})}),(0,t.jsx)(s.Z,{value:"union-null",label:"Union with null",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: string | null, // <- optional dependency, `null` will be injected\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  foo = Bean(Foo);\n}\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"circular-dependencies",children:"Circular dependencies"}),"\n",(0,t.jsx)(n.p,{children:"Clawject will detect circular dependencies and report compilation error with involved beans."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  constructor(\n    private bar: Bar,\n  ) {}\n}\n\nclass Bar {\n  constructor(\n    private baz: Baz,\n  ) {}\n}\n\nclass Baz {\n  constructor(\n    private foo: Foo,\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  /*\n  * Circular dependencies detected.\n  * \u250c\u2500\u2500\u2500\u2500\u2500\u2510\n  * |  foo\n  * \u2191     \u2193\n  * |  bar\n  * \u2191     \u2193\n  * |  baz\n  * \u2514\u2500\u2500\u2500\u2500\u2500\u2518\n  */\n  foo = Bean(Foo);\n  bar = Bean(Bar);\n  baz = Bean(Baz);\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>s});a(7294);var t=a(512);const r={tabItem:"tabItem_Ymn6"};var o=a(5893);function s(e){let{children:n,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>g});var t=a(7294),r=a(512),o=a(2466),s=a(6550),c=a(469),l=a(1980),i=a(7392),d=a(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,o=p(e),[s,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[i,u]=b({queryString:a,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),y=(()=>{const e=i??f;return h({value:e,tabValues:o})?e:null})();(0,c.Z)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(5893);function x(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),r=c[a].value;r!==t&&(i(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function B(e){let{lazy:n,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,j.jsx)(x,{...e,...n}),(0,j.jsx)(B,{...e,...n})]})}function g(e){const n=(0,m.Z)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>s});var t=a(7294);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);