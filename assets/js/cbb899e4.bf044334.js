"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[196],{8282:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var t=i(5893),s=i(1151);const l={title:"Configuration \ud83d\udd2e",hide_title:!0,tags:["setup","configuration","typescript","type-checking","type-system","nominal","structural","duck","bean","import"]},r=void 0,c={id:"configuration",title:"Configuration \ud83d\udd2e",description:"Configuration \ud83d\udd2e",source:"@site/docs/configuration.mdx",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,unlisted:!1,tags:[{label:"setup",permalink:"/docs/tags/setup"},{label:"configuration",permalink:"/docs/tags/configuration"},{label:"typescript",permalink:"/docs/tags/typescript"},{label:"type-checking",permalink:"/docs/tags/type-checking"},{label:"type-system",permalink:"/docs/tags/type-system"},{label:"nominal",permalink:"/docs/tags/nominal"},{label:"structural",permalink:"/docs/tags/structural"},{label:"duck",permalink:"/docs/tags/duck"},{label:"bean",permalink:"/docs/tags/bean"},{label:"import",permalink:"/docs/tags/import"}],version:"current",lastUpdatedAt:1708288919,formattedLastUpdatedAt:"Feb 18, 2024",frontMatter:{title:"Configuration \ud83d\udd2e",hide_title:!0,tags:["setup","configuration","typescript","type-checking","type-system","nominal","structural","duck","bean","import"]},sidebar:"docs",previous:{title:"Language Service \u2728",permalink:"/docs/language-service"},next:{title:"IoC and DI",permalink:"/docs/core-concepts/ioc-di-basics"}},a={},o=[{value:"Configuration \ud83d\udd2e",id:"configuration-",level:2},{value:"Configuration schema",id:"configuration-schema",level:3},{value:"<code>unsafeTSVersion</code>",id:"unsafetsversion",level:3},{value:"<code>typeSystem</code>",id:"typesystem",level:3},{value:"<code>beans.defaultExternal</code>",id:"beansdefaultexternal",level:3},{value:"<code>imports.defaultExternal</code>",id:"importsdefaultexternal",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"configuration-",children:"Configuration \ud83d\udd2e"}),"\n",(0,t.jsxs)(n.p,{children:["Clawject using ",(0,t.jsx)(n.a,{href:"https://github.com/cosmiconfig/cosmiconfig",children:"cosmiconfig"})," to load configuration from different sources.\nExample file names are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:".clawjectrc"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:".clawjectrc.json"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:".clawjectrc.js"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:".clawjectrc.ts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:".config/clawjectrc"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:".config/clawjectrc.json"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:".config/clawjectrc.js"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:".config/clawjectrc.ts"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"clawject.config.js"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"clawject.config.ts"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"package.json"})," with a ",(0,t.jsx)(n.code,{children:"clawject"})," property"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["If you're using ",(0,t.jsx)(n.code,{children:"@clawject/language-service"})," - you may need to restart typescript language service after editing configuration file."]})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-schema",children:"Configuration schema"}),"\n",(0,t.jsx)(n.p,{children:"Configuration schema is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface ClawjectConfig {\n  unsafeTSVersion?: boolean; // Default: false\n  typeSystem?: 'nominal' | 'structural'; // Default: 'nominal'\n  beans?: {\n    defaultExternal?: boolean; // Default: true\n  },\n  imports?: {\n    defaultExternal?: boolean; // Default: true\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"unsafetsversion",children:(0,t.jsx)(n.code,{children:"unsafeTSVersion"})}),"\n",(0,t.jsx)(n.p,{children:"Allows using TypeScript version not officially supported by this version of Clawject."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"true"})}),", Clawject will not check your TypeScript version."]}),"\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"false"})}),", Clawject will check your TypeScript version to ensure it's officially compatible with the versions supported by Clawject."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default value"})," is ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"typesystem",children:(0,t.jsx)(n.code,{children:"typeSystem"})}),"\n",(0,t.jsxs)(n.p,{children:["Allows choosing between ",(0,t.jsx)(n.code,{children:"nominal"})," and ",(0,t.jsx)(n.code,{children:"structural"})," type system."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"nominal"})}),", Clawject will use a nominal type system to distinguish between beans and imports."]}),"\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"structural"})}),", Clawject will use a structural type system (default for typescript) to distinguish between beans and imports."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default value"})," is ",(0,t.jsx)(n.code,{children:"nominal"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Read more about ",(0,t.jsx)(n.a,{href:"/docs/core-concepts/type-system",children:"nominal and structural type systems"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"beansdefaultexternal",children:(0,t.jsx)(n.code,{children:"beans.defaultExternal"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"true"})}),", all beans are considered external, if not explicitly marked as internal."]}),"\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"false"})}),", all beans are considered internal, if not explicitly marked as external."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default value"})," is ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["//TODO add tag related to beans\nRead more about ",(0,t.jsx)(n.a,{href:"/docs/overview/internal-external#beans",children:"@Internal and @External"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"importsdefaultexternal",children:(0,t.jsx)(n.code,{children:"imports.defaultExternal"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"true"})}),", all imported configurations are considered external, if not explicitly marked as internal."]}),"\n",(0,t.jsxs)(n.li,{children:["When ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"false"})}),", all imported configurations are considered internal, if not explicitly marked as external."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Default value"})," is ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["//TODO add tag related to configurations\nRead more about ",(0,t.jsx)(n.a,{href:"/docs/overview/internal-external#configuration",children:"@Internal and @External"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(7294);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);