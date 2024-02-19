"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5893],{6214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(5893),a=t(1151);const o={title:"Configurations",hide_title:!0,tags:["@Configuration","@ClawjectApplication"]},s=void 0,r={id:"fundamentals/configurations",title:"Configurations",description:"Configurations",source:"@site/docs/fundamentals/configurations.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/configurations",permalink:"/docs/fundamentals/configurations",draft:!1,unlisted:!1,tags:[{label:"@Configuration",permalink:"/docs/tags/configuration"},{label:"@ClawjectApplication",permalink:"/docs/tags/clawject-application"}],version:"current",lastUpdatedAt:1708365425,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{title:"Configurations",hide_title:!0,tags:["@Configuration","@ClawjectApplication"]},sidebar:"docs",previous:{title:"Clawject Type System",permalink:"/docs/core-concepts/type-system"},next:{title:"ClawjectFactory",permalink:"/docs/fundamentals/clawject-factory"}},c={},l=[{value:"Configurations",id:"configurations",level:2},{value:"Configuration class abilities",id:"configuration-class-abilities",level:3},{value:"Features configuration",id:"features-configuration",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"configurations",children:"Configurations"}),"\n",(0,i.jsxs)(n.p,{children:["Configuration is a class that is annotated with ",(0,i.jsx)(n.code,{children:"@Configuration"})," or ",(0,i.jsx)(n.code,{children:"@ClawjectApplication"}),".\nThese decorators provide metadata to the container to process the configuration class and generate the corresponding metadata."]}),"\n",(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:t(7339).Z,style:{maxHeight:"450px"},alt:"Example banner"})}),"\n",(0,i.jsxs)(n.p,{children:["Each application has at least one configuration, a class that is annotated with ",(0,i.jsx)(n.code,{children:"@ClawjectApplication"}),".\nThe root configuration class is the entry point ",(0,i.jsx)(n.strong,{children:"Clawject"})," uses to resolve\n",(0,i.jsx)(n.a,{href:"/docs/fundamentals/bean#bean-dependencies",children:"beans and its dependencies"}),",\n",(0,i.jsx)(n.a,{href:"/docs/fundamentals/import",children:"imported configurations"}),"\nand ",(0,i.jsx)(n.a,{href:"/docs/fundamentals/expose-beans",children:"exposed beans"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Each application can have as many configurations as needed, and each configuration can import other configurations.\nAll the ",(0,i.jsx)(n.strong,{children:"configurations are singletons"})," in the context of the application."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Configuration classes allow encapsulating specific beans, or vice versa,\nto expose beans and configuration imports to the container using ",(0,i.jsx)(n.a,{href:"/docs/fundamentals/internal-external",children:"@Internal and @External"})," decorators."]})}),"\n",(0,i.jsx)(n.h3,{id:"configuration-class-abilities",children:"Configuration class abilities"}),"\n",(0,i.jsxs)(n.p,{children:["Each class that is annotated with ",(0,i.jsx)(n.code,{children:"@Configuration"})," or ",(0,i.jsx)(n.code,{children:"@ClawjectApplication"})," is a configuration class."]}),"\n",(0,i.jsx)(n.p,{children:"Configuration classes allow you to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fundamentals/bean",children:"Define beans"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fundamentals/import",children:"Import configurations"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fundamentals/lifecycle",children:"Define lifecycle methods"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/fundamentals/internal-external",children:"Export beans and re-export configuration imports to the container"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"features-configuration",children:"Features configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"PetRepository"}),", ",(0,i.jsx)(n.code,{children:"CatService"})," and ",(0,i.jsx)(n.code,{children:"DogService"})," belong to the same feature.\nCat and Dog services are both using PetRepository to acquire the data.\nAs they are part of one domain, it makes sense to define beans for them in a single feature-specific configuration class."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="pet-configuration.ts"',children:"import { Bean, Configuration } from '@clawject/di';\nimport { CatService } from './cat-service';\nimport { DogService } from './dog-service';\nimport { PetRepository } from './pet-repository';\n\n@Configuration\nexport class PetConfiguration {\n  catService = Bean(CatService);\n  dogService = Bean(DogService);\n  petRepository = Bean(PetRepository);\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Above, we defined the ",(0,i.jsx)(n.code,{children:"PetConfiguration"})," in the ",(0,i.jsx)(n.code,{children:"pet-configuration.ts"})," file.\nThe last thing we need to do is import this configuration into the root application class."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="application.ts"',children:"import { ClawjectApplication, Import } from '@clawject/di';\nimport { PetConfiguration } from './pet-configuration';\n\n@ClawjectApplication\nexport class Application {\n  petConfiguration = Import(PetConfiguration);\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7339:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/docs-config-tree-e0c4596aab81adc411f70e06e0a55c4f.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);