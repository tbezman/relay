(window.webpackJsonp=window.webpackJsonp||[]).push([[940],{1016:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(1167)),o=n(1173),l=(n(1168),{id:"installation-and-setup",title:"Installation and Setup",slug:"/getting-started/installation-and-setup/"}),c={unversionedId:"getting-started/installation-and-setup",id:"version-11.0.0/getting-started/installation-and-setup",isDocsHomePage:!1,title:"Installation and Setup",description:"Installation",source:"@site/versioned_docs/version-11.0.0/getting-started/installation-and-setup.md",slug:"/getting-started/installation-and-setup/",permalink:"/docs/getting-started/installation-and-setup/",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-11.0.0/getting-started/installation-and-setup.md",version:"11.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1615305292,sidebar:"version-11.0.0/docs",previous:{title:"Prerequisites",permalink:"/docs/getting-started/prerequisites/"},next:{title:"Step-by-step Guide",permalink:"/docs/getting-started/step-by-step-guide/"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Set up Relay with a single config file",id:"set-up-relay-with-a-single-config-file",children:[]},{value:"Set up babel-plugin-relay",id:"set-up-babel-plugin-relay",children:[]},{value:"Set up relay-compiler",id:"set-up-relay-compiler",children:[]},{value:"JavaScript environment requirements",id:"javascript-environment-requirements",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Install React and Relay using ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add react react-dom react-relay\n")),Object(i.b)("h2",{id:"set-up-relay-with-a-single-config-file"},"Set up Relay with a single config file"),Object(i.b)("p",null,"The below configuration of ",Object(i.b)("inlineCode",{parentName:"p"},"babel-plugin-relay")," and ",Object(i.b)("inlineCode",{parentName:"p"},"relay-compiler")," can be applied using a single configuration file by\nusing the ",Object(i.b)("inlineCode",{parentName:"p"},"relay-config")," package. Besides unifying all Relay configuration in a single place, other tooling can leverage\nthis to provide zero-config setup (e.g. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relay-tools/vscode-apollo-relay"}),"vscode-apollo-relay"),")."),Object(i.b)("p",null,"Install the package:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev relay-config\n")),Object(i.b)("p",null,"And create the configuration file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// relay.config.js\nmodule.exports = {\n  // ...\n  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.\n  src: "./src",\n  schema: "./data/schema.graphql",\n  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],\n}\n')),Object(i.b)("h2",{id:"set-up-babel-plugin-relay"},"Set up babel-plugin-relay"),Object(i.b)("p",null,"Relay Modern requires a Babel plugin to convert GraphQL to runtime artifacts:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev babel-plugin-relay graphql\n")),Object(i.b)("p",null,"Add ",Object(i.b)("inlineCode",{parentName:"p"},'"relay"')," to the list of plugins your ",Object(i.b)("inlineCode",{parentName:"p"},".babelrc")," file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "plugins": [\n    "relay"\n  ]\n}\n')),Object(i.b)("p",null,"Please note that the ",Object(i.b)("inlineCode",{parentName:"p"},'"relay"')," plugin should run before other plugins or\npresets to ensure the ",Object(i.b)("inlineCode",{parentName:"p"},"graphql")," template literals are correctly transformed. See\nBabel's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/plugins/#pluginpreset-ordering"}),"documentation on this topic"),"."),Object(i.b)("p",null,"Alternatively, instead of using ",Object(i.b)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kentcdodds/babel-plugin-macros"}),"babel-plugin-macros"),". After installing ",Object(i.b)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const graphql = require('babel-plugin-relay/macro');\n")),Object(i.b)("p",null,"If you need to configure ",Object(i.b)("inlineCode",{parentName:"p"},"babel-plugin-relay")," further (e.g. to enable ",Object(i.b)("inlineCode",{parentName:"p"},"compat")," mode), you can do so by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kentcdodds/babel-plugin-macros/blob/master/other/docs/user.md#config-experimental"}),"specifying the options in a number of ways"),"."),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// babel-plugin-macros.config.js\nmodule.exports = {\n  // ...\n  // Other macros config\n  relay: {\n    compat: true,\n  },\n}\n")),Object(i.b)("h2",{id:"set-up-relay-compiler"},"Set up relay-compiler"),Object(i.b)("p",null,"Relay's ahead-of-time compilation requires the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../guides/compiler/"}),"Relay Compiler"),", which you can install via ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")," or ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev relay-compiler\n")),Object(i.b)("p",null,"This installs the bin script ",Object(i.b)("inlineCode",{parentName:"p"},"relay-compiler")," in your node_modules folder. It's recommended to run this from a ",Object(i.b)("inlineCode",{parentName:"p"},"yarn"),"/",Object(i.b)("inlineCode",{parentName:"p"},"npm")," script by adding a script to your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql"\n}\n')),Object(i.b)("p",null,"or if you are using jsx:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --extensions js jsx"\n}\n')),Object(i.b)("p",null,"Then, after making edits to your application files, just run the ",Object(i.b)("inlineCode",{parentName:"p"},"relay")," script to generate new compiled artifacts:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn run relay\n")),Object(i.b)("p",null,"Alternatively, you can pass the ",Object(i.b)("inlineCode",{parentName:"p"},"--watch")," option to watch for file changes in your source code and automatically re-generate the compiled artifacts (",Object(i.b)("strong",{parentName:"p"},"Note:")," Requires ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/watchman"}),"watchman")," to be installed):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn run relay --watch\n")),Object(i.b)("p",null,"For more details, check out our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../../guides/compiler/"}),"Relay Compiler docs"),"."),Object(i.b)("h2",{id:"javascript-environment-requirements"},"JavaScript environment requirements"),Object(i.b)("p",null,"The Relay Modern packages distributed on NPM use the widely-supported ES5\nversion of JavaScript to support as many browser environments as possible."),Object(i.b)("p",null,"However, Relay Modern expects modern JavaScript global types (",Object(i.b)("inlineCode",{parentName:"p"},"Map"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Set"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"Promise"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Object.assign"),") to be defined. If you support older browsers and\ndevices which may not yet provide these natively, consider including a global\npolyfill in your bundled application, such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zloirock/core-js"}),"core-js")," or\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/usage/polyfill/"}),"@babel/polyfill"),"."),Object(i.b)("p",null,"A polyfilled environment for Relay using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zloirock/core-js"}),"core-js")," to support older browsers\nmight look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\nrequire('core-js/es6/map');\nrequire('core-js/es6/set');\nrequire('core-js/es6/promise');\nrequire('core-js/es6/object');\n\nrequire('./myRelayApplication');\n\n")),Object(i.b)(o.a,{mdxType:"DocsRating"}))}p.isMDXComponent=!0},1167:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?r.a.createElement(f,l(l({ref:t},s),{},{components:n})):r.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1168:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=i(n(1171));const o=["internal","external"];let l;try{l=n(1169).usePluginData}catch(b){l=null}function c(e){return u(e),p()?"internal"in e?s(e.internal):[]:"external"in e?s(e.external):[]}function s(e){return"function"==typeof e?e():e}function u(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${o}. Instead got ${e}`);if(!Object.keys(e).find((e=>o.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${o}`);const t=Object.keys(e).filter((e=>!o.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${o}`)}function p(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}t.fbContent=c,t.fbInternalOnly=function(e){return c({internal:e})},t.validateFbContentArgs=u,t.isInternal=p,t.FbInternalOnly=function(e){return p()?e.children:null},t.OssOnly=function(e){return p()?null:e.children}}).call(this,n(1170))},1169:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(22);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},1170:function(e,t){var n,a,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var c,s=[],u=!1,p=-1;function b(){u&&c&&(u=!1,c.length?s=c.concat(s):p=-1,s.length&&d())}function d(){if(!u){var e=l(b);u=!0;for(var t=s.length;t;){for(c=s,s=[];++p<t;)c&&c[p].run();p=-1,t=s.length}c=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new f(e,t)),1!==s.length||u||l(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},1171:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function l(e){try{c(a.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(1172);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},1172:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{c(a.next(e))}catch(t){i(t)}}function l(e){try{c(a.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,i=0;const o={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in o||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?o[t].resolve(e.data.response):o[t].reject(new Error(e.data.error)),delete o[t]})));const t=i++,n=new Promise(((e,n)=>{o[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),n}))}},1173:function(e,t,n){"use strict";n(60);var a=n(1168),r=n(0);var i=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),"Thank you for letting us know!"):r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},o=function(){return null};t.a=function(){return Object(a.fbContent)({internal:r.createElement(o,null),external:r.createElement(i,null)})}}}]);