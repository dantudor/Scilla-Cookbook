"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[1209],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(h,a(a({ref:n},u),{},{components:t})):r.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4445:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={sidebar_position:6},s="Transitions",l={unversionedId:"tutorials/scilla-contract/incrementing-button/transition",id:"tutorials/scilla-contract/incrementing-button/transition",isDocsHomePage:!1,title:"Transitions",description:"A `transition` is a way to define logic that interacts with the contract state. transitions are a part of the public interface of the contract, and may be invoked by sending a message to the contract.",source:"@site/docs/tutorials/scilla-contract/incrementing-button/transition.md",sourceDirName:"tutorials/scilla-contract/incrementing-button",slug:"/tutorials/scilla-contract/incrementing-button/transition",permalink:"/tutorials/scilla-contract/incrementing-button/transition",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/docs/tutorials/scilla-contract/incrementing-button/transition.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/tutorials/scilla-contract/incrementing-button/error-handling"},next:{title:"Events",permalink:"/tutorials/scilla-contract/incrementing-button/events"}},u=[{value:"IncrementingButton",id:"incrementingbutton",children:[]},{value:"IncrementingButton So far",id:"incrementingbutton-so-far",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transitions"},"Transitions"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"transition")," is a way to define logic that interacts with the contract state. transitions are a part of the public interface of the contract, and may be invoked by sending a message to the contract."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Consider transitions as public encapuslation scope."))),(0,o.kt)("p",null,"Transitions are declared through keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"transition"),". A procedure declaration is followed by the name of the procedure. The below example the procedure is called ",(0,o.kt)("inlineCode",{parentName:"p"},"ExampleTransition"),"."),(0,o.kt)("p",null,"The arguments to be passed to the transitions are wrapped within  ",(0,o.kt)("inlineCode",{parentName:"p"},"()"),". The below example defines one parameter where ",(0,o.kt)("inlineCode",{parentName:"p"},"vname")," is the argument name and ",(0,o.kt)("inlineCode",{parentName:"p"},"vtype")," is its type. When mutiple arguments are passed they are seperated by a ",(0,o.kt)("inlineCode",{parentName:"p"},","),"."),(0,o.kt)("p",null,"Transitions indicate the end of processing by providing the keyword ",(0,o.kt)("inlineCode",{parentName:"p"},"end"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"transition ExampleTransition(vname: vtype)\n\nend\n")),(0,o.kt)("h2",{id:"incrementingbutton"},"IncrementingButton"),(0,o.kt)("p",null,"Lets continue to improve IncrementingButton by defining some transitions that will be callable by anyone with the contract address."),(0,o.kt)("p",null,"Remembering the scope of the brief, you stub out transitions which will contain the public logic of our contract and implement the procedures implemented previously."),(0,o.kt)("p",null,"Two transitions were identified for implementing. One for pressing the button and another for resetting the button. We note that the caller of the function is defined as ",(0,o.kt)("inlineCode",{parentName:"p"},"_sender")," so the transitions do not require any input parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"transition PressTheButton()\nend\n\ntransition OwnerResetButton()\nend\n")),(0,o.kt)("p",null,"Using the previously defined procedures we can start to build callable logic into the contract."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Implementing transitions before procedures can result in type or not in scope errors, typically these are defined after all procedures."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"...\n\n(*  \n  @Dev: Sets 'new_clicker' as current_clicker\n*)\ntransition PressTheButton()\n  IsPreviousClicker _sender;\n  SetNewClicker _sender;\n  IncrementCounter\nend\n\n(*  \n  @Dev: Sets 'new_clicker' as current_clicker\n*)\ntransition OwnerResetButton()\n  IsContractOwner;\n  ContractOwnerResetButton\nend\n")),(0,o.kt)("h2",{id:"incrementingbutton-so-far"},"IncrementingButton So far"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"scilla_version 0\nlibrary IncrementingButton\n\nlet uint128_zero = Uint128 0\nlet uint128_one  = Uint128 1\n\n(* Error exception *)\ntype Error =\n  | NotContractOwner\n  | NotUniqueClicker\n\nlet make_error =\n  fun (result : Error) =>\n    let result_code = \n      match result with\n      | NotContractOwner             => Int32 -1\n      | NotUniqueClicker             => Int32 -2\n      end\n    in\n    { _exception : \"Error\"; code : result_code }  \n    \ncontract IncrementingButton\n(\n  contract_owner: ByStr20\n)\n\nfield current_clicker    : ByStr20 = contract_owner\nfield total_count_clicks : Uint128 = uint128_zero\n\n(* \n  @Dev: Emit Errors \n*)\nprocedure ThrowError(err : Error)\n  e = make_error err;\n  throw e\nend\n\n(*\n  @Dev : Throws an error if '_sender' is not 'contract_owner'\n*)\nprocedure IsContractOwner()\n  is_contract_owner = builtin eq contract_owner _sender;\n  match is_contract_owner with\n  | True => \n    (* No Operation - Continue contract execution *)\n  | False =>\n    err = NotContractOwner;\n    ThrowError err\n  end\nend\n\n(*  \n  Dev: Increments 'current_clicker' by 'uint128_one'\n*)\nprocedure IncrementCounter()\n  previous_click_count <- total_count_clicks;\n  new_click_count = builtin add previous_click_count uint128_one;\n  total_count_clicks := new_click_count\nend \n\n\n(*  \n  Dev: Throws an error if the current '_sender' is the previous 'current_clicker'\n*)\nprocedure IsPreviousClicker(new_clicker: ByStr20)\n  previous_clicker <- current_clicker;\n  is_previous_clicker = builtin eq previous_clicker _sender;\n  match is_previous_clicker with\n  | True => \n    err = NotUniqueClicker;\n    ThrowError err\n  | False =>\n    (* No Operation - Continue contract execution *)\n  end\nend\n\n(*  \n  Dev: Sets 'new_clicker' as 'current_clicker'\n*)\nprocedure SetNewClicker(new_clicker: ByStr20)\n  current_clicker := new_clicker\nend\n\n(*  \n  Dev: Resets 'current_clicker' to 'uint128_zero'\n*)\nprocedure ContractOwnerResetButton()\n  total_count_clicks  := uint128_zero\nend\n\n(*  \n  Dev: Sets 'new_clicker' as current_clicker\n*)\ntransition PressTheButton()\n  IsPreviousClicker _sender;\n  SetNewClicker _sender;\n  IncrementCounter\nend\n\n(*  \n  Dev: Sets 'new_clicker' as current_clicker\n*)\ntransition OwnerResetButton()\n  IsContractOwner;\n  ContractOwnerResetButton\nend\n\n")))}d.isMDXComponent=!0}}]);