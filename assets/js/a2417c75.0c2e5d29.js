"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[9574],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8634:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],l={},s="FAQ",c={unversionedId:"side-dishes/faq",id:"side-dishes/faq",isDocsHomePage:!1,title:"FAQ",description:"Why use Scilla over Solidity or other languages?",source:"@site/docs/side-dishes/faq.md",sourceDirName:"side-dishes",slug:"/side-dishes/faq",permalink:"/side-dishes/faq",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/docs/side-dishes/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Block Production",permalink:"/side-dishes/blocks"},next:{title:"Gas",permalink:"/side-dishes/gas"}},u=[{value:"Why use Scilla over Solidity or other languages?",id:"why-use-scilla-over-solidity-or-other-languages",children:[]},{value:"How is Zilliqa&#39;s mining different compared to Bitcoin POW?",id:"how-is-zilliqas-mining-different-compared-to-bitcoin-pow",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"why-use-scilla-over-solidity-or-other-languages"},"Why use Scilla over Solidity or other languages?"),(0,r.kt)("p",null,"We believe in moving towards a language or a subset of an existing language grammar on which we\ncan prove safety properties about a contract. This will avoid most of the issues that existing contracts\nare facing, e.g., DAO and Parity. Without any formal proofs about the contracts, such situations are\nunavoidable."),(0,r.kt)("p",null,"Unlike Solidity, Scilla won\u2019t be Turing complete. The computation model will be based on communicating I/O automata (I/O Automata theory by Lynch and Tuttle (\u201981) with CPS style return of values. The front-end language can be close to Solidity. The rationale behind the choice is the following: not all applications require a Turing complete language."),(0,r.kt)("p",null,"Moreover, Turing complete languages are hard to reason about and hence prone to bugs. A non Turing-complete language becomes amenable to formal methods-based verification because of its simplicity. In more concrete terms, it becomes possible to prove interesting safety and livenessm properties about a non-Turing complete program such as the funds never get locked, etc."),(0,r.kt)("h2",{id:"how-is-zilliqas-mining-different-compared-to-bitcoin-pow"},"How is Zilliqa's mining different compared to Bitcoin POW?"),(0,r.kt)("p",null,"Unlike Bitcoin, the mining process in Zilliqa is not directly based on PoW. Every Zilliqa node first does a PoW at the start of what is called a DS epoch. Once, a valid PoW solution is submitted to the network, each node will then have to participate in the pBFT consensus protocol. Consider the consensus protocol as a simple voting. If a super-majority of nodes vote for it, then the block will be considered valid and can be committed to the blockchain. Once a node has done PoW, it can vote for a certain number of blocks. Every block that gets committed to the blockchain will yield some reward."),(0,r.kt)("p",null,"The difference with Bitcoin is that in Bitcoin nodes do a PoW for every new block. For Zilliqa, a node will do a PoW for every 100 blocks. This also means that the energy footprint associated with PoW in Zilliqa is considerabily lower."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/_/downloads/en/latest/pdf/"},"PDF Docs")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.zilliqa.com/techfaq.pdf"},"Dev FAQ")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.zilliqa.com/techfaq.pdf"},"Technical FAQ")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.zilliqa.com/scilla-design-story-piece-by-piece-part-1-why-do-we-need-a-new-language-27d5f14ae661"},"Scilla Design Story")))}p.isMDXComponent=!0}}]);