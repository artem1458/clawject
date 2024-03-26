"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6105],{5554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(5893),i=t(1151);const a={title:"Sharing configurations",hide_title:!0},r=void 0,s={id:"guides/sharing-configurations",title:"Sharing configurations",description:"Sharing configurations",source:"@site/docs/guides/sharing-configurations.mdx",sourceDirName:"guides",slug:"/guides/sharing-configurations",permalink:"/docs/guides/sharing-configurations",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1711449541,formattedLastUpdatedAt:"Mar 26, 2024",frontMatter:{title:"Sharing configurations",hide_title:!0},sidebar:"docs",previous:{title:"Inject Arrays and Collections",permalink:"/docs/guides/injecting-collections"},next:{title:"Custom Scopes",permalink:"/docs/guides/creating-scope"}},c={},d=[{value:"Sharing configurations",id:"sharing-configurations",level:2},{value:"Example",id:"example",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"sharing-configurations",children:"Sharing configurations"}),"\n",(0,o.jsx)(n.p,{children:"It can be quite handy to share configurations between different projects.\nThis can be done by creating a separate package that contains the configuration and then installing it in the projects that need it."}),"\n",(0,o.jsxs)(n.p,{children:["Clawject provides a way to share ",(0,o.jsx)(n.code,{children:"@Configuration"})," and ",(0,o.jsx)(n.code,{children:"@ClawjectApplication"})," classes between different projects by generating metadata field on a target class type declaration."]}),"\n",(0,o.jsxs)(n.p,{children:["To make this work, you should ",(0,o.jsx)(n.a,{href:"/docs/setup#tsconfigjson",children:(0,o.jsx)(n.strong,{children:"add metadata transformer"})})," to your compilation process."]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["Let's say we have a ",(0,o.jsx)(n.code,{children:"FooConfiguration"})," class that you want to share between different projects:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="shared-package/foo-configuration.ts"',children:"import { Bean, Configuration } from '@clawject/di';\nimport { Foo } from './foo';\n\n@Configuration\nexport class FooConfiguration {\n  foo = Bean(Foo);\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you have added the metadata transformer to your compilation process, compiled declaration file will contain a metadata field on the ",(0,o.jsx)(n.code,{children:"FooConfiguration"})," class type declaration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="shared-package/dist/foo-configuration.d.ts"',children:'export declare class FooConfiguration {\n    foo: import("@clawject/di").BeanConstructorFactory<Foo, typeof Foo>;\n    /** This field is auto-generated, editing it could lead to unexpected behavior.*/\n    #___clawject_compile_time_metadata___: {\n        kind: 1;\n        version: 1;\n        external: null;\n        beans: [\n            {\n                kind: 2;\n                primary: false;\n                external: null;\n                qualifier: null;\n                nestedProperty: null;\n                classPropertyName: "foo";\n            }\n        ];\n        imports: [];\n    };\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now you can install the ",(0,o.jsx)(n.code,{children:"shared-package"})," in your project and import the ",(0,o.jsx)(n.code,{children:"FooConfiguration"})," class into your ",(0,o.jsx)(n.code,{children:"@ClawjectApplication"})," class, and request ",(0,o.jsx)(n.code,{children:"Foo"})," bean that is defined in the ",(0,o.jsx)(n.code,{children:"FooConfiguration"})," class:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="app.ts"',children:"import { ClawjectApplication, Import, PostConstruct } from '@clawject/di';\nimport { Foo, FooConfiguration } from 'shared-package';\n\n@ClawjectApplication\nclass App {\n  fooConfiguration = Import(FooConfiguration);\n\n  @PostConstruct\n  /* Foo bean is injected here */\n  init(foo: Foo) {\n    /* ... */\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"That's it! Now you can share configurations between different projects."})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var o=t(7294);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);