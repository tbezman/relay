(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{323:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),l=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(h,o(o({ref:t},c),{},{components:n})):i.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(8),a=(n(0),n(323)),s={id:"persisted-queries",title:"Persisted Queries",original_id:"persisted-queries"},o={unversionedId:"persisted-queries",id:"version-v10.1.3/persisted-queries",isDocsHomePage:!1,title:"Persisted Queries",description:"The relay compiler supports persisted queries which is useful because:",source:"@site/versioned_docs/version-v10.1.3/Modern-PersistedQueries.md",slug:"/persisted-queries",permalink:"/docs/v10.1.3/persisted-queries",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.1.3/Modern-PersistedQueries.md",version:"v10.1.3",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1617639320,sidebar:"version-v10.1.3/docs",previous:{title:"GraphQL Server Specification",permalink:"/docs/v10.1.3/graphql-server-specification"},next:{title:"Type Emission",permalink:"/docs/v10.1.3/type-emission"}},p=[{value:"Usage on the client",id:"usage-on-the-client",children:[{value:"The <code>--persist-output</code> flag",id:"the---persist-output-flag",children:[]},{value:"Network layer changes",id:"network-layer-changes",children:[]}]},{value:"Executing Persisted Queries on the Server",id:"executing-persisted-queries-on-the-server",children:[{value:"Compile time push",id:"compile-time-push",children:[]},{value:"Run time push",id:"run-time-push",children:[]},{value:"Simple server example",id:"simple-server-example",children:[]}]},{value:"Using <code>--persist-output</code> and <code>--watch</code>",id:"using---persist-output-and---watch",children:[]}],c={toc:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The relay compiler supports persisted queries which is useful because:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"the client operation text becomes just an md5 hash which is usually shorter than the real\nquery string. This saves upload bytes from the client to the server.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"the server can now whitelist queries which improves security by restricting the operations\nthat can be executed by a client."))),Object(a.b)("h2",{id:"usage-on-the-client"},"Usage on the client"),Object(a.b)("h3",{id:"the---persist-output-flag"},"The ",Object(a.b)("inlineCode",{parentName:"h3"},"--persist-output")," flag"),Object(a.b)("p",null,"In your ",Object(a.b)("inlineCode",{parentName:"p"},"npm")," script in ",Object(a.b)("inlineCode",{parentName:"p"},"package.json"),", run the relay compiler using the ",Object(a.b)("inlineCode",{parentName:"p"},"--persist-output")," flag:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'\n"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-output ./path/to/persisted-queries.json"\n}\n\n')),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"--persist-ouput")," flag does 2 things:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"It converts all query and mutation operation texts to md5 hashes."),Object(a.b)("p",{parentName:"li"},"For example without ",Object(a.b)("inlineCode",{parentName:"p"},"--persist-output"),", a generated ",Object(a.b)("inlineCode",{parentName:"p"},"ConcreteRequest")," might look like below:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'\nconst node/*: ConcreteRequest*/ = (function(){\n//... excluded for brevity\nreturn {\n  "kind": "Request",\n  "operationKind": "query",\n  "name": "TodoItemRefetchQuery",\n  "id": null, // NOTE: id is null\n  "text": "query TodoItemRefetchQuery(\\n  $itemID: ID!\\n) {\\n  node(id: $itemID) {\\n    ...TodoItem_item_2FOrhs\\n  }\\n}\\n\\nfragment TodoItem_item_2FOrhs on Todo {\\n    text\\n    isComplete\\n}\\n",\n  //... excluded for brevity\n};\n})();\n\n')),Object(a.b)("p",{parentName:"li"},"With ",Object(a.b)("inlineCode",{parentName:"p"},"--persist-output <path>")," this becomes:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'\nconst node/*: ConcreteRequest*/ = (function(){\n//... excluded for brevity\nreturn {\n  "kind": "Request",\n  "operationKind": "query",\n  "name": "TodoItemRefetchQuery",\n  "id": "3be4abb81fa595e25eb725b2c6a87508", // NOTE: id is now an md5 hash of the query text\n  "text": null, // NOTE: text is null now\n  //... excluded for brevity\n};\n})();\n\n'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"It generates a JSON file at the ",Object(a.b)("inlineCode",{parentName:"p"},"<path>")," you specify containing a mapping from query ids\nto the corresponding operation texts."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'\n"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-output ./src/queryMaps/queryMap.json"\n}\n\n')),Object(a.b)("p",null,"The example above writes the complete query map file to ",Object(a.b)("inlineCode",{parentName:"p"},"./src/queryMaps/queryMap.json"),". You need to ensure all the directories\nleading to the ",Object(a.b)("inlineCode",{parentName:"p"},"queryMap.json")," file exist."),Object(a.b)("h3",{id:"network-layer-changes"},"Network layer changes"),Object(a.b)("p",null,"You'll need to modify your network layer fetch implementation to pass a documentId parameter in the POST body instead of a query parameter:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\nfunction fetchQuery(operation, variables,) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      documentId: operation.id, // NOTE: pass md5 hash to the server\n      // query: operation.text, // this is now obsolete because text is null\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n\n")),Object(a.b)("h2",{id:"executing-persisted-queries-on-the-server"},"Executing Persisted Queries on the Server"),Object(a.b)("p",null,"To execute client requests that send persisted queries instead of query text, your server will need to be able\nto lookup the query text corresponding to each id. Typically this will involve saving the output of the ",Object(a.b)("inlineCode",{parentName:"p"},"--persist-output <path>")," JSON file to a database or some other storage mechanism, and retrieving the corresponding text for the ID specified by a client."),Object(a.b)("p",null,"For universal applications where the client and server code are in one project, this is not an issue since you can place\nthe query map file in a common location accessible to both the client and the server."),Object(a.b)("h3",{id:"compile-time-push"},"Compile time push"),Object(a.b)("p",null,"For applications where the client and server projects are separate, one option is to have an additional npm run script\nto push the query map at compile time to a location accessible by your server:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'\n"scripts": {\n  "push-queries": "node ./pushQueries.js",\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --persist-ouput <path> && npm run push-queries"\n}\n\n')),Object(a.b)("p",null,"Some possibilities of what you can do in ",Object(a.b)("inlineCode",{parentName:"p"},"./pushQueries.js"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"git push")," to your server repo")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"save the query maps to a database"))),Object(a.b)("h3",{id:"run-time-push"},"Run time push"),Object(a.b)("p",null,"A second more complex option is to push your query maps to the server at runtime, without the server knowing the query ids at the start.\nThe client optimistically sends a query id to the server, which does not have the query map. The server then in turn requests\nfor the full query text from the client so it can cache the query map for subsequent requests. This is a more complex approach\nrequiring the client and server to interact to exchange the query maps."),Object(a.b)("h3",{id:"simple-server-example"},"Simple server example"),Object(a.b)("p",null,"Once your server has access to the query map, you can perform the mapping. The solution varies depending on the server and\ndatabase technologies you use, so we'll just cover the most common and basic example here."),Object(a.b)("p",null,"If you use ",Object(a.b)("inlineCode",{parentName:"p"},"express-graphql")," and have access to the query map file, you can import the ",Object(a.b)("inlineCode",{parentName:"p"},"--persist-output")," JSON file directly and\nperform the matching using the ",Object(a.b)("inlineCode",{parentName:"p"},"matchQueryMiddleware")," from ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/yusinto/relay-compiler-plus"}),"relay-compiler-plus"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\nimport Express from 'express';\nimport expressGraphql from 'express-graphql';\nimport {matchQueryMiddleware} from 'relay-compiler-plus';\nimport queryMapJson from './path/to/persisted-queries.json';\n\nconst app = Express();\n\napp.use('/graphql',\n  matchQueryMiddleware(queryMapJson),\n  expressGraphql({schema}));\n\n")),Object(a.b)("h2",{id:"using---persist-output-and---watch"},"Using ",Object(a.b)("inlineCode",{parentName:"h2"},"--persist-output")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"--watch")),Object(a.b)("p",null,"It is possible to continuously generate the query map files by using the ",Object(a.b)("inlineCode",{parentName:"p"},"--persist-output")," and ",Object(a.b)("inlineCode",{parentName:"p"},"--watch")," options simultaneously.\nThis only makes sense for universal applications i.e. if your client and server code are in a single project\nand you run them both together on localhost during development. Furthermore, in order for the server to pick up changes\nto the ",Object(a.b)("inlineCode",{parentName:"p"},"queryMap.json"),", you'll need to have server side hot-reloading set up. The details on how to set this up\nis out of the scope of this document."))}l.isMDXComponent=!0}}]);