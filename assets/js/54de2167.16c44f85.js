"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[971],{6892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"fundamentals/clawject-application-context","title":"ClawjectApplicationContext","description":"ClawjectApplicationContext","source":"@site/docs/fundamentals/clawject-application-context.mdx","sourceDirName":"fundamentals","slug":"/fundamentals/clawject-application-context","permalink":"/docs/fundamentals/clawject-application-context","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1730819800000,"frontMatter":{"title":"ClawjectApplicationContext","hide_title":true},"sidebar":"docs","previous":{"title":"ClawjectFactory","permalink":"/docs/fundamentals/clawject-factory"},"next":{"title":"Import","permalink":"/docs/fundamentals/import"}}');var a=t(4848),c=t(8453);const i={title:"ClawjectApplicationContext",hide_title:!0},s=void 0,l={},p=[{value:"ClawjectApplicationContext",id:"clawjectapplicationcontext",level:2},{value:"Usage",id:"usage",level:3},{value:"Methods overview",id:"methods-overview",level:3},{value:"<code>.getExposedBean(exposedBeanName: string)</code>",id:"getexposedbeanexposedbeanname-string",level:4},{value:"<code>.getExposedBeans()</code>",id:"getexposedbeans",level:4},{value:"<code>.destroy()</code>",id:"destroy",level:4}];function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"clawjectapplicationcontext",children:"ClawjectApplicationContext"}),"\n",(0,a.jsx)(n.p,{children:"ClawjectApplicationContext is an object that stores and manages configurations and beans of the application."}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["Let's define a simple application with a single bean and try to expose it using ",(0,a.jsx)(n.a,{href:"/docs/fundamentals/expose-beans",children:"ExposeBeans function"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { ClawjectApplication, ClawjectFactory, Bean, ExposeBeans } from '@clawject/di';\n\nclass Cat {\n  constructor(\n    public readonly id: string,\n  ) {}\n\n  public meow() {\n    console.log('Meow!');\n  }\n}\n\nclass CatRepository {\n  constructor(\n    //...\n  ) {}\n\n  findById(id: string): Cat {\n    // ...\n  }\n}\n\n@ClawjectApplication\nclass Application {\n  catRepository = Bean(CatRepository);\n\n  exposed = ExposeBeans<{ repository: CatRepository }>();\n}\n\nconst applicationContext = await ClawjectFactory.createApplicationContext(Application);\nconst repository = await applicationContext.getExposedBean('repository');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, we have defined a simple application with a single bean ",(0,a.jsx)(n.code,{children:"CatRepository"})," and exposed it using ",(0,a.jsx)(n.code,{children:"ExposeBeans"})," function.\nWe can then access the exposed bean using ",(0,a.jsx)(n.code,{children:"getExposedBean"})," method of the ",(0,a.jsx)(n.code,{children:"ClawjectApplicationContext"})," object."]}),"\n",(0,a.jsxs)(n.p,{children:["Also, we can get all exposed beans using ",(0,a.jsx)(n.code,{children:"getExposedBeans"})," method:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@ClawjectApplication\nclass Application {\n  catRepository = Bean(CatRepository);\n  catService = Bean(CatService);\n\n  exposed = ExposeBeans<{ repository: CatRepository, service: CatService }>();\n}\n\nconst applicationContext = await ClawjectFactory.createApplicationContext(Application);\nconst exposedBeans = await applicationContext.getExposedBeans();\n\nconsole.log(exposedBeans.repository);\nconsole.log(exposedBeans.service);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["After running this code, we will see the ",(0,a.jsx)(n.code,{children:"CatRepository"})," and ",(0,a.jsx)(n.code,{children:"CatService"})," objects in the console."]}),"\n",(0,a.jsxs)(n.p,{children:["Now let's define some initialization and destruction logic for our beans using\n",(0,a.jsx)(n.a,{href:"/docs/fundamentals/lifecycle#postconstruct",children:"@PostConstruct"})," and ",(0,a.jsx)(n.a,{href:"/docs/fundamentals/lifecycle#predestroy",children:"@PreDestroy"})," decorators:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"@ClawjectApplication\nclass Application {\n  dbConnection = Bean(DBConnection);\n\n  @PostConstruct\n  onInit(dbConnection: DBConnection) {\n    dbConnection.connect();\n    console.log('DBConnection initialized');\n  }\n\n  @PreDestroy\n  onDestroy(dbConnection: DBConnection) {\n    dbConnection.close();\n    console.log('DBConnection closed');\n  }\n}\n\nconst applicationContext = await ClawjectFactory.createApplicationContext(Application);\n// Will print 'DBConnection initialized'\n\nawait applicationContext.destroy();\n// Will print 'DBConnection closed'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"methods-overview",children:"Methods overview"}),"\n",(0,a.jsx)(n.h4,{id:"getexposedbeanexposedbeanname-string",children:(0,a.jsx)(n.code,{children:".getExposedBean(exposedBeanName: string)"})}),"\n",(0,a.jsx)(n.p,{children:"Returns the exposed bean instance by the given name."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Bean, ClawjectApplication, ClawjectFactory, ExposeBeans } from \"@clawject/di\";\n\ninterface Foo { value: 'foo' }\ninterface Bar { value: 'bar' }\n\n@ClawjectApplication\nclass Application {\n  @Bean foo: Foo = {value: 'foo'};\n  @Bean bar: Bar = {value: 'bar'};\n\n  exposed = ExposeBeans<{ exposedBean: Foo }>()\n}\n\nconst application = await ClawjectFactory.createApplicationContext(Application);\nconst exposedBean = await application.getExposedBean('exposedBean');\n\nconsole.log(exposedBean.value); // 'foo'\n"})}),"\n",(0,a.jsx)(n.h4,{id:"getexposedbeans",children:(0,a.jsx)(n.code,{children:".getExposedBeans()"})}),"\n",(0,a.jsx)(n.p,{children:"Returns all exposed beans."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Bean, ClawjectApplication, ClawjectFactory, ExposeBeans } from '@clawject/di';\n\ninterface Foo { value: 'foo' }\ninterface Bar { value: 'bar' }\n\n@ClawjectApplication\nclass Application {\n  @Bean foo: Foo = {value: 'foo'};\n  @Bean bar: Bar = {value: 'bar'};\n\n  exposed = ExposeBeans<{ exposedBean1: Foo, exposedBean2: Bar }>();\n}\n\nconst application = await ClawjectFactory.createApplicationContext(Application);\nconst exposedBeans = await application.getExposedBeans();\n\nconsole.log(exposedBeans); // { exposedBean1: { value: 'foo' }, exposedBean2: { value: 'bar' } }\n"})}),"\n",(0,a.jsx)(n.h4,{id:"destroy",children:(0,a.jsx)(n.code,{children:".destroy()"})}),"\n",(0,a.jsxs)(n.p,{children:["Destroys the application context and destroys all beans.\nFunctions annotated with ",(0,a.jsx)(n.code,{children:"@PreDestroy"})," will be called for all beans."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { Bean, ClawjectApplication, ClawjectFactory, PreDestroy } from '@clawject/di';\n\nclass Foo {\n  @PreDestroy\n  preDestroy() {\n    console.log('destroy foo');\n  }\n}\n\n@ClawjectApplication\nclass Application {\n  foo = Bean(Foo);\n\n  @PreDestroy\n  preDestroy() {\n    console.log('destroy application');\n  }\n}\n\nconst application = await ClawjectFactory.createApplicationContext(Application);\nawait application.destroy();\n// prints: 'destroy foo'\n// prints: 'destroy application'\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(6540);const a={},c=o.createContext(a);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);