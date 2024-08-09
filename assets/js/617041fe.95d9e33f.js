"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2199],{8524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=t(4848),a=t(8453),l=t(7669);const s={title:"Setup \ud83d\udee0",hide_title:!0,tags:["setup","ts-patch","webpack","vite","rollup","tsc"]},i=void 0,o={id:"setup",title:"Setup \ud83d\udee0",description:"Prerequisites",source:"@site/docs/setup.mdx",sourceDirName:".",slug:"/setup",permalink:"/docs/setup",draft:!1,unlisted:!1,tags:[{inline:!0,label:"setup",permalink:"/docs/tags/setup"},{inline:!0,label:"ts-patch",permalink:"/docs/tags/ts-patch"},{inline:!0,label:"webpack",permalink:"/docs/tags/webpack"},{inline:!0,label:"vite",permalink:"/docs/tags/vite"},{inline:!0,label:"rollup",permalink:"/docs/tags/rollup"},{inline:!0,label:"tsc",permalink:"/docs/tags/tsc"}],version:"current",lastUpdatedAt:1723222999e3,frontMatter:{title:"Setup \ud83d\udee0",hide_title:!0,tags:["setup","ts-patch","webpack","vite","rollup","tsc"]},sidebar:"docs",previous:{title:"Introduction \ud83d\ude80",permalink:"/docs/"},next:{title:"Language Service \u2728",permalink:"/docs/language-service"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Clawject unplugin (<em>recommended way</em>)",id:"clawject-unplugin-recommended-way",level:3},{value:"tsc and ts-patch",id:"tsc-and-ts-patch",level:3},{value:"Bundler with typescript loader",id:"bundler-with-typescript-loader",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Node.js version 18 or above"}),"\n",(0,r.jsx)(n.li,{children:"TypeScript version 5.0 \u2013 5.5"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,r.jsx)(l.w,{libraries:["@clawject/di"],dev:!1}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Remember to ",(0,r.jsx)(n.a,{href:"./language-service",children:"install language service plugin"})," to get support for ",(0,r.jsx)(n.strong,{children:"Clawject"})," features right in your code editor!"]})}),"\n",(0,r.jsxs)(n.h3,{id:"clawject-unplugin-recommended-way",children:["Clawject unplugin (",(0,r.jsx)(n.em,{children:"recommended way"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["Clawject provides unplugins for various bundlers (all bundlers that are supported by ",(0,r.jsx)(n.a,{href:"https://unplugin.unjs.io/",children:"unplugin"}),"):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://vitejs.dev/",children:"Vite"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://rollupjs.org/",children:"Rollup"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://webpack.js.org/",children:"webpack"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://esbuild.github.io/",children:"esbuild"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://rspack.dev/",children:"Rspack"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://rolldown.rs/",children:"Rolldown"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.farmfe.org/",children:"Farm"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can import unplugin in the following ways:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import ClawjectUnplugin from '@clawject/di/unplugin';\n\nexport default defineConfig({\n  plugins: [ClawjectUnplugin.vite()]\n})\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import ClawjectUnplugin from '@clawject/di/unplugin/${bundler_name}';\n\nexport default defineConfig({\n  plugins: [ClawjectUnplugin.bundler_name()]\n})\n"})}),"\n",(0,r.jsx)(n.h3,{id:"tsc-and-ts-patch",children:"tsc and ts-patch"}),"\n",(0,r.jsx)(n.p,{children:"It's possible to use clawject as a typescript compiler plugin.\nTo do so, you need to add transformers in your tsconfig.json."}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"ts-patch patches typescript to allow custom transformers (plugins) during build."})}),(0,r.jsxs)(n.p,{children:["It allows you to use ",(0,r.jsx)(n.strong,{children:"Clawject"})," with any build tool that uses ",(0,r.jsx)(n.strong,{children:"typescript"})," compiler."]}),(0,r.jsxs)(n.p,{children:["For detailed ts-patch configuration guide - please refer to ",(0,r.jsx)(n.a,{href:"https://github.com/nonara/ts-patch#readme",children:"ts-patch documentation"}),"."]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "plugins": [\n      { "transform": "@clawject/di/transformer" },\n      {\n        "transform": "@clawject/di/transformer/metadata",\n        "afterDeclarations": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"@clawject/di/transformer/metadata"})," is optional, it's used to generate metadata for your configuration classes which allows you to share configuration via npm packages.\nVisit ",(0,r.jsx)(n.a,{href:"./guides/sharing-configurations",children:(0,r.jsx)(n.strong,{children:"sharing configurations"})})," section to learn more about it."]})}),"\n",(0,r.jsx)(n.h3,{id:"bundler-with-typescript-loader",children:"Bundler with typescript loader"}),"\n",(0,r.jsxs)(n.p,{children:["If you are using a bundler with a typescript loader, e.g. ",(0,r.jsx)(n.code,{children:"webpack"})," and ",(0,r.jsx)(n.code,{children:"ts-loader"})," you can use the following configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="webpack.config.js"',children:"import { ClawjectTransformer } from '@clawject/di/transformer';\nimport { ClawjectMetadataTransformer } from '@clawject/di/transformer/metadata';\nimport ClawjectUnplugin from '@clawject/di/unplugin/webpack';\n\nexport default {\n  module: {\n    rules: [{\n      test: /\\.ts$/,\n      loader: 'ts-loader',\n      options: {\n        compiler: 'ts-patch/compiler',\n        // or if you're not using ts-patch\n        getCustomTransformers: (program, getProgram) => ({\n          before: [ClawjectTransformer(getProgram)],\n          afterDeclarations: [ClawjectMetadataTransformer(getProgram)]\n        })\n      }\n    }]\n  },\n  plugins: [\n    ClawjectUnplugin({ skipCompilation: true })\n  ]\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var l=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(6540),a=t(4164),l=t(3104),s=t(6347),i=t(205),o=t(7485),c=t(1682),u=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),j=(()=>{const e=c??f;return h({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(w,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(n))}},7669:(e,n,t)=>{t.d(n,{w:()=>i});t(6540);var r=t(1470),a=t(9365),l=t(4284),s=t(4848);const i=e=>{let{libraries:n,dev:t}=e;const i=n.join(" "),o=[{label:"npm",command:`npm install ${i}${t?" --save-dev":""}`},{label:"yarn",command:`yarn add ${i}${t?" --dev":""}`}];return(0,s.jsx)(r.A,{children:o.map((e=>{let{label:n,command:t}=e;return(0,s.jsx)(a.A,{value:n,label:n,children:(0,s.jsx)(l.A,{language:"bash",children:t})},n)}))})}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);