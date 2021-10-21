"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[4636],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,v=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7352:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="Version Headers",c={unversionedId:"tutorials/scilla-contract/incrementing-button/basics-versionheader",id:"tutorials/scilla-contract/incrementing-button/basics-versionheader",isDocsHomePage:!1,title:"Version Headers",description:"Scilla Version",source:"@site/docs/tutorials/scilla-contract/incrementing-button/basics-versionheader.md",sourceDirName:"tutorials/scilla-contract/incrementing-button",slug:"/tutorials/scilla-contract/incrementing-button/basics-versionheader",permalink:"/tutorials/scilla-contract/incrementing-button/basics-versionheader",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorials/scilla-contract/incrementing-button/basics-versionheader.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Constructor name",permalink:"/tutorials/scilla-contract/incrementing-button/basics-constructor"},next:{title:"State and Constants",permalink:"/tutorials/scilla-contract/incrementing-button/basics-mutable-parameters"}},d=[{value:"Scilla Version",id:"scilla-version",children:[]},{value:"Libraries",id:"libraries",children:[]},{value:"Internal Libaries",id:"internal-libaries",children:[]}],m={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-headers"},"Version Headers"),(0,r.kt)("h2",{id:"scilla-version"},"Scilla Version"),(0,r.kt)("p",null,"Our previous contract had no defined scilla version and therefore wouldn't be valid if we tried to compile it. "),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you tried to compile the contract in it's current state you would be returned the error ",(0,r.kt)("inlineCode",{parentName:"p"},"Scilla version number unspecified. "),"."))),(0,r.kt)("p",null,"To fix this, we declare the current scilla version using the ",(0,r.kt)("inlineCode",{parentName:"p"},"scilla_version")," keyword. The variable appended is the scilla version we are implementing in our contract.\nCurrently we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"scilla_version 0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{1}","{1}":!0},"scilla_version 0\n\ncontract IncrementingButton\n(\n  contract_owner: ByStr20,\n)\n")),(0,r.kt)("h2",{id:"libraries"},"Libraries"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This needs reviewing further."))),(0,r.kt)("p",null,"Our previous contract had no library defined and therefore wouldn't be valid if we tried to compile it. "),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you tried to compile the previous contract, you would be returned the error ",(0,r.kt)("inlineCode",{parentName:"p"},"After specifying a Scilla version number, either imports, a library or contract is expected.")))),(0,r.kt)("p",null,"To fix this, we declare the current library we are defining using the ",(0,r.kt)("inlineCode",{parentName:"p"},"library")," keyword. The variable appended is the library name we are implementing in our contract.\nWe will use our contract name for easier association, ",(0,r.kt)("inlineCode",{parentName:"p"},"library MyFirstContract"),".  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{3}","{3}":!0},"scilla_version 0\n\nlibrary IncrementingButton\n\ncontract IncrementingButton\n(\n  contract_owner: ByStr20,\n)\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"IncrementingButton")," now succesfully compiles! "))),(0,r.kt)("h2",{id:"internal-libaries"},"Internal Libaries"),(0,r.kt)("p",null,"The Scilla standard library contains five libraries: ",(0,r.kt)("inlineCode",{parentName:"p"},"BoolUtils.scilla"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"IntUtils.scilla"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ListUtils.scilla"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"NatUtils.scilla")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PairUtils.scilla.")," As the names suggests these contracts implement utility operations for the Bool, Int, List, Nat and Pair types, respectively."),(0,r.kt)("p",null,"To use functions from the standard library in a contract, the relevant library file must be imported using the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," keyword followed by the library to be imported. To import more than one library, seperate each library with a whitespace character."),(0,r.kt)("p",null,"The following code snippet shows how to import the functions from the ListUtils and IntUtils libraries."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We will omit the internal libraries from this IncrementingButton as they are not required."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{3}","{3}":!0},"scilla_version 0\n\nimport ListUtils IntUtils\n\nlibrary IncrementingButton\n\ncontract IncrementingButton\n(\n  contract_owner: ByStr20\n)\n")))}p.isMDXComponent=!0}}]);