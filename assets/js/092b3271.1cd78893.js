"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[9560],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=i,f=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7890:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},c="Block Production",l={unversionedId:"side-dishes/sd-blocks",id:"side-dishes/sd-blocks",isDocsHomePage:!1,title:"Block Production",description:"What is sharding",source:"@site/docs/side-dishes/sd-blocks.md",sourceDirName:"side-dishes",slug:"/side-dishes/sd-blocks",permalink:"/side-dishes/sd-blocks",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/side-dishes/sd-blocks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Notable Interaction",permalink:"/recipes/contract-interaction/notable-interactions"},next:{title:"FAQ",permalink:"/side-dishes/sd-faq"}},u=[{value:"What is sharding",id:"what-is-sharding",children:[]},{value:"What is finality",id:"what-is-finality",children:[]},{value:"How many blocks are there per day",id:"how-many-blocks-are-there-per-day",children:[]}],d={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-production"},"Block Production"),(0,o.kt)("h2",{id:"what-is-sharding"},"What is sharding"),(0,o.kt)("p",null,"Sharding is a process of splitting up blockchain nodes into different groups. Each group has roughly the same number of nodes as each other, so if one shard can do ten transactions per second, all shards together can process 100 transactions per second."),(0,o.kt)("p",null,"Zilliqa\u2019s consensus mechanism begins in a Proof of Work phase. During this phase, miners must confirm the blockchain by completing an individual hash. This process has finality, meaning that most nodes must agree on a mini-block before it is finalized."),(0,o.kt)("h2",{id:"what-is-finality"},"What is finality"),(0,o.kt)("p",null,"There is a key difference between Zilliqa and blockchains like Bitcoin and Ethereum and that is finality to transactions."),(0,o.kt)("p",null,"Because of the fact that Bitcoin/Ethereum use PoW for consensus, every block that is mined has probabilistic finality, i.e., the probability that a block will indeed be a part of the canonical chain increases with the number of blocks that get added on top of it."),(0,o.kt)("p",null,"Zilliqa on the other hand uses PBFT for consensus which means that once a block is mined, it is final. Therefore you don't need to wait for any confirmation at all."),(0,o.kt)("p",null,"In Ethereum for instance, exchanges often wait for 30 confirmations as a newly mined block may not end up being in the canonical chain."),(0,o.kt)("p",null,"Also, though they are somewhat correlated, there is a difference between confimation latency and general throughput."),(0,o.kt)("h2",{id:"how-many-blocks-are-there-per-day"},"How many blocks are there per day"),(0,o.kt)("p",null,"The blocks per day can very depending on network sharding, take note of the ",(0,o.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/stat/blockCountHistory"},"statistics of the network")," to determine this in your calculations."))}h.isMDXComponent=!0}}]);