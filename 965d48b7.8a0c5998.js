(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},730:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(1142)),i={id:"local-state-management",title:"Local State Management",original_id:"local-state-management"},l={unversionedId:"local-state-management",id:"version-v10.1.1/local-state-management",isDocsHomePage:!1,title:"Local State Management",description:"Relay can be used to read and write local data, and act as a single source of truth for all data in your client application.",source:"@site/versioned_docs/version-v10.1.1/Modern-LocalStateManagement.md",slug:"/local-state-management",permalink:"/docs/v10.1.1/local-state-management",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v10.1.1/Modern-LocalStateManagement.md",version:"v10.1.1",lastUpdatedBy:"Jordan Eldredge",lastUpdatedAt:1619022624,sidebar:"version-v10.1.1/docs",previous:{title:"Testing Relay Components",permalink:"/docs/v10.1.1/testing-relay-components"},next:{title:"Thinking in GraphQL",permalink:"/docs/v10.1.1/thinking-in-graphql"}},c=[{value:"Extending the server schema",id:"extending-the-server-schema",children:[]},{value:"Querying local state",id:"querying-local-state",children:[]},{value:"Mutating local state",id:"mutating-local-state",children:[{value:"Create",id:"create",children:[]},{value:"Update",id:"update",children:[]},{value:"Delete",id:"delete",children:[]}]},{value:"Initial local state",id:"initial-local-state",children:[]}],s={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Relay can be used to read and write local data, and act as a single source of truth for ",Object(o.b)("em",{parentName:"p"},"all")," data in your client application.\nThe Relay Compiler fully supports client-side extensions of the schema, which allows you to define local fields and types."),Object(o.b)("p",null,"Table of Contents:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#extending-the-server-schema"}),"Extending the server schema")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#querying-local-state"}),"Querying local state")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#mutating-local-state"}),"Mutating local state")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#initial-local-state"}),"Initial local state"))),Object(o.b)("h2",{id:"extending-the-server-schema"},"Extending the server schema"),Object(o.b)("p",null,"To extend the server schema, create a new ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file inside your ",Object(o.b)("inlineCode",{parentName:"p"},"--src")," directory.\nLet's call it ",Object(o.b)("inlineCode",{parentName:"p"},"./src/clientSchema.graphql"),"."),Object(o.b)("p",null,"This schema describes what local data can be queried on the client.\nIt can even be used to extend an existing server schema."),Object(o.b)("p",null,"For example, we can create a new type called ",Object(o.b)("inlineCode",{parentName:"p"},"Note"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Note {\n  id: ID!\n  title: String\n  body: String\n}\n")),Object(o.b)("p",null,"And then extend the server schema type ",Object(o.b)("inlineCode",{parentName:"p"},"User"),", with a list of ",Object(o.b)("inlineCode",{parentName:"p"},"Note"),", called ",Object(o.b)("inlineCode",{parentName:"p"},"notes"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"extend type User {\n  notes: [Note]\n}\n")),Object(o.b)("h2",{id:"querying-local-state"},"Querying local state"),Object(o.b)("p",null,"Accessing local data is no different from querying your GraphQL server, although you are required to include atleast one server field in the query.\nThe field can be from the server schema, or it can be schema agnostic, like an introspection field (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"__typename"),")."),Object(o.b)("p",null,"Here, we use a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./query-renderer"}),"QueryRenderer")," to get the current ",Object(o.b)("inlineCode",{parentName:"p"},"User")," via the ",Object(o.b)("inlineCode",{parentName:"p"},"viewer")," field, along with their id, name and the local list of notes."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Example.js\nimport React from 'react';\nimport { QueryRenderer, graphql } from 'react-relay';\n\nconst renderQuery = ({error, props}) => {\n  if (error) {\n    return <div>{error.message}</div>;\n  } else if (props) {\n    return (\n      <div>\n        {props.viewer.notes.map(({id, title, body}) => (\n          <div key={id}>\n            {title}\n          </div>\n          <div key={id}>\n            {body}\n          </div>\n        ))}\n      </div>\n    );\n  }\n  return <div>Loading</div>;\n}\n\nconst Example = (props) => {\n  return (\n    <QueryRenderer\n      render={renderQuery}\n      environment={environment}\n      query={graphql`\n        query ExampleQuery {\n          viewer {\n            id\n            name\n            notes {\n              id\n              title\n              body\n            }\n          }\n        }\n      `}\n    />\n  );\n}\n")),Object(o.b)("h2",{id:"mutating-local-state"},"Mutating local state"),Object(o.b)("p",null,"All local data lives in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./relay-store"}),"Relay Store"),".\nUpdating local state can be done with any ",Object(o.b)("inlineCode",{parentName:"p"},"updater")," function.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"commitLocalUpdate")," function is especially ideal for this, because writes to local state are usually executed outside of a mutation."),Object(o.b)("p",null,"To build upon the previous example, let's try creating, updating and deleting a ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," from the list of ",Object(o.b)("inlineCode",{parentName:"p"},"notes")," on ",Object(o.b)("inlineCode",{parentName:"p"},"User"),"."),Object(o.b)("h3",{id:"create"},"Create"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import {commitLocalUpdate} from 'react-relay';\n\nlet tempID = 0;\n\nfunction createUserNote() {\n  commitLocalUpdate(environment, store => {\n    const user = store.getRoot().getLinkedRecord('viewer');\n    const userNoteRecords = user.getLinkedRecords('notes') || [];\n\n    // Create a unique ID.\n    const dataID = `client:Note:${tempID++}`;\n\n    //Create a new note record.\n    const newNoteRecord = store.create(dataID, 'Note');\n\n    // Add the record to the user's list of notes.\n    user.setLinkedRecords([...userNoteRecords, newNoteRecord], 'notes');\n  });\n}\n")),Object(o.b)("p",null,"Note that since this record will be rendered by the ",Object(o.b)("inlineCode",{parentName:"p"},"ExampleQuery")," in our ",Object(o.b)("inlineCode",{parentName:"p"},"QueryRenderer"),", the QueryRenderer will automatically retain this data so it isn't garbage collected."),Object(o.b)("p",null,"If no component is rendering the local data and you want to manually retain it, you can do so by calling ",Object(o.b)("inlineCode",{parentName:"p"},"environment.retain()"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import {createOperationDescriptor, getRequest} from 'relay-runtime';\n\n// Create a query that references that record\nconst localDataQuery = graphql`\n  query LocalDataQuery {\n    viewer {\n      notes {\n        __typename\n      }\n    }\n  }\n`;\n\n// Create an operation descriptor for the query\nconst request = getRequest(localDataQuery);\nconst operation = createOperationDescriptor(request, {} /* variables */);\n\n\n// Tell Relay to retain this operation so any data referenced by it isn't garbage collected\n// In this case, all the notes linked to the `viewer` will be retained\nconst disposable = environment.retain(operation);\n\n\n// Whenever you don't need that data anymore and it's okay for Relay to garbage collect it,\n// you can dispose of the retain\ndisposable.dispose();\n")),Object(o.b)("h3",{id:"update"},"Update"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import {commitLocalUpdate} from 'react-relay';\n\nfunction updateUserNote(dataID, body, title) {\n  commitLocalUpdate(environment, store => {\n    const note = store.get(dataID);\n\n    note.setValue(body, 'body');\n    note.setValue(title, 'title')\n  });\n}\n")),Object(o.b)("h3",{id:"delete"},"Delete"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import {commitLocalUpdate} from 'react-relay';\n\nfunction deleteUserNote(dataID) {\n  commitLocalUpdate(environment, store => {\n    const user = store.getRoot().getLinkedRecord('viewer');\n    const userNoteRecords = user.getLinkedRecords('notes');\n\n    // Remove the note from the list of user notes.\n    const newUserNoteRecords = userNoteRecords.filter(x => x.getDataID() !== dataID);\n\n    // Delete the note from the store.\n    store.delete(dataID);\n\n    // Set the new list of notes.\n    user.setLinkedRecords(newUserNoteRecords, 'notes');\n  });\n}\n")),Object(o.b)("h2",{id:"initial-local-state"},"Initial local state"),Object(o.b)("p",null,"All new client-side schema fields default to ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," value. Often however, you will want to set the initial state before querying local data.\nYou can use an updater function via ",Object(o.b)("inlineCode",{parentName:"p"},"commitLocalUpdate")," to prime local state."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import {commitLocalUpdate} from 'react-relay';\n\ncommitLocalUpdate(environment, store => {\n  const user = store.getRoot().getLinkedRecord('viewer');\n\n  // initialize user notes to an empty array.\n  user.setLinkedRecords([], 'notes');\n});\n")))}d.isMDXComponent=!0}}]);