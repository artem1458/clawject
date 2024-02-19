"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6899],{1741:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(5893),o=a(1151);a(4866),a(5162);const r={title:"@Lazy",hide_title:!0},s=void 0,l={id:"fundamentals/lazy",title:"@Lazy",description:"@Lazy",source:"@site/docs/fundamentals/lazy.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/lazy",permalink:"/docs/fundamentals/lazy",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708365425,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{title:"@Lazy",hide_title:!0},sidebar:"docs",previous:{title:"@Embedded",permalink:"/docs/fundamentals/embedded"},next:{title:"@Primary",permalink:"/docs/fundamentals/primary"}},i={},c=[{value:"@Lazy",id:"lazy",level:2},{value:"Lazy on <code>@Configuration</code> class",id:"lazy-on-configuration-class",level:2},{value:"Lazy on Beans",id:"lazy-on-beans",level:2},{value:"Combining @Lazy on @Configuration and Bean",id:"combining-lazy-on-configuration-and-bean",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"lazy",children:"@Lazy"}),"\n",(0,t.jsx)(n.p,{children:"By default, Clawject creates all singleton beans eagerly when all configuration classes are instatiated."}),"\n",(0,t.jsx)(n.p,{children:"However, there are cases when we need to create a bean,\nnot at the context initialization, but only when we request it."}),"\n",(0,t.jsx)(n.admonition,{title:"Note that",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Bean"})," level annotations have precedence over class level annotations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@Lazy"})," can be applied to ",(0,t.jsx)(n.code,{children:"@Configuration"})," class or to the bean declaration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"@Lazy"})," decorator accepts optional boolean parameter that indicates is target will be lazy or not, so to make it eager, you can use ",(0,t.jsx)(n.code,{children:"@Lazy(false)"}),"."]}),"\n"]})}),"\n",(0,t.jsxs)(n.h2,{id:"lazy-on-configuration-class",children:["Lazy on ",(0,t.jsx)(n.code,{children:"@Configuration"})," class"]}),"\n",(0,t.jsxs)(n.p,{children:["When we put ",(0,t.jsx)(n.code,{children:"@Lazy"})," decorator on the ",(0,t.jsx)(n.code,{children:"@Configuration"})," class,\nit indicates that all the beans that are declared in configuration should be loaded lazily."]}),"\n",(0,t.jsx)(n.p,{children:"Let's have a look here:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {Bean, ClawjectApplication, ClawjectFactory, ExposeBeans, Lazy, PostConstruct} from '@clawject/di';\n\nclass Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\n\nclass Bar {\n  @PostConstruct\n  postConstruct() {\n    console.log('Bar bean has been created');\n  }\n}\n\n@ClawjectApplication\n@Lazy\nclass Application {\n  foo = Bean(Foo);\n  bar = Bean(Bar);\n\n  exposed = ExposeBeans<{ foo: Foo, bar: Bar }>();\n}\n\nconst applicationContext = await ClawjectFactory.createApplicationContext(Application);\nconst foo = await applicationContext.getExposedBean('foo');\n// logs: Foo bean has been created\nconst bar = await applicationContext.getExposedBean('bar');\n// logs: Bar bean has been created\n"})}),"\n",(0,t.jsx)(n.p,{children:"As we see, all beans are created only when we request them for the first time."}),"\n",(0,t.jsx)(n.h2,{id:"lazy-on-beans",children:"Lazy on Beans"}),"\n",(0,t.jsxs)(n.p,{children:["We can also put ",(0,t.jsx)(n.code,{children:"@Lazy"})," decorator over the bean declaration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Bean, ClawjectApplication, ClawjectFactory, ExposeBeans, Lazy, PostConstruct } from '@clawject/di';\n\nclass Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\n\n@ClawjectApplication\nclass Application {\n  @Lazy foo = Bean(Foo);\n\n  exposed = ExposeBeans<{ foo: Foo }>();\n}\n\nconst applicationContext = await ClawjectFactory.createApplicationContext(Application);\nawait applicationContext.getExposedBean('foo');\n// logs: Foo bean has been created\n"})}),"\n",(0,t.jsx)(n.h2,{id:"combining-lazy-on-configuration-and-bean",children:"Combining @Lazy on @Configuration and Bean"}),"\n",(0,t.jsxs)(n.p,{children:["You can safely combine ",(0,t.jsx)(n.code,{children:"@Lazy"})," on ",(0,t.jsx)(n.code,{children:"@Configuration"})," and on the bean level."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Bean, ClawjectApplication, ClawjectFactory, ExposeBeans, Lazy, PostConstruct } from '@clawject/di';\n\nclass Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\nclass Bar {\n  @PostConstruct\n  postConstruct() {\n    console.log('Bar bean has been created');\n  }\n}\n\n@ClawjectApplication\n@Lazy\nclass Application {\n  @Lazy(false) foo = Bean(Foo);\n  bar = Bean(Bar);\n\n  exposed = ExposeBeans<{ bar: Bar }>();\n}\n\nconst applicationContext = await ClawjectFactory.createApplicationContext(Application);\n// logs: Foo bean has been created\nawait applicationContext.getExposedBean('bar');\n// logs: Foo bean has been created\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>s});a(7294);var t=a(6905);const o={tabItem:"tabItem_Ymn6"};var r=a(5893);function s(e){let{children:n,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,s),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>w});var t=a(7294),o=a(6905),r=a(2466),s=a(6550),l=a(469),i=a(1980),c=a(7392),u=a(12);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:o}}=e;return{value:n,label:a,attributes:t,default:o}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const o=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:o}=e,r=p(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,d]=b({queryString:a,groupId:o}),[f,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,u.Nk)(a);return[o,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:o}),x=(()=>{const e=c??f;return h({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=a(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(5893);function g(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),o=l[a].value;o!==t&&(c(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:o}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,y.jsx)(g,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>s});var t=a(7294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);