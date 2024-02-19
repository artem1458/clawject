"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[611],{419:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var t=o(5893),r=o(1151);const c={title:"ScopeRegister",hide_title:!0},n=void 0,i={id:"fundamentals/scope-register",title:"ScopeRegister",description:"ScopeRegister",source:"@site/docs/fundamentals/scope-register.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/scope-register",permalink:"/docs/fundamentals/scope-register",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708365425,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{title:"ScopeRegister",hide_title:!0},sidebar:"docs",previous:{title:"@Scope",permalink:"/docs/fundamentals/scope"},next:{title:"Inject Arrays and Collections",permalink:"/docs/guides/injecting-collections"}},d={},a=[{value:"ScopeRegister",id:"scoperegister",level:2},{value:"Methods overview",id:"methods-overview",level:3},{value:"<code>.registerScope()</code>",id:"registerscope",level:4},{value:"<code>.unregisterScope()</code>",id:"unregisterscope",level:4},{value:"<code>.hasScope()</code>",id:"hasscope",level:4}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"scoperegister",children:"ScopeRegister"}),"\n",(0,t.jsx)(s.p,{children:"ScopeRegister serves as the main entry point for working with scopes.\nIt allows you to register custom scopes, deregister them and check if they are registered."}),"\n",(0,t.jsxs)(s.p,{children:["See ",(0,t.jsx)(s.a,{href:"/docs/fundamentals/scope",children:"@Scope"})," and ",(0,t.jsx)(s.a,{href:"/docs/guides/custom-scopes",children:"Custom Scopes"})," for more information."]}),"\n",(0,t.jsx)(s.h3,{id:"methods-overview",children:"Methods overview"}),"\n",(0,t.jsx)(s.h4,{id:"registerscope",children:(0,t.jsx)(s.code,{children:".registerScope()"})}),"\n",(0,t.jsxs)(s.p,{children:["This method allows you to register a new ",(0,t.jsx)(s.a,{href:"/docs/guides/custom-scopes",children:"Custom Scope"})," and ",(0,t.jsx)(s.a,{href:"/docs/fundamentals/scope",children:"use it"})," for beans."]}),"\n",(0,t.jsxs)(s.p,{children:["Throws ",(0,t.jsx)(s.a,{href:"/docs/errors#duplicatescopeerror",children:"DuplicateScopeError"})," if the scope is already registered."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"import { CustomScope, ScopeRegister } from '@clawject/di';\n\nclass MyScope implements CustomScope { /* ... */ }\n\nScopeRegister.registerScope('my-scope', MyScope);\n"})}),"\n",(0,t.jsx)(s.h4,{id:"unregisterscope",children:(0,t.jsx)(s.code,{children:".unregisterScope()"})}),"\n",(0,t.jsxs)(s.p,{children:["This method allows you to unregister scope by name.\nReturns ",(0,t.jsx)(s.code,{children:"true"})," if scope by given name existed and has been removed, or ",(0,t.jsx)(s.code,{children:"false"})," if the scope does not exist."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"import { ScopeRegister } from '@clawject/di';\n\nconst hasBeenRegistered = ScopeRegister.unregisterScope('my-scope');\n"})}),"\n",(0,t.jsx)(s.h4,{id:"hasscope",children:(0,t.jsx)(s.code,{children:".hasScope()"})}),"\n",(0,t.jsxs)(s.p,{children:["Check whether the scope with the given name is registered.\nReturns ",(0,t.jsx)(s.code,{children:"true"})," if scope by given name exists, or ",(0,t.jsx)(s.code,{children:"false"})," if the scope does not exist."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"import { ScopeRegister } from '@clawject/di';\n\nconst hasScope = ScopeRegister.hasScope('my-scope');\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>i,a:()=>n});var t=o(7294);const r={},c=t.createContext(r);function n(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);