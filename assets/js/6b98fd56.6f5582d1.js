"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[680],{8133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=t(5893),o=t(1151);t(4866),t(5162);const r={title:"@Lazy"},s=void 0,l={id:"overview/lazy",title:"@Lazy",description:"By default, Clawject creates all singleton beans eagerly at the initialization of the context.",source:"@site/docs/overview/lazy.mdx",sourceDirName:"overview",slug:"/overview/lazy",permalink:"/docs/overview/lazy",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708272996,formattedLastUpdatedAt:"Feb 18, 2024",frontMatter:{title:"@Lazy"},sidebar:"docs",previous:{title:"@Embedded",permalink:"/docs/overview/embedded"},next:{title:"@Primary",permalink:"/docs/overview/primary"}},c={},i=[{value:"Lazy on CatContext class",id:"lazy-on-catcontext-class",level:2},{value:"Lazy on Beans",id:"lazy-on-beans",level:2},{value:"Combining @Lazy on CatContext and Bean",id:"combining-lazy-on-catcontext-and-bean",level:2}];function u(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"By default, Clawject creates all singleton beans eagerly at the initialization of the context.\nHowever, there are cases when we need to create a bean,\nnot at the context initialization, but when we request it."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@Lazy"})," decorator accepts optional boolean parameter that indicates is target will be lazy or not, default value: ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"lazy-on-catcontext-class",children:"Lazy on CatContext class"}),"\n",(0,a.jsxs)(n.p,{children:["When we put @Lazy decorator over the class that is inheritor of ",(0,a.jsx)(n.code,{children:"CatContext"}),",\nit indicates that all the beans that are declared in context should be loaded lazily."]}),"\n",(0,a.jsx)(n.p,{children:"Let's have a look here:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\nclass Bar {\n  @PostConstruct\n  postConstruct() {\n    console.log('Bar bean has been created');\n  }\n}\n\n@Lazy\nclass MyContext extends CatContext {\n  foo = Bean(Foo);\n  bar = Bean(Bar);\n}\n\nconst context = ContainerManager.init(MyContext);\n\ncontext.getBean('foo'); // <- logs \"Foo bean has been created\"\ncontext.getBean('bar'); // <- logs \"Bar bean has been created\"\n"})}),"\n",(0,a.jsx)(n.p,{children:"As we see, all beans are created only when we request them for the first time."}),"\n",(0,a.jsx)(n.h2,{id:"lazy-on-beans",children:"Lazy on Beans"}),"\n",(0,a.jsx)(n.p,{children:"We can also put @Lazy decorator over the bean declaration."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\n\nclass MyContext extends CatContext {\n  foo = Bean(Foo);\n}\n\nconst context = ContainerManager.init(MyContext);\n\ncontext.getBean('foo'); // <- logs \"Foo bean has been created\"\n"})}),"\n",(0,a.jsx)(n.p,{children:"Again, the bean is created only when we request it for the first time."}),"\n",(0,a.jsx)(n.h2,{id:"combining-lazy-on-catcontext-and-bean",children:"Combining @Lazy on CatContext and Bean"}),"\n",(0,a.jsxs)(n.p,{children:["We can also combine @Lazy decorator on CatContext and Bean.\nIf Bean is decorated with ",(0,a.jsx)(n.code,{children:"@Lazy"}),", it overrides the ",(0,a.jsx)(n.code,{children:"@Lazy"})," on ",(0,a.jsx)(n.code,{children:"CatContext"})," level for this bean,\nif not - value from ",(0,a.jsx)(n.code,{children:"CatContext"})," is used."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class Foo {\n  @PostConstruct\n  postConstruct() {\n    console.log('Foo bean has been created');\n  }\n}\nclass Bar {\n  @PostConstruct\n  postConstruct() {\n    console.log('Bar bean has been created');\n  }\n}\n\n@Lazy\nclass MyContext extends CatContext {\n\n  @Lazy(false)\n  foo = Bean(Foo);\n\n  bar = Bean(Bar);\n}\n\nContainerManager.init(MyContext); // <- logs \"Foo bean has been created\"\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var a=t(6905);const o={tabItem:"tabItem_Ymn6"};var r=t(5893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),o=t(6905),r=t(2466),s=t(6550),l=t(469),c=t(1980),i=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[i,d]=p({queryString:t,groupId:o}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),x=(()=>{const e=i??f;return b({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function y(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=l[t].value;o!==a&&(i(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function C(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(g,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,v.jsx)(C,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var a=t(7294);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);