"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2022],{7500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"guides/sharing-configurations","title":"Sharing configurations","description":"Sharing configurations","source":"@site/docs/guides/sharing-configurations.mdx","sourceDirName":"guides","slug":"/guides/sharing-configurations","permalink":"/docs/guides/sharing-configurations","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1732618809000,"frontMatter":{"title":"Sharing configurations","hide_title":true},"sidebar":"docs","previous":{"title":"Inject Arrays and Collections","permalink":"/docs/guides/injecting-collections"},"next":{"title":"Creating Scope","permalink":"/docs/guides/creating-scope"}}');var a=t(4848),i=t(8453);const s={title:"Sharing configurations",hide_title:!0},r=void 0,c={},d=[{value:"Sharing configurations",id:"sharing-configurations",level:2},{value:"Example",id:"example",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"sharing-configurations",children:"Sharing configurations"}),"\n",(0,a.jsx)(n.p,{children:"It can be quite handy to share configurations between different projects.\nThis can be done by creating a separate package that contains the configuration and then installing it in the projects that need it."}),"\n",(0,a.jsxs)(n.p,{children:["Clawject provides a way to share ",(0,a.jsx)(n.code,{children:"@Configuration"})," and ",(0,a.jsx)(n.code,{children:"@ClawjectApplication"})," classes between different projects by generating metadata field on a target class type declaration."]}),"\n",(0,a.jsxs)(n.p,{children:["To make this work, you should ",(0,a.jsx)(n.a,{href:"/docs/setup#tsconfigjson",children:(0,a.jsx)(n.strong,{children:"add metadata transformer"})})," to your compilation process."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["Let's say we have a ",(0,a.jsx)(n.code,{children:"FooConfiguration"})," class that you want to share between different projects:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="shared-package/foo-configuration.ts"',children:"import { Bean, Configuration } from '@clawject/di';\nimport { Foo } from './Foo';\n\n@Configuration\nexport class FooConfiguration {\n  foo = Bean(Foo);\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you have added the metadata transformer to your compilation process, compiled declaration file will contain a ",(0,a.jsx)(n.code,{children:"#_clawject_metadata"})," field on the ",(0,a.jsx)(n.code,{children:"FooConfiguration"})," class type declaration and a\n",(0,a.jsx)(n.code,{children:"ClawjectMetadata"})," namespaces that contains needed metadata for clawject to work with added to the ",(0,a.jsx)(n.code,{children:".d.ts"})," file."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"#_clawject_metadata"})," field is added only to the declaration file, and not exists in runtime. Typescript will not allow you to access it because it is a private field of class."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"ClawjectMetadata"})," namespace is added to the ",(0,a.jsx)(n.code,{children:".d.ts"})," file to provide needed metadata for clawject to work with, it contains only types and not accessible outside the ",(0,a.jsx)(n.code,{children:".d.ts"})," file."]}),"\n",(0,a.jsx)(n.li,{children:"You don't need to worry about names collision, Clawject will generate unique names."}),"\n"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="shared-package/dist/foo-configuration.d.ts"',children:'import { Foo } from \'./Foo\';\nexport declare class FooConfiguration {\n    foo: import("@clawject/di").BeanConstructorFactory<Foo, typeof Foo>;\n    #_clawject_metadata: ClawjectMetadata_1.FooConfiguration_1;\n}\n\ndeclare namespace ClawjectMetadata_1 {\n    export type FooConfiguration_1 = {\n        kind: 1;\n        version: 1;\n        external: null;\n        beans: [\n            {\n                kind: 2;\n                primary: false;\n                external: null;\n                qualifier: null;\n                nestedProperty: null;\n                classPropertyName: "foo";\n            }\n        ];\n        imports: [];\n    };\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Now you can install the ",(0,a.jsx)(n.code,{children:"shared-package"})," in your project and import the ",(0,a.jsx)(n.code,{children:"FooConfiguration"})," class into your ",(0,a.jsx)(n.code,{children:"@ClawjectApplication"})," class, and request ",(0,a.jsx)(n.code,{children:"Foo"})," bean that is defined in the ",(0,a.jsx)(n.code,{children:"FooConfiguration"})," class:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="app.ts"',children:"import { ClawjectApplication, Import, PostConstruct } from '@clawject/di';\nimport { Foo, FooConfiguration } from 'shared-package';\n\n@ClawjectApplication\nclass App {\n  fooConfiguration = Import(FooConfiguration);\n\n  @PostConstruct\n  /* Foo bean is injected here */\n  init(foo: Foo) {\n    /* ... */\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"That's it! Now you can share configurations between different projects."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);