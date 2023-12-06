"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[133],{3271:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(5893),o=r(1151);const s={title:"Errors",description:"Compile-time and runtime errors."},a=void 0,i={id:"errors",title:"Errors",description:"Compile-time and runtime errors.",source:"@site/docs/errors.mdx",sourceDirName:".",slug:"/errors",permalink:"/docs/errors",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1701879584,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{title:"Errors",description:"Compile-time and runtime errors."},sidebar:"docs",previous:{title:"Custom Scopes",permalink:"/docs/advanced-concepts/custom-scopes"}},c={},l=[{value:"Compile-time errors",id:"compile-time-errors",level:2},{value:"CT1: IncorrectNameError",id:"ct1-incorrectnameerror",level:3},{value:"CT2: DuplicateDecoratorError",id:"ct2-duplicatedecoratorerror",level:3},{value:"CT3: TypeQualifyError",id:"ct3-typequalifyerror",level:3},{value:"CT4: CanNotRegisterBeanError",id:"ct4-cannotregisterbeanerror",level:3},{value:"CT5: BeanCandidateNotFoundError",id:"ct5-beancandidatenotfounderror",level:3},{value:"CT6: MissingInitializerError",id:"ct6-missinginitializererror",level:3},{value:"CT7: CircularDependenciesError",id:"ct7-circulardependencieserror",level:3},{value:"CT8: IncorrectTypeError",id:"ct8-incorrecttypeerror",level:3},{value:"CT9: IncorrectArgumentsLengthError",id:"ct9-incorrectargumentslengtherror",level:3},{value:"CT10: DependencyResolvingError",id:"ct10-dependencyresolvingerror",level:3},{value:"CT11: NotSupportedError",id:"ct11-notsupportederror",level:3},{value:"CT12: MissingBeansDeclarationError",id:"ct12-missingbeansdeclarationerror",level:3},{value:"CT13: TypeMismatchError",id:"ct13-typemismatcherror",level:3},{value:"CT14: DuplicateNameError",id:"ct14-duplicatenameerror",level:3},{value:"CT15: NotStaticallyKnownError",id:"ct15-notstaticallyknownerror",level:3},{value:"Runtime errors",id:"runtime-errors",level:2},{value:"NoInitializedContextFoundError",id:"noinitializedcontextfounderror",level:3},{value:"BeanNotFoundError",id:"beannotfounderror",level:3},{value:"ClassNotInheritorOfCatContextError",id:"classnotinheritorofcatcontexterror",level:3},{value:"UsageWithoutConfiguredDIError",id:"usagewithoutconfigureddierror",level:3},{value:"IllegalAccessError",id:"illegalaccesserror",level:3},{value:"DuplicateScopeError",id:"duplicatescopeerror",level:3},{value:"ScopeIsNotRegisteredError",id:"scopeisnotregisterederror",level:3},{value:"PrimitiveCouldNotBeWrappedInProxyError",id:"primitivecouldnotbewrappedinproxyerror",level:3},{value:"NoContextMemberFactoryFoundError",id:"nocontextmemberfactoryfounderror",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Clawject produces few types of errors compile-time and runtime."}),"\n",(0,t.jsx)(n.h2,{id:"compile-time-errors",children:"Compile-time errors"}),"\n",(0,t.jsxs)(n.p,{children:["Each compile time error has own code that can be used to identify it.\nEach code is unique and consists of prefix ",(0,t.jsx)(n.code,{children:"CT"})," and number.\nExample: ",(0,t.jsx)(n.code,{children:"CT7"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"ct1-incorrectnameerror",children:"CT1: IncorrectNameError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when the name of the element is not met some requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The name is empty"}),"\n",(0,t.jsxs)(n.li,{children:["The name of class member name is reserved by Clawject.\nReserved names are:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"clawject_compile_time_metadata"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Rename the element."]}),"\n",(0,t.jsx)(n.h3,{id:"ct2-duplicatedecoratorerror",children:"CT2: DuplicateDecoratorError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when the element has more than one same decorator.\nExample:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean\n  @Bean\n  cat = new Cat();\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Remove extra decorators."]}),"\n",(0,t.jsx)(n.h3,{id:"ct3-typequalifyerror",children:"CT3: TypeQualifyError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when Clawject can't qualify a type of element or return type of method or function."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Specify the type of element explicitly."]}),"\n",(0,t.jsx)(n.h3,{id:"ct4-cannotregisterbeanerror",children:"CT4: CanNotRegisterBeanError"}),"\n",(0,t.jsxs)(n.p,{children:["It occurs when the element can't be registered as a bean because some of the bean dependencies could not be resolved.\nThis error appears directly on bean declaration in ",(0,t.jsx)(n.code,{children:"CatContext"})," classes."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Define missing dependencies in the context."}),"\n",(0,t.jsxs)(n.li,{children:["Check a topic about ",(0,t.jsx)(n.a,{href:"/docs/api/bean#how-dependencies-are-resolved",children:"how dependencies are resolved"})]}),"\n",(0,t.jsx)(n.li,{children:"If more than one matching dependency is defined - rename parameter to match one of the resolved dependencies by name."}),"\n",(0,t.jsxs)(n.li,{children:["Specify primary bean for the dependency with ",(0,t.jsx)(n.a,{href:"/docs/api/primary",children:(0,t.jsx)(n.code,{children:"@Primary"})})," decorator."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ct5-beancandidatenotfounderror",children:"CT5: BeanCandidateNotFoundError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when the bean candidate for the specific dependency could not be resolved."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When declaring bean with ",(0,t.jsx)(n.a,{href:"/docs/api/bean#bean-decorator",children:"@Bean decorator"})," - error will\nappear on the corresponding parameter of the ",(0,t.jsx)(n.strong,{children:"factory-function"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["When declaring bean with ",(0,t.jsx)(n.a,{href:"/docs/api/bean#bean-function",children:"Bean function"})," - error will\nappear on the corresponding parameter of the ",(0,t.jsx)(n.strong,{children:"class constructor"}),".\nAlso - if you have more than one matching candidate for injection - Clawject will notify you which candidate is matching by name and type."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Define missing dependencies in the context."}),"\n",(0,t.jsxs)(n.li,{children:["Check a topic about ",(0,t.jsx)(n.a,{href:"/docs/api/bean#how-dependencies-are-resolved",children:"how dependencies are resolved"})]}),"\n",(0,t.jsx)(n.li,{children:"If more than one matching dependency is defined - rename parameter to match one of the resolved dependencies by name."}),"\n",(0,t.jsxs)(n.li,{children:["Specify primary bean for the dependency with ",(0,t.jsx)(n.a,{href:"/docs/api/primary",children:(0,t.jsx)(n.code,{children:"@Primary"})})," decorator."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ct6-missinginitializererror",children:"CT6: MissingInitializerError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when a property or method that is registered as a bean or lifecycle hook does not have an initializer.\nExample:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean cat: Cat;\n  @PostConstruct postConstruct(): void;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Add initializer to the property or method."]}),"\n",(0,t.jsx)(n.h3,{id:"ct7-circulardependencieserror",children:"CT7: CircularDependenciesError"}),"\n",(0,t.jsxs)(n.p,{children:["It occurs when some beans have circular dependencies between each other.\nA circular dependency occurs when a bean A depends on another bean B, and the bean B depends on bean A as well:",(0,t.jsx)("br",{}),"\nBean A \u2192 Bean B \u2192 Bean A"]}),"\n",(0,t.jsxs)(n.p,{children:["Of course, we could have more beans implied:",(0,t.jsx)("br",{}),"\nBean A \u2192 Bean B \u2192 Bean C \u2192 Bean D \u2192 Bean E \u2192 Bean A"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class A {\n  constructor(b: B) {}\n}\nclass B {\n  constructor(a: A) {}\n}\nclass MyContext extends CatContext {\n  //Error here\n  @Bean A(b: B): A {\n    return new A(b);\n  }\n  @Bean B(a: A): B {\n    return new B(a);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Clawject will detect circular dependencies at compile-time and report this error in a readable way."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Redesign. When we have a circular dependency, it\u2019s likely we have a design problem and that the responsibilities are not well separated.\nWe should try to redesign the components properly so that their hierarchy is well-designed, and there is no need for circular dependencies."}),"\n",(0,t.jsxs)(n.li,{children:["If we can\u2019t redesign the components, we can assign the instance after creation.\nIt's not the best way, but it works.\nNote that field ",(0,t.jsx)(n.code,{children:"b"})," in ",(0,t.jsx)(n.code,{children:"A"})," will be available only after the creation of the bean ",(0,t.jsx)(n.code,{children:"B"}),".\nExample:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class A {\n  declare public b: B;\n}\nclass B {\n  constructor(a: A) {}\n}\nclass MyContext extends CatContext {\n  @Bean A(): A {\n    return new A();\n  }\n  @Bean B(a: A): B {\n    const instance = new B(a);\n    a.b = instance;\n\n    return instance;\n  }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ct8-incorrecttypeerror",children:"CT8: IncorrectTypeError"}),"\n",(0,t.jsxs)(n.p,{children:["It occurs when the type of the bean is not supported by Clawject, here defined restricted ",(0,t.jsx)(n.a,{href:"/docs/api/bean#bean-types",children:"Bean types"}),". Example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Bean stringOrNumber(): string | number {\n    return 'Masya';\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Use only supported types or wrap an unsupported type in the object. Example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Value<T> {\n  constructor(public value: T) {}\n}\nclass MyContext extends CatContext {\n  @Bean stringOrNumber(): Value<string | number> {\n    return new Value('Masya');\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"ct9-incorrectargumentslengtherror",children:"CT9: IncorrectArgumentsLengthError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when required arguments count not match requirements. Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Qualifier() cat = Bean(Cat)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example - ",(0,t.jsx)(n.code,{children:"@Qualifier"})," decorator requires exactly one argument to be passed, but it was not provided, so Clawject will report error."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Pass required arguments count."]}),"\n",(0,t.jsx)(n.h3,{id:"ct10-dependencyresolvingerror",children:"CT10: DependencyResolvingError"}),"\n",(0,t.jsxs)(n.p,{children:["It occurs when the dependencies of class constructor could not be resolved. This error occurs only when using ",(0,t.jsx)(n.a,{href:"/docs/api/bean#bean-function",children:"Bean function"}),". Examples:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Didn't pass class to the ",(0,t.jsx)(n.strong,{children:"Bean function"}),":","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  cat = Bean();\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["More than one or no class declaration found, ",(0,t.jsx)(n.code,{children:"Dog"})," class is declared, but ",(0,t.jsx)(n.code,{children:"Cat"})," is not:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Dog {}\nclass MyContext extends CatContext {\n  cat = Bean(Cat);\n  dog = Bean(Dog);\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Use ",(0,t.jsx)(n.strong,{children:"factory-method"})," with ",(0,t.jsx)(n.a,{href:"/docs/api/bean#bean-decorator",children:"@Bean decorator"}),"\ninstead of ",(0,t.jsx)(n.strong,{children:"Bean function"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"ct11-notsupportederror",children:"CT11: NotSupportedError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when some feature is not supported by Clawject. Example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.code,{children:"@PostConstruct"})," decorator on method with arguments outside CatContext class:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Cat {\n  @PostConstruct\n  meow(data: any): void {}\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Using ",(0,t.jsx)(n.code,{children:"@Embedded"})," decorator with bean declared with ",(0,t.jsx)(n.a,{href:"/docs/api/bean#bean-function",children:"Bean function"}),":","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Embedded cat = Bean(Cat);\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Unsupported class members modifiers:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  static cat1 = Bean(Cat);\n  abstract cat2 = Bean(Cat);\n  private cat3 = Bean(Cat);\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Using decorators in inappropriate places, for example ",(0,t.jsx)(n.code,{children:"@Bean"})," decorator in not CatContext class:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class Dog {}\nclass Cat {\n  @Bean\n  dog(): Dog {}\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Inappropriate decorators combination:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"@Bean @Embedded\nclass MyContext extends CatContext {\n  @Bean @PostConstruct cat = Bean(Cat);\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Inappropriate decorator target:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"@Bean\nclass MyContext extends CatContext {}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Do not use unsupported features."]}),"\n",(0,t.jsx)(n.h3,{id:"ct12-missingbeansdeclarationerror",children:"CT12: MissingBeansDeclarationError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when the context does not have required beans that are declared in CatContext interface. Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface IMyContext {\n  cat: Cat;\n  dog: Dog;\n}\nclass MyContext extends CatContext<IMyContext> {\n  cat = Bean(Cat);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Declare missing beans in the context."]}),"\n",(0,t.jsx)(n.h3,{id:"ct13-typemismatcherror",children:"CT13: TypeMismatchError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when the type of Bean is not compatible with a type declared in CatContext interface. Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface IMyContext {\n  cat: Dog;\n}\nclass MyContext extends CatContext<IMyContext> {\n  cat = Bean(Cat);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Change the type of Bean to match the type declared in CatContext interface or vice versa."]}),"\n",(0,t.jsx)(n.h3,{id:"ct14-duplicatenameerror",children:"CT14: DuplicateNameError"}),"\n",(0,t.jsxs)(n.p,{children:["It occurs when few beans have the same name (class member name or name defined via ",(0,t.jsx)(n.a,{href:"/docs/api/qualifier",children:(0,t.jsx)(n.code,{children:"@Qualifier decorator"})}),"). Example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  cat = Bean(Cat);\n  @Qualifier('cat') dog = Bean(Dog);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Change the name of one of the beans."]}),"\n",(0,t.jsx)(n.h3,{id:"ct15-notstaticallyknownerror",children:"CT15: NotStaticallyKnownError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when value or name in some part of code is not statically known. Example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The name of element is computed or uniq Symbol:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const BeanName = 'MasyaCat';\nconst UniqSymbol = Symbol.for('MasyaCat');\nclass MyContext extends CatContext {\n  ['Masya' + 'Cat'] = Bean(Cat);\n  [BeanName] = Bean(Cat);\n  [UniqSymbol] = Bean(Cat);\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Arguments on some decorators are computed:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Qualifier('Masya' + 'Cat') cat = Bean(Cat);\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Use only statically known values and names when it's required."]}),"\n",(0,t.jsx)(n.h2,{id:"runtime-errors",children:"Runtime errors"}),"\n",(0,t.jsxs)(n.p,{children:["Runtime errors are regular JavaScript errors that can be thrown during the application execution.\nClawject exporting Error classes that can be caught and handled in the application code.\nEach error has ",(0,t.jsx)(n.code,{children:"name"})," property, so it can be identified via name or via ",(0,t.jsx)(n.code,{children:"instanceof"})," operator."]}),"\n",(0,t.jsx)(n.h3,{id:"noinitializedcontextfounderror",children:"NoInitializedContextFoundError"}),"\n",(0,t.jsxs)(n.p,{children:["It occurs when the context is not initialized, and you're trying\nto get ",(0,t.jsx)(n.a,{href:"/docs/api/initialized-context",children:(0,t.jsx)(n.code,{children:"InitializedContext"})})," object\nfrom ",(0,t.jsx)(n.a,{href:"/docs/api/container-manager",children:(0,t.jsx)(n.code,{children:"ContainerManager"})}),".\nExample:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {}\nContainerManager.get(MyContext);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Initialize the context before getting it from the container manager."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"NoInitializedContextFoundError"})," object contains ",(0,t.jsx)(n.code,{children:"contextKey"})," property."]})}),"\n",(0,t.jsx)(n.h3,{id:"beannotfounderror",children:"BeanNotFoundError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when the bean that is requested is not found in the context.\nThis error should not appear if everything is configured correctly.\nExample:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface IMyContext {\n  cat: Cat;\n}\nclass MyContext extends CatContext<IMyContext> {\n  cat = Bean(Cat);\n}\nconst initializedContext = ContainerManager.init(MyContext);\n\ninitializedContext.getBean('dog');\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Define missing bean in the context."]}),"\n",(0,t.jsx)(n.h3,{id:"classnotinheritorofcatcontexterror",children:"ClassNotInheritorOfCatContextError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when you're trying to initialize the context that is not inherited from CatContext. Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext {}\nContainerManager.init(MyContext);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Inherit context from CatContext."]}),"\n",(0,t.jsx)(n.h3,{id:"usagewithoutconfigureddierror",children:"UsageWithoutConfiguredDIError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when you're trying to use Clawject without proper configuration,\nfor example - you're forgotten to add Clawject transformer to the tsconfig.json file."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Configure Clawject properly."]}),"\n",(0,t.jsx)(n.h3,{id:"illegalaccesserror",children:"IllegalAccessError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when you're trying to access some internal clawject property or method not allowed to be accessed."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Do not access internal clawject properties and methods."]}),"\n",(0,t.jsx)(n.h3,{id:"duplicatescopeerror",children:"DuplicateScopeError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when you're trying to register the scope that is already registered. Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyCustomScope implements CustomScope {\n  //...\n}\nContainerManager.registerScope('myCustomScope', new MyCustomScope());\nContainerManager.registerScope('myCustomScope', new MyCustomScope());\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Register only one scope with the same name."]}),"\n",(0,t.jsx)(n.h3,{id:"scopeisnotregisterederror",children:"ScopeIsNotRegisteredError"}),"\n",(0,t.jsx)(n.p,{children:"It occurs when you're trying to assign non-registered scope to the bean. Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyContext extends CatContext {\n  @Scope('MySuperScopeThatIsNotRegistered') cat = Bean(Cat);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Register scope before using it."]}),"\n",(0,t.jsx)(n.h3,{id:"primitivecouldnotbewrappedinproxyerror",children:"PrimitiveCouldNotBeWrappedInProxyError"}),"\n",(0,t.jsxs)(n.p,{children:["It occurs when your scope implementation defines ",(0,t.jsx)(n.code,{children:"useProxy"})," method that is returned ",(0,t.jsx)(n.code,{children:"true"}),", and bean that is returned primitive value\nwas decorated with this scope.\nJavaScript does not allow wrapping primitive values in proxy, so this error will be thrown. Example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"class MyCustomScope implements CustomScope {\n  useProxy(): boolean {\n    return true;\n  }\n  //...\n}\nclass MyContext extends CatContext {\n  @Bean @Scope('MyCustomScope') cat = 'Masya';\n}\nContainerManager.registerScope('MyCustomScope', new MyCustomScope());\nContainerManager.init(MyContext);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Do not return primitive values from beans that are using scope that defines that object should be proxied."]}),"\n",(0,t.jsx)(n.h3,{id:"nocontextmemberfactoryfounderror",children:"NoContextMemberFactoryFoundError"}),"\n",(0,t.jsx)(n.p,{children:"It can occur if you edited generated file and removed some context member factory."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Solution:"})," Do edit generated files, regenerate file."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(7294);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);