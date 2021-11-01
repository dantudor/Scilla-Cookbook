"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[699],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,o(o({ref:e},u),{},{components:a})):n.createElement(m,o({ref:e},u))}));function h(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6409:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={tags:["mutisignature","mutisig","contract","reference","zrc4"]},l="Muti-signature contracts",c={unversionedId:"recipes/scilla-contract/mutisignature",id:"recipes/scilla-contract/mutisignature",isDocsHomePage:!1,title:"Muti-signature contracts",description:"What is a mutisig?",source:"@site/docs/recipes/scilla-contract/mutisignature.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/mutisignature",permalink:"/recipes/scilla-contract/mutisignature",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/docs/recipes/scilla-contract/mutisignature.md",tags:[{label:"mutisignature",permalink:"/tags/mutisignature"},{label:"mutisig",permalink:"/tags/mutisig"},{label:"contract",permalink:"/tags/contract"},{label:"reference",permalink:"/tags/reference"},{label:"zrc4",permalink:"/tags/zrc-4"}],version:"current",frontMatter:{tags:["mutisignature","mutisig","contract","reference","zrc4"]},sidebar:"tutorialSidebar",previous:{title:"Metatransactions",permalink:"/recipes/scilla-contract/metatransactions"},next:{title:"Natural Numbers",permalink:"/recipes/scilla-contract/natural"}},u=[{value:"What is a mutisig?",id:"what-is-a-mutisig",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"What could go wrong?",id:"what-could-go-wrong",children:[]},{value:"Zilliqa mutisig",id:"zilliqa-mutisig",children:[{value:"Webportal",id:"webportal",children:[]},{value:"Contract",id:"contract",children:[]},{value:"Interaction",id:"interaction",children:[]}]},{value:"Testing the Zilliqa mutisig",id:"testing-the-zilliqa-mutisig",children:[{value:"Setup",id:"setup",children:[]},{value:"Deployment via UI",id:"deployment-via-ui",children:[]},{value:"Approve a transaction",id:"approve-a-transaction",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],d={toc:u};function p(t){var e=t.components,a=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"muti-signature-contracts"},"Muti-signature contracts"),(0,r.kt)("h2",{id:"what-is-a-mutisig"},"What is a mutisig?"),(0,r.kt)("p",null,"In blockchain-based applications, activities might need to be authorised by multiple blockchain addresses. For example, a monetary transaction may require authorisation from multiple blockchain addresses."),(0,r.kt)("p",null,"All the addresses that can authorise an activity might not be reachable at the time of issuing the transaction due to the sporadic or limited availability of some authorities. Also, it may not be possible to decide on all possible approvers in advance. How can a transaction be authorised by a subset (> 1) of approvers?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-4.md"},"ZRC-4")," defines the technical specification document that defines the mutisignature implementation."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"This contract holds funds that can be paid out to arbitrary users, provided that enough people in the collection of owners sign off on the payout."),(0,r.kt)("p",null,"The transaction must be added to the contract before signatures can be collected. Once enough signatures are collected,the recipient can ask for the transaction to be executed and the money paid out."),(0,r.kt)("p",null,"If an owner changes his mind about a transaction, the signature can be revoked until the transaction is executed."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This wallet does not allow adding or removing owners, or changing the number of required signatures. To do any of those things, read the readme baked into the contract for further infomation."))),(0,r.kt)("h2",{id:"what-could-go-wrong"},"What could go wrong?"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If a sufficient number of owners lose their private keys, or for any other reason are unable or unwilling to sign for new transactions, the funds in the wallet will be locked forever. It is therefore a good idea to set required_signatures to a value strictly less than the number of owners, so that the remaining owners can retrieve the funds should such a scenario occur."),(0,r.kt)("p",{parentName:"div"},"If an owner loses his private key, the remaining owners should move the funds to a new wallet (using the workflow baked into the readme of the contract) to ensure that funds are not locked if another owner loses his private key. The owner who originally lost his private key can generate a new key, and the corresponding address be added to the new wallet, so that the same set of persons own the new wallet."))),(0,r.kt)("h2",{id:"zilliqa-mutisig"},"Zilliqa mutisig"),(0,r.kt)("h3",{id:"webportal"},"Webportal"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://multisig.zilliqa.com/"},"Zilliqa multisig wallet")," is the easiest way of interfacing using a mutisig contract. It provides a user interface over the transitions this contract exposes."),(0,r.kt)("h3",{id:"contract"},"Contract"),(0,r.kt)("p",null,"ZRC-4 has a reference ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Zilliqa/ZRC/4e92efd31c5d9a43db8bf5a7d25f7e2916d54c1d/reference/multisig_wallet.scilla"},"contract")," that can be examined."),(0,r.kt)("p",null,"The contract takes two immutable parameters. One for the List of ByStr20's used for signing, and the total number of required signatures needed. The contract then performs some validation to ensure the amount of signatures required is less than or equal to the required amount before continuing to setup the state variables. The state of the mutisig is concerned with capturing data relating to signatures, this is used later to check if enough signatures have been added to submit a transaction."),(0,r.kt)("p",null,"The contract has logical stubs related to the operation of the mutisig."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml"},"(* Add signature to signature list *)\nprocedure AddSignature (transactionId : Uint32, signee : ByStr20)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml"},"(* Submit a transaction for future signoff *)\ntransition SubmitTransaction (recipient : ByStr20, amount : Uint128, tag : String)\n\n(* Sign off on an existing transaction *)\ntransition SignTransaction (transactionId : Uint32)\n\n(* Delete transaction and signatures *)\nprocedure DeleteTransaction (transactionId : Uint32)\n\n(* Execute signed-off transaction *)\ntransition ExecuteTransaction (transactionId : Uint32)\n\n(* Revoke signature of existing transaction, if it has not yet been executed. *)\ntransition RevokeSignature (transactionId : Uint32)\n\n(* Add funds to wallet *)\ntransition AddFunds ()\n")),(0,r.kt)("h3",{id:"interaction"},"Interaction"),(0,r.kt)("p",null,"ZRC-4 has a reference ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/tree/4e92efd31c5d9a43db8bf5a7d25f7e2916d54c1d/example/zrc4"},"interaction")," library that can be used if users wanted to deploy or use the mutisig without interacting through the UI or IDE."),(0,r.kt)("h2",{id:"testing-the-zilliqa-mutisig"},"Testing the Zilliqa mutisig"),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create three wallets (say A, B, C) using the ",(0,r.kt)("a",{parentName:"p",href:"https://dev-wallet.zilliqa.com/generate"},"dev wallet generator"),", store the corresponding keystore files on your machine and note the BECH32(zil...) addresses. (you can import keystores into zilpay at a later convience)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request testnet ZILs for these addresses ",(0,r.kt)("a",{parentName:"p",href:"https://dev-wallet.zilliqa.com/faucet"},"via the faucet"),"."))),(0,r.kt)("h3",{id:"deployment-via-ui"},"Deployment via UI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Login to the multisig wallet portal using the keystore for address A. Deploy a multisig wallet in a 2 out of 3 mode (i.e., funds from the multisig wallet can be transferred only when 2 out of 3 wallets have signed off).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use addresses corresponding to A, B and C (from Step 1) as the owner of the multisig wallet. Owners are the ones who can sign off a payment. Once deployed, save the multisig contract address for further testing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once the multisig wallet is deployed, you will have to add funds to the contract. For this, go to the multisig wallet interface and click Add Funds button from the right-hand panel. Add funds to the multisig wallet using the funds from address A using the UI."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You cannot send funds to the contract address through zilpay, it returns the error: ",(0,r.kt)("inlineCode",{parentName:"p"},"contract account wont accept normal transactions")),(0,r.kt)("p",{parentName:"div"},"Note the transition for accepting payments in the contract transition stubs as an alternative."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is not a mutisignature contract that currently accepts ZRC-2 tokens"))),(0,r.kt)("h3",{id:"approve-a-transaction"},"Approve a transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let\u2019s say you want to pay 5 ZILs to account C via the multisig wallet. In order to do this, log in the multisig wallet using account A. And click Transaction from the right-hand panel. Fill in the recipient address and the amount and send the transaction.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Since it is a multisig wallet, any transfer of money from the wallet will require 2 out of 3 sign offs. Since A submitted the transaction, it is counted as a sign off. We now need either B or C to sign off.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Log in to the multisig wallet using account B, import the multisig wallet by providing the multisig wallet address (from Step 3.) Once the wallet is imported, you can click sign to sign of this transaction. Do check the transaction details.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once the two signatures are obtained, you can use account B to execute the transaction. Execution is the final step in the transfer process and it will transfer 5 ZILs to C."))),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://research.csiro.au/blockchainpatterns/general-patterns/security-patterns/multiple-authorization/"},"Multisignature")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/blob/4e92efd31c5d9a43db8bf5a7d25f7e2916d54c1d/zrcs/zrc-4.md"},"ZRC-4 Specification")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/tree/4e92efd31c5d9a43db8bf5a7d25f7e2916d54c1d/example/zrc4"},"ZRC-4 Interaction")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://multisig.zilliqa.com/"},"Zilliqa Mutisignature Wallet UI")))}p.isMDXComponent=!0}}]);