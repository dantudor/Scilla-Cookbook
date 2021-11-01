"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[1796],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,c(c({ref:e},s),{},{components:n})):r.createElement(f,c({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a.mdxType="string"==typeof t?t:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8736:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={sidebar_position:1},l="Introduction",u={unversionedId:"tutorials/scilla-contract/incrementing-button/introduction",id:"tutorials/scilla-contract/incrementing-button/introduction",isDocsHomePage:!1,title:"Introduction",description:"We are going to write a scilla contract from scratch.",source:"@site/docs/tutorials/scilla-contract/incrementing-button/introduction.md",sourceDirName:"tutorials/scilla-contract/incrementing-button",slug:"/tutorials/scilla-contract/incrementing-button/introduction",permalink:"/tutorials/scilla-contract/incrementing-button/introduction",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/docs/tutorials/scilla-contract/incrementing-button/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Vanity Addresses",permalink:"/side-dishes/vanity"},next:{title:"Constructor name",permalink:"/tutorials/scilla-contract/incrementing-button/constructor"}},s=[{value:"IncrementingButton",id:"incrementingbutton",children:[]}],p={toc:s};function d(t){var e=t.components,n=(0,o.Z)(t,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We are going to write a scilla contract from scratch."),(0,i.kt)("p",null,"You don't need any previous blockchain experience, but general programming experience will be useful."),(0,i.kt)("p",null,"Best practices and developer thoughts will be present to help you start to think like a chain developer."),(0,i.kt)("h2",{id:"incrementingbutton"},"IncrementingButton"),(0,i.kt)("p",null,"IncrementingButton is a walkthrough tutorial of the basic concepts of writing scilla contract code with the following objectives."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a scilla contract which models a button that can be pressed by anyone.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you are the recent button presser you may not press the button again."),(0,i.kt)("li",{parentName:"ul"},"When the button is pressed: Increment a counter and set the caller of the button press to be the most recent address.  "),(0,i.kt)("li",{parentName:"ul"},"The owner of the button contract has the ability to reset the counter to zero.")))))}d.isMDXComponent=!0}}]);