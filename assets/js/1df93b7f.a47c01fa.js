"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4583],{1517:(e,n,t)=>{t.d(n,{n:()=>z});var o=t(6540),s=t(2303),i=t(4164),a=t(6058),r=t(7559),c=t(4291);const l={codeBlockContainer:"codeBlockContainer_Wo3_"};var d=t(4848);function u(e){let{as:n,...t}=e;const o=(0,a.A)(),s=(0,c.M$)(o);return(0,d.jsx)(n,{...t,style:s,className:(0,i.A)(t.className,l.codeBlockContainer,r.G.common.codeBlock)})}const p={codeBlockContent:"codeBlockContent_JcxH",codeBlockTitle:"codeBlockTitle_A_pv",codeBlock:"codeBlock_jBEb",codeBlockStandalone:"codeBlockStandalone_oFue",codeBlockLines:"codeBlockLines_dZHr",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_E43j",buttonGroup:"buttonGroup_EpKh"};function g(e){let{children:n,className:t}=e;return(0,d.jsx)(u,{as:"pre",tabIndex:0,className:(0,i.A)(p.codeBlockStandalone,"thin-scrollbar",t),children:(0,d.jsx)("code",{className:p.codeBlockLines,children:n})})}var m=t(6342),h=t(6591),y=t(1765);const b={codeDiagnosticsPopover:"codeDiagnosticsPopover_oSLf",codeDiagnosticsLink:"codeDiagnosticsLink_s3Vj",codeLine:"codeLine_Wk4M",codeLineNumber:"codeLineNumber_AMH6",codeLineContent:"codeLineContent_BWLK"};var x=t(1774),j=t(1962),f=t(1223),v=t(6538);function N(e,n){return e.map(((e,t)=>(0,d.jsx)("span",{...n({token:e,key:t})},t)))}let k=BigInt(0);function B(){return(k++).toString()}function w(e,n){if(e instanceof Text)return e.textContent;if(!(e instanceof Element))return null;let t;const o=e.getAttributeNames().reduce(((o,s)=>{const i=e.getAttribute(s);return"data-codeblock-diagnostic-message"===s?t=n[Number(i)]:"class"===s?o.className=i:"style"===s?o.style=i.split(";").reduce(((e,n)=>{const[t,o]=n.split(":");return t&&o&&(e[t.replace(/-([a-z])/g,(e=>e[1].toUpperCase())).trim()]=o.trim()),e}),{}):o[s]=i,o}),{}),s=e.tagName.toLowerCase(),a=Array.from(e.childNodes).map((e=>w(e,n)));if(!t)return(0,d.jsx)(s,{...o,children:a},B());const r=(0,d.jsx)(s,{...o,className:(0,i.A)(o.className,t.highlightedRangeClassName),children:a},B());return t.message?(0,d.jsx)(j.A,{trigger:"hover",placement:"right",arrow:!1,overlayClassName:b.codeDiagnosticsPopover,content:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("div",{className:"row",children:t.message}),t.relatedDiagnostics.map(((e,n)=>(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("a",{className:b.codeDiagnosticsLink,children:e.link}),(0,d.jsx)(f.A,{}),":",e.highlightedPrefix&&(0,d.jsx)(v.A.Text,{code:!0,children:e.highlightedPrefix}),(0,d.jsx)(v.A.Text,{children:e.message})]},n)))]}),children:r},B()):r}const C=(e,n)=>{const t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);let o=0,s=t.nextNode();for(;s;){const e=s.textContent?.length||0;if(o+e>=n)return{node:s,offset:n-o};o+=e,s=t.nextNode()}return{node:null,offset:0}};function R(e){const{line:n,classNames:t,showLineNumbers:s,getLineProps:a,getTokenProps:r,lineDiagnostics:c}=e,l=o.useRef(null);1===n.length&&"\n"===n[0].content&&(n[0].content="");const u=a({line:n,className:(0,i.A)(t,s&&b.codeLine)}),[p,g]=o.useState(N(n,r)),m=o.useCallback((()=>{if(0===c.length)return;const e=l.current;if(!e)return;const n=[];c.forEach(((t,o)=>{const s=e.cloneNode(!0),i=C(s,t.start),a=C(s,t.start+t.width);if(i.node&&a.node){const e=new Range;e.setStart(i.node,i.offset),e.setEnd(a.node,a.offset);const t=document.createElement("span"),r=document.createAttribute("data-codeblock-diagnostic-message");r.value=o.toString(),t.attributes.setNamedItem(r),t.appendChild(e.extractContents()),e.insertNode(t),n.push(w(s,c))}})),g(n)}),[c]),[h,y,j]=(0,x.A)(m,50);return(0,o.useEffect)((()=>{l.current&&(y(),g(N(n,r)),j())}),[...Object.values(e),j,y]),(0,d.jsxs)("span",{...u,children:[s?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:b.codeLineNumber}),(0,d.jsx)("span",{ref:l,className:(0,i.A)(b.codeLineContent,"line-with-tokens"),children:p})]}):(0,d.jsx)("span",{ref:l,className:"line-with-tokens",children:p}),(0,d.jsx)("br",{})]})}var I=t(6861),A=t(1312),S=t(1473),T=t(4115);const L={copyButtonCopied:"copyButtonCopied_DyYs",copyButtonIcons:"copyButtonIcons_ZVRJ",copyButtonIcon:"copyButtonIcon_sMZz",copyButtonSuccessIcon:"copyButtonSuccessIcon_gbd2"};function D(e){let{code:n,className:t}=e;const[s,a]=(0,o.useState)(!1),r=(0,o.useRef)(void 0),c=(0,o.useCallback)((()=>{(0,I.A)(n),a(!0),r.current=window.setTimeout((()=>{a(!1)}),1e3)}),[n]);return(0,o.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,d.jsx)("button",{type:"button","aria-label":s?(0,A.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.A)("clean-btn",t,L.copyButton,s&&L.copyButtonCopied),onClick:c,children:(0,d.jsxs)("span",{className:L.copyButtonIcons,"aria-hidden":"true",children:[(0,d.jsx)(S.A,{className:L.copyButtonIcon}),(0,d.jsx)(T.A,{className:L.copyButtonSuccessIcon})]})})}var _=t(5048);const E={wordWrapButtonIcon:"wordWrapButtonIcon_k68c",wordWrapButtonEnabled:"wordWrapButtonEnabled_P92L"};function P(e){let{className:n,onClick:t,isEnabled:o}=e;const s=(0,A.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,d.jsx)("button",{type:"button",onClick:t,className:(0,i.A)("clean-btn",n,o&&E.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,d.jsx)(_.A,{className:E.wordWrapButtonIcon,"aria-hidden":"true"})})}function W(e){let{children:n,className:t="",metastring:o,title:s,showLineNumbers:r,language:l,diagnostics:g=[]}=e;const{prism:{defaultLanguage:b,magicComments:x}}=(0,m.p)(),j=function(e){return e?.toLowerCase()}(l??(0,c.Op)(t)??b),f=(0,a.A)(),v=(0,h.f)(),N=(0,c.wt)(o)||s,{lineClassNames:k,code:B}=(0,c.Li)(n,{metastring:o,language:j,magicComments:x}),w=r??(0,c._u)(o);return(0,d.jsxs)(u,{as:"div",className:(0,i.A)(t,j&&!t.includes(`language-${j}`)&&`language-${j}`),children:[N&&(0,d.jsx)("div",{className:p.codeBlockTitle,children:N}),(0,d.jsxs)("div",{className:p.codeBlockContent,children:[(0,d.jsx)(y.f4,{theme:f,code:B,language:j??"text",children:e=>{let{className:n,style:t,tokens:o,getLineProps:s,getTokenProps:a}=e;return(0,d.jsx)("pre",{tabIndex:0,ref:v.codeBlockRef,className:(0,i.A)(n,p.codeBlock,"thin-scrollbar"),style:t,children:(0,d.jsx)("code",{className:(0,i.A)(p.codeBlockLines,w&&p.codeBlockLinesWithNumbering),children:o.map(((e,n)=>(0,d.jsx)(R,{line:e,getLineProps:s,getTokenProps:a,classNames:k[n],showLineNumbers:w,lineDiagnostics:g.filter((e=>e.line===n+1))},n)))})})}}),(0,d.jsxs)("div",{className:p.buttonGroup,children:[(v.isEnabled||v.isCodeScrollable)&&(0,d.jsx)(P,{className:p.codeButton,onClick:()=>v.toggle(),isEnabled:v.isEnabled}),(0,d.jsx)(D,{className:p.codeButton,code:B})]})]})]})}var F=t(8478);function z(e){let{children:n,...t}=e;const i=(0,s.A)(),a=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),r="string"==typeof a?W:g;return(0,d.jsx)(F.A,{children:()=>(0,d.jsx)(r,{...t,children:a},String(i))})}},3279:(e,n,t)=>{t.d(n,{jK:()=>D,Gl:()=>w,RB:()=>C});var o=t(6942),s=t.n(o);const i="heroContainer_i2aB",a="contentContainer_C6d5",r="heroTitle_qg2I",c="textGradient_DJVw",l="heroSubtitle_jFu1",d="typeAnimation_Rfre",u="logoContainer_xdaK",p="logoBackground_Xngs",g="logo_Ukns";var m=t(9519),h=t(8774),y=(t(6540),t(1865)),b=t(9522),x=t(5293),j=t(4284),f=t(1517),v=t(4848);const N=["Declarative","Intuitive","External","Lightweight","Adaptive","Easy-to-use","Resourceful","Far-sighted","Well-prepared","Sagacious","Innovative","Purr-fect","Paw-some","Feline grace"].map((e=>[e,4e3])).flat(),k="\ninterface IRepository<T> { /*...*/ }\nclass RepositoryImpl<T> implements IRepository<T> { /*...*/ }\nclass PrimitivesService {\n  constructor(\n    private stringRepository: IRepository<string>,\n    private numberRepository: IRepository<number>,\n    private booleanRepository: IRepository<boolean>,\n  ) {}\n}\n\n@ClawjectApplication\nclass Application {\n  stringRepository = Bean(RepositoryImpl<string>);\n  numberRepository = Bean(RepositoryImpl<number>);\n  booleanRepository = Bean(RepositoryImpl<boolean>);\n  primitivesService = Bean(PrimitivesService);\n}\n".trim(),B="\ninterface IRepository<T> { /*...*/ }\n@Injectable()\nclass RepositoryImpl<T> implements IRepository<T> { /*...*/ }\nconst InjectionTokens = {\n  StringRepository: Symbol('StringRepository'),\n  NumberRepository: Symbol('NumberRepository'),\n  BooleanRepository: Symbol('BooleanRepository'),\n}\n\n@Injectable()\nclass PrimitivesService {\n  constructor(\n    @Inject(InjectionTokens.StringRepository)\n    private stringRepository: IRepository<string>,\n    @Inject(InjectionTokens.NumberRepository)\n    private numberRepository: IRepository<number>,\n    @Inject(InjectionTokens.BooleanRepository)\n    private booleanRepository: IRepository<boolean>,\n  ) {}\n}\n\n@Module({\n  providers: [\n    PrimitivesService,\n    {\n      provide: InjectionTokens.StringRepository,\n      useClass: RepositoryImpl,\n    },\n    {\n      provide: InjectionTokens.NumberRepository,\n      useClass: RepositoryImpl,\n    },\n    {\n      provide: InjectionTokens.BooleanRepository,\n      useClass: RepositoryImpl,\n    },\n  ],\n})\nclass Application {}\n".trim(),w="\nclass Foo {\n  constructor(baz: Baz, someString: string) {}\n}\nclass Bar {\n  constructor(private quux: Quux) {}\n}\nclass Baz {\n  constructor(private bar: Bar) {}\n}\nclass Quux {\n  constructor(private baz: Baz) {}\n}\n\n@ClawjectApplication\nclass Application {\n  @Bean string1 = 'string1';\n  @Bean string2 = 'string2';\n\n  foo = Bean(Foo);\n  bar = Bean(Bar);\n  baz = Bean(Baz);\n  quux = Bean(Quux);\n\n  @Bean\n  beanThatReturnsVoid(): void {}\n}\n".trim(),C=[{line:2,start:24,width:18,highlightedRangeClassName:"textDecorationError",message:"CE5: Could not qualify bean candidate. Found 2 injection candidates.",relatedDiagnostics:[{link:"main.ts(16,3)",highlightedPrefix:"string1",message:"matched by type."},{link:"main.ts(17,3)",highlightedPrefix:"string2",message:"matched by type."},{link:"main.ts(19,3)",highlightedPrefix:"foo",message:"is declared here."},{link:"main.ts(15,7)",highlightedPrefix:"Application",message:"is declared here."}]},{line:19,start:2,width:16,highlightedRangeClassName:"textDecorationError",message:"CE4: Can not register Bean.",relatedDiagnostics:[{link:"main.ts(2,25)",message:"Cannot find a Bean candidate for 'someString'."},{link:"main.ts(15,7)",highlightedPrefix:"Application",message:"is declared here."}]},{line:21,start:2,width:16,highlightedRangeClassName:"textDecorationError",message:"CE7: Circular dependencies detected. baz \u2192 bar \u2192 quux \u2192 baz",relatedDiagnostics:[{link:"main.ts(20,3)",highlightedPrefix:"bar",message:"is declared here."},{link:"main.ts(22,3)",highlightedPrefix:"quux",message:"is declared here."},{link:"main.ts(15,7)",highlightedPrefix:"Application",message:"is declared here."}]},{line:25,start:25,width:4,highlightedRangeClassName:"textDecorationError",message:"CE8: Incorrect type. Type 'void' not supported as a Bean type.",relatedDiagnostics:[{link:"main.ts(15,7)",highlightedPrefix:"Application",message:"is declared here."}]}],R="\n@Configuration\nclass PetsConfiguration {\n  catRepository = Bean(Repository<Cat>);\n  dogRepository = Bean(Repository<Dog>);\n  foxRepository = Bean(Repository<Fox>);\n\n  catService = Bean(Service<Cat>);\n  dogService = Bean(Service<Dog>);\n  foxService = Bean(Service<Fox>);\n\n  @External petService = Bean(PetService);\n}\n".trim(),I=[{line:1,start:0,width:14,highlightedRangeClassName:"textDecorationInfo",message:"Use @Configuration decorator to define single configuration",relatedDiagnostics:[]},{line:11,start:2,width:9,highlightedRangeClassName:"textDecorationInfo",message:"Specify visibility of beans outside of configuration class",relatedDiagnostics:[]}],A="\n@Injectable()\nclass PetService {\n  constructor(/* ... */) {}\n}\n\n@Configuration\nclass PetConfiguration {\n  petService = Bean(PetService);\n  /* ... */\n}\n".trim(),S=[{line:1,start:0,width:13,highlightedRangeClassName:"textDecorationLineThroughRed",relatedDiagnostics:[]}],T="\n@Injectable()\nclass CatService {\n  constructor(\n    @Inject(InjectionTokens.NotCatRepository)\n    private catRepository: Repository<Cat>\n  ) {}\n}\n".trim(),L=[{line:1,start:0,width:13,highlightedRangeClassName:"textDecorationLineThroughRed",relatedDiagnostics:[]},{line:4,start:4,width:41,message:"Oops, wrong injection token. Clawject will inject dependencies only by type, so type safety is guaranteed",highlightedRangeClassName:"textDecorationError",relatedDiagnostics:[]}],D=()=>{const{colorMode:e}=(0,x.G)();return(0,v.jsxs)(y.Ay,{theme:{algorithm:"dark"===e?b.A.darkAlgorithm:b.A.defaultAlgorithm,components:{Popover:{colorBgElevated:"var(--code-message-background)",borderRadiusLG:4}}},children:[(0,v.jsxs)("div",{className:s()("hero",i),children:[(0,v.jsxs)("div",{className:a,children:[(0,v.jsx)("h1",{className:s()("hero__title",r,c),children:"Clawject"}),(0,v.jsx)("p",{className:s()("hero__subtitle",l),children:"Full-stack, type-safe, declarative Dependency Injection framework for TypeScript"}),(0,v.jsx)(m.d,{preRenderFirstString:!0,sequence:N,speed:10,repeat:1/0,className:d}),(0,v.jsx)(h.A,{className:s()("button button--primary button--outline"),to:"/docs",children:"Get Started"})]}),(0,v.jsxs)("div",{className:s()(u,"margin-top--lg"),children:[(0,v.jsx)("div",{className:s()(p)}),(0,v.jsx)("img",{className:s()(g),src:"/img/logo.svg",alt:"Clawject"})]})]}),(0,v.jsxs)("div",{className:"container margin-top--lg",children:[(0,v.jsx)("div",{className:"row",children:(0,v.jsxs)("div",{className:"col",children:[(0,v.jsx)("h1",{className:s()(c),children:"Built for developers convenience"}),(0,v.jsxs)("p",{children:["Clawject designed to make dependency injection and inversion of control in TypeScript as effortless, clear and intuitive as possible.",(0,v.jsx)("br",{}),"It allows define class dependencies in a declarative way, without the need to use injection tokens or any other boilerplate, especially when it comes to interfaces and generics."]})]})}),(0,v.jsxs)("div",{className:"row",children:[(0,v.jsxs)("div",{className:"col col--6",children:[(0,v.jsx)(j.A,{showLineNumbers:!0,title:"Develop with Clawject",language:"ts",children:k}),(0,v.jsx)("p",{children:"It's not only about the amount of code you write, but also about the clarity and readability of your code. Imagine how much time Clawject can save you. All this time can be used for more important things, like playing with your cat \ud83d\udc08"})]}),(0,v.jsx)("div",{className:"col col--6",children:(0,v.jsx)(j.A,{showLineNumbers:!0,title:"Develop with other popular framework",language:"ts",children:B})})]}),(0,v.jsxs)("div",{className:"row margin-top--lg",children:[(0,v.jsxs)("div",{className:"col",children:[(0,v.jsx)("h2",{className:s()(c),children:"In-editor diagnostics support"}),(0,v.jsx)("p",{children:"With Clawject's language service plugin, you can get instant feedback about missing beans, incorrect types, circular dependencies and more. It will help you to catch errors early without running your application and make your development process more productive."})]}),(0,v.jsx)("div",{className:"col",children:(0,v.jsx)(f.n,{showLineNumbers:!0,language:"ts",diagnostics:C,children:w})})]}),(0,v.jsxs)("div",{className:"row margin-top--lg",children:[(0,v.jsxs)("div",{className:"col",children:[(0,v.jsx)("h2",{className:s()(c),children:"Split your code by features"}),(0,v.jsx)("p",{children:"Using @Configuration classes you can split your code by features. Encapsulate beans and expose only needed to the container. It will help you to keep your codebase clean and maintainable."})]}),(0,v.jsx)("div",{className:"col",children:(0,v.jsx)(f.n,{showLineNumbers:!0,language:"ts",diagnostics:I,children:R})})]}),(0,v.jsxs)("div",{className:"row margin-top--lg",children:[(0,v.jsxs)("div",{className:"col",children:[(0,v.jsx)("h2",{className:s()(c),children:"Externalize inversion of control"}),(0,v.jsx)("p",{children:"Forgot about tons of decorators on your business logic classes, with Clawject you can externalize inversion of control and keep your classes clean, readable and focused on business logic."})]}),(0,v.jsx)("div",{className:"col",children:(0,v.jsx)(f.n,{showLineNumbers:!0,language:"ts",diagnostics:S,children:A})})]}),(0,v.jsxs)("div",{className:"row margin-top--lg",children:[(0,v.jsxs)("div",{className:"col",children:[(0,v.jsx)("h2",{className:s()(c),children:"First class type safety"}),(0,v.jsx)("p",{children:"With Clawject - you will never have to worry about the injection tokens mismatch, type - is a source of truth. Stop defining complex factory providers just because you want to use interfaces or generics \u2013 Clawject will take care of it for you."})]}),(0,v.jsx)("div",{className:"col",children:(0,v.jsx)(f.n,{showLineNumbers:!0,language:"ts",diagnostics:L,children:T})})]})]})]})}},6866:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});t(6540);var o=t(1957),s=t(3279),i=t(4848);function a(){return(0,i.jsx)(o.A,{description:"TypeScript Dependency Injection Framework",children:(0,i.jsx)(s.jK,{})})}}}]);