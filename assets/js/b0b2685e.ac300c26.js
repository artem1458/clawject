"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57],{8908:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"fundamentals/clawject-factory","title":"ClawjectFactory","description":"ClawjectFactory","source":"@site/docs/fundamentals/clawject-factory.mdx","sourceDirName":"fundamentals","slug":"/fundamentals/clawject-factory","permalink":"/docs/fundamentals/clawject-factory","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1730819800000,"frontMatter":{"title":"ClawjectFactory","hide_title":true},"sidebar":"docs","previous":{"title":"Configurations","permalink":"/docs/fundamentals/configurations"},"next":{"title":"ClawjectApplicationContext","permalink":"/docs/fundamentals/clawject-application-context"}}');var c=a(4848),o=a(8453);const s={title:"ClawjectFactory",hide_title:!0},i=void 0,r={},l=[{value:"ClawjectFactory",id:"clawjectfactory",level:2},{value:"Creating a ClawjectApplicationContext",id:"creating-a-clawjectapplicationcontext",level:3}];function p(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...t.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"clawjectfactory",children:"ClawjectFactory"}),"\n",(0,c.jsxs)(e.p,{children:["It's a factory class that creates a ",(0,c.jsx)(e.a,{href:"/docs/fundamentals/clawject-application-context",children:"ClawjectApplicationContext"})," instance."]}),"\n",(0,c.jsx)(e.h3,{id:"creating-a-clawjectapplicationcontext",children:"Creating a ClawjectApplicationContext"}),"\n",(0,c.jsxs)(e.p,{children:["To create a new ",(0,c.jsx)(e.code,{children:"ClawjectApplicationContext"})," instance, you need to pass the class that is the root class of your application.\nThis class is the class that contains the ",(0,c.jsx)(e.code,{children:"@ClawjectApplication"})," decorator."]}),"\n",(0,c.jsxs)(e.p,{children:["Method ",(0,c.jsx)(e.code,{children:"createApplicationContext"})," returns a promise that resolves to a newly created ",(0,c.jsx)(e.code,{children:"ClawjectApplicationContext"})," instance."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-typescript",children:"import { ClawjectFactory, ClawjectApplication } from '@clawject/di';\n\n@ClawjectApplication\nclass Application {\n  // ...\n}\n\nconst applicationContext = await ClawjectFactory.createApplicationContext(Application);\n"})}),"\n",(0,c.jsxs)(e.p,{children:["If application class contains constructor, you should pass the constructor arguments as the second parameter to ",(0,c.jsx)(e.code,{children:"createApplicationContext"}),".\nConstructor arguments can be either:"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"Array of constructor arguments"}),"\n",(0,c.jsx)(e.li,{children:"Function that returns an array of values"}),"\n",(0,c.jsx)(e.li,{children:"Function that returns a Promise that resolves to an array of values"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-typescript",children:"import { ClawjectFactory, ClawjectApplication } from '@clawject/di';\n\n@ClawjectApplication\nclass Application {\n  constructor(\n    private someConfigurationValue: string\n  ) {}\n}\n\n// Pass an array of values\nClawjectFactory.createApplicationContext(Application, ['some value']);\n// Pass a function that returns an array of values\nClawjectFactory.createApplicationContext(Application, () => ['some value'] as const);\n// Pass a function that returns a Promise that resolves to an array of values\nClawjectFactory.createApplicationContext(Application, async () => {\n  const configurationValue = await fetchValue('https://...');\n\n  return [configurationValue] as const;\n});\n"})})]})}function u(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,c.jsx)(e,{...t,children:(0,c.jsx)(p,{...t})}):p(t)}},8453:(t,e,a)=>{a.d(e,{R:()=>s,x:()=>i});var n=a(6540);const c={},o=n.createContext(c);function s(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:s(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);