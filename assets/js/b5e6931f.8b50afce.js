"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[910],{3131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(5893),r=n(1151);n(4866),n(5162);const o={title:"@Primary"},i=void 0,l={id:"api/primary",title:"@Primary",description:"@Primary decorator exists to provide preference to a specific bean when there are multiple beans of the same type available.",source:"@site/docs/api/primary.mdx",sourceDirName:"api",slug:"/api/primary",permalink:"/docs/api/primary",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1700927656,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{title:"@Primary"},sidebar:"docs",previous:{title:"@Lazy",permalink:"/docs/api/lazy"},next:{title:"@Qualifier",permalink:"/docs/api/qualifier"}},s={},u=[{value:"Why Do We Need @Primary?",id:"why-do-we-need-primary",level:2},{value:"Use @Primary With @Bean",id:"use-primary-with-bean",level:2}];function c(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"@Primary decorator exists to provide preference to a specific bean when there are multiple beans of the same type available.\nLet's dig into this topic in more detail."}),"\n",(0,a.jsx)(t.h2,{id:"why-do-we-need-primary",children:"Why Do We Need @Primary?"}),"\n",(0,a.jsx)(t.p,{children:"There are situations when it's necessary to register more than one bean of the same type."}),"\n",(0,a.jsxs)(t.p,{children:["Take the following scenario, for example, where we have ",(0,a.jsx)(t.code,{children:"catAnimal"})," and ",(0,a.jsx)(t.code,{children:"dogAnimal"})," beans, both belonging to the ",(0,a.jsx)(t.code,{children:"Animal"})," type:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean\n  catAnimal = new Animal('meow');\n\n  @Bean\n  dogAnimal = new Animal('woof');\n\n  @PostConstruct\n  postConstruct(\n    animal: Animal // <-- Which bean will be injected here?\n  ) {\n    console.log(animal.sound);\n  }\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"In this case, if we attempt to compile application,\nClawject will report that 2 possible candidates found for animal parameter.\nNormally, we can set argument name same as bean name, but what if we just need some any bean of type Animal?\nTo overcome this problem, Clawject provides the @Primary decorator."}),"\n",(0,a.jsx)(t.h2,{id:"use-primary-with-bean",children:"Use @Primary With @Bean"}),"\n",(0,a.jsx)(t.p,{children:"The @Primary decorator can be used with @Bean to indicate that\na bean should be given preference when multiple beans of the same type are available."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean\n  @Primary\n  catAnimal = new Animal('meow');\n\n  @Bean\n  dogAnimal = new Animal('woof');\n\n  @PostConstruct\n  postConstruct(\n    animal: Animal // <-- catAnimal will be injected here\n  ) {\n    console.log(animal.sound);\n  }\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(6010);const r={tabItem:"tabItem_Ymn6"};var o=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(7294),r=n(6010),o=n(2466),i=n(6550),l=n(469),s=n(1980),u=n(7392),c=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=h({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=u??f;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function w(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),r=l[n].value;r!==a&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,v.jsx)(w,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function j(e){const t=(0,b.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(7294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);