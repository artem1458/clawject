"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4811],{6833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(5893),r=t(1151);t(4866),t(5162);const o={title:"@Embedded",hide_title:!0},l=void 0,s={id:"fundamentals/embedded",title:"@Embedded",description:"@Embedded",source:"@site/docs/fundamentals/embedded.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/embedded",permalink:"/docs/fundamentals/embedded",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710276117,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"@Embedded",hide_title:!0},sidebar:"docs",previous:{title:"Lifecycle",permalink:"/docs/fundamentals/lifecycle"},next:{title:"@Lazy",permalink:"/docs/fundamentals/lazy"}},i={},d=[{value:"@Embedded",id:"embedded",level:2},{value:"Embedding object into context",id:"embedding-object-into-context",level:3},{value:"Naming",id:"naming",level:3}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"embedded",children:"@Embedded"}),"\n",(0,a.jsxs)(n.p,{children:["Clawject provides ",(0,a.jsx)(n.code,{children:"@Embedded"})," decorator that allows to register elements from a plain object as a beans."]}),"\n",(0,a.jsx)(n.admonition,{title:"Note that",type:"tip",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@Embedded"})," decorator can't be applied to class-constructor Bean ",(0,a.jsx)(n.code,{children:"foo = Bean(Foo)"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"embedding-object-into-context",children:"Embedding object into context"}),"\n",(0,a.jsxs)(n.p,{children:["All properties of an object that is declared in ",(0,a.jsx)(n.code,{children:"IFoo"})," will be available as a dependency in a configuration,\nand the ",(0,a.jsx)(n.code,{children:"IFoo"})," object itself will be available as a bean."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface IFoo {\n  fooProperty: string;\n}\nconst foo: IFoo = { fooProperty: 'fooValue' };\n\n@ClawjectApplication\nclass Application {\n  @Bean\n  @Embedded\n  fooBean = foo;\n\n  @PostConstruct\n  postConstruct(\n    fooObject: IFoo, // <- foo will be injected here\n    fooBeanFooProperty: string // <- foo.fooProperty will be injected here\n  ) {}\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"naming",children:"Naming"}),"\n",(0,a.jsxs)(n.p,{children:["If you have more than one bean with the same type, and you want to inject bean specifically from an ",(0,a.jsx)(n.code,{children:"Embedded"})," bean,\nyou should specify the correct name for the dependency."]}),"\n",(0,a.jsx)(n.p,{children:"In the embedded beans name will be defined as a class property name + property\nname from an embedded object with a first letter capitalized."}),"\n",(0,a.jsx)(n.p,{children:"Let's look at the example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface IEmbedded {\n  stringBean: string;\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean\n  @Embedded\n  embeddedBean: IEmbedded = { stringBean: 'embeddedStringBean' };\n\n  stringBean = 'stringBeanValue';\n\n  @PostConstruct\n  postConstruct(\n    stringBean: string, // <- stringBean will be injected here\n    embeddedBeanStringBean: string // <- embeddedBean.stringBean will be injected here\n  ) {}\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var a=t(512);const r={tabItem:"tabItem_Ymn6"};var o=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),r=t(512),o=t(2466),l=t(6550),s=t(469),i=t(1980),d=t(7392),c=t(12);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=b(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[d,u]=p({queryString:t,groupId:r}),[f,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=d??f;return m({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var h=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=s[t].value;r!==a&&(d(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function w(e){const n=(0,h.Z)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var a=t(7294);const r={},o=a.createContext(r);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);