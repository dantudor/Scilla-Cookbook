"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[7787],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4958:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:4},l="Procedures",s={unversionedId:"tutorials/scilla-contract/incrementing-button/procedure",id:"tutorials/scilla-contract/incrementing-button/procedure",isDocsHomePage:!1,title:"Procedures",description:"A `procedure` is a way to define logic that interacts with the contract state. Procedures are not part of the public interface of the contract, and may not be invoked by sending a message to the contract. The only way to invoke a procedure is to call it from an internal `transition` or from another internal `procedure`.",source:"@site/docs/tutorials/scilla-contract/incrementing-button/procedure.md",sourceDirName:"tutorials/scilla-contract/incrementing-button",slug:"/tutorials/scilla-contract/incrementing-button/procedure",permalink:"/tutorials/scilla-contract/incrementing-button/procedure",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/docs/tutorials/scilla-contract/incrementing-button/procedure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"State and Constants",permalink:"/tutorials/scilla-contract/incrementing-button/mutable-parameters"},next:{title:"Error Handling",permalink:"/tutorials/scilla-contract/incrementing-button/error-handling"}},d=[{value:"IncrementingButton",id:"incrementingbutton",children:[{value:"IsContractOwner",id:"iscontractowner",children:[]},{value:"IncrementCounter",id:"incrementcounter",children:[]},{value:"IsPreviousClicker",id:"ispreviousclicker",children:[]},{value:"SetNewClicker",id:"setnewclicker",children:[]},{value:"ContractOwnerResetButton",id:"contractownerresetbutton",children:[]},{value:"IncrementingButton review",id:"incrementingbutton-review",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"procedures"},"Procedures"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"procedure")," is a way to define logic that interacts with the contract state. Procedures are not part of the public interface of the contract, and may not be invoked by sending a message to the contract. The only way to invoke a procedure is to call it from an internal ",(0,i.kt)("inlineCode",{parentName:"p"},"transition")," or from another internal ",(0,i.kt)("inlineCode",{parentName:"p"},"procedure"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Consider procedures as private encapuslation scope."))),(0,i.kt)("p",null,"Procedures in a contract are declared through keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"procedure"),". A procedure declaration is followed by the name of the procedure. The below example the procedure is called ",(0,i.kt)("inlineCode",{parentName:"p"},"ExampleProcedure"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The standard convention to writing procedure names is in PascalCase and snake_case for constants or state"))),(0,i.kt)("p",null,"The arguments to be passed to the procedure are wrapped within  ",(0,i.kt)("inlineCode",{parentName:"p"},"()"),". The below example defines one parameter where ",(0,i.kt)("inlineCode",{parentName:"p"},"vname")," is the argument name and ",(0,i.kt)("inlineCode",{parentName:"p"},"vtype")," is its type.  Mutiple parameters are delimited with a  ",(0,i.kt)("inlineCode",{parentName:"p"},","),". Procedures indicate the end of processing by providing the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"end"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"procedure ExampleProcedure(vname: vtype)\n\nend\n")),(0,i.kt)("h2",{id:"incrementingbutton"},"IncrementingButton"),(0,i.kt)("p",null,"Lets improve ",(0,i.kt)("inlineCode",{parentName:"p"},"IncrementingButton")," by defining some ",(0,i.kt)("inlineCode",{parentName:"p"},"procedures")," that will handle the logic of our contract."),(0,i.kt)("p",null,"Remembering the scope of the brief, you stub out procedures which will define the logic for each requirement. We will use these procedures as atomic code blocks later in the public transitions. Atomic code helps reduce repeating code when building complex behaviour."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Typically procedures with 'Is XXX' throw errors, allowing contracts to stop execution while procedures defined as 'DoSomething' performs an action."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"procedure IsContractOwner()\nend\n\nprocedure IncrementCounter()\nend \n\nprocedure IsPreviousClicker(new_clicker: ByStr20)\nend\n\nprocedure SetNewClicker(new_clicker: ByStr20)\nend\n\nprocedure ContractOwnerResetButton()\nend\n\n")),(0,i.kt)("h3",{id:"iscontractowner"},"IsContractOwner"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IsContractOwner")," will check the calling address against what was deployed out with the contract. If these addresses are not equal then it will raise an error.\n",(0,i.kt)("inlineCode",{parentName:"p"},"_sender"),"  is a builtin variable which captures the calling addresses value. It's more secure to use ",(0,i.kt)("inlineCode",{parentName:"p"},"_sender")," than passing an address that can be defined with a transition call."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IsContractOwner")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"builtin eq")," to compare ",(0,i.kt)("inlineCode",{parentName:"p"},"contract_owner")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"_sender")," and returns the bool value to ",(0,i.kt)("inlineCode",{parentName:"p"},"is_contract_owner"),"."),(0,i.kt)("p",null,"Using pattern matching, we can write a basic function with the pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"match type_variable with | type =>"),". We can now branch depending if that is true or false."),(0,i.kt)("p",null,"For now, we will leave these empty, but know we will want to throw an error later for the false path."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Writing code comments helps others easily understand what is happening in your contract"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"(*\n  @Dev : Throws an error if '_sender' is not 'contract_owner'\n*)\nprocedure IsContractOwner()\n  is_contract_owner = builtin eq contract_owner _sender;\n  match is_contract_owner with\n  | True => \n    (* Continue contract execution *)\n  | False =>\n    (* Throw error - Stop execution *)\n  end\nend\n")),(0,i.kt)("h3",{id:"incrementcounter"},"IncrementCounter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IncrementCounter")," will increment the counter by one everytime its called. We plan to only use this procedure after we've verified the caller is unique."),(0,i.kt)("p",null,"We read the value of our mutable counter with the similar syntax as above, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"<-")," returning a new local variable. We then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"builtin add")," command to then add ",(0,i.kt)("inlineCode",{parentName:"p"},"uint128_one")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"total_count_clicks")," together. This value is returned as a new variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"new_click_count"),". Lastly, using the pattern ",(0,i.kt)("inlineCode",{parentName:"p"},"state_type := new_state")," the state of the contract can be written to, in our case the state is updated with count + 1."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Take note how the last statement line of the statement is not terminated with a semi-colon."),(0,i.kt)("p",{parentName:"div"},"If this line ended with a semi-colon, the contract would fail to compile with the error ",(0,i.kt)("inlineCode",{parentName:"p"},"What follows the statement was unexpected, for example possibly a statement or termination is expected.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"(*  \n  Dev: Increments 'current_clicker' by 'uint128_one'\n*)\nprocedure IncrementCounter()\n  previous_click_count <- total_count_clicks; (* get the state *)\n  new_click_count = builtin add previous_click_count uint128_one; (* add one *)\n  total_count_clicks := new_click_count (* set the state *)\nend \n")),(0,i.kt)("h3",{id:"ispreviousclicker"},"IsPreviousClicker"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IsPreviousClicker")," defines the logic that checks if the current caller was the last caller.  If these addresses are equal to each other then we should throw an error, otherwise it's a unique address. For now, we will define these as empty, but know we will want to throw an error later for the true path."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"(*  \n  Dev: Throws an error if the current '_sender' is the previous 'current_clicker'\n*)\nprocedure IsPreviousClicker(new_clicker: ByStr20)\n  previous_clicker <- current_clicker;\n  is_previous_clicker = builtin eq previous_clicker _sender;\n  match is_previous_clicker with\n  | True => \n    (* Throw error - Stop execution *)\n  | False =>\n    (* Continue contract execution *)\n  end\nend\n\n")),(0,i.kt)("h3",{id:"setnewclicker"},"SetNewClicker"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SetNewClicker")," takes an address called ",(0,i.kt)("inlineCode",{parentName:"p"},"new_clicker")," and sets it to the current clicker. We could have used ",(0,i.kt)("inlineCode",{parentName:"p"},"_sender")," as another valid alternative to ",(0,i.kt)("inlineCode",{parentName:"p"},"new_clicker"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"(*  \n  Dev: Sets 'new_clicker' as 'current_clicker'\n*)\nprocedure SetNewClicker(new_clicker: ByStr20)\n  current_clicker := new_clicker\nend\n")),(0,i.kt)("h3",{id:"contractownerresetbutton"},"ContractOwnerResetButton"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ContractOwnerResetButton")," sets the mutible state ",(0,i.kt)("inlineCode",{parentName:"p"},"total_count_click")," variable to zero."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When procedures define actions that change the state of the contract, developers should be extra mindful about unauthorised permissions. What if anyone could call ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractOwnerResetButton"),"?"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"(*  \n  Dev: Resets 'current_clicker' to 'uint128_zero'\n*)\nprocedure ContractOwnerResetButton()\n  total_count_clicks  := uint128_zero\nend\n")),(0,i.kt)("h3",{id:"incrementingbutton-review"},"IncrementingButton review"),(0,i.kt)("p",null,"In this section we have defined internal procedure logic to interact with our state parameters. Since procedures only allow for procedures and transitions to call them and we have none, this contract does not allow for the button to be pressed - though we have the parts to create the button."),(0,i.kt)("p",null,"In the next section we will write some addtional logic to handle the two errors we've identified we want to throw."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"scilla_version 0\nlibrary IncrementingButton\n\nlet uint128_zero = Uint128 0\nlet uint128_one  = Uint128 1\n\ncontract IncrementingButton\n(\n  contract_owner: ByStr20\n)\n\nfield current_clicker    : ByStr20 = contract_owner\nfield total_count_clicks : Uint128 = uint128_zero\n\n(*\n  @Dev : Throws an error if '_sender' is not 'contract_owner'\n*)\nprocedure IsContractOwner()\n  is_contract_owner = builtin eq contract_owner _sender;\n  match is_contract_owner with\n  | True => \n  | False =>\n  end\nend\n\n(*  \n  Dev: Increments 'current_clicker' by 'uint128_one'\n*)\nprocedure IncrementCounter()\n  previous_click_count <- total_count_clicks;\n  new_click_count = builtin add previous_click_count uint128_one;\n  total_count_clicks := new_click_count\nend \n\n(*  \n  Dev: Throws an error if the current '_sender' is the previous 'current_clicker'\n*)\nprocedure IsPreviousClicker(new_clicker: ByStr20)\n  previous_clicker <- current_clicker;\n  is_previous_clicker = builtin eq previous_clicker _sender;\n  match is_previous_clicker with\n  | True => \n  | False =>\n  end\nend\n\n(*  \n  Dev: Sets 'new_clicker' as 'current_clicker'\n*)\nprocedure SetNewClicker(new_clicker: ByStr20)\n  current_clicker := new_clicker\nend\n\n(*  \n  Dev: Resets 'current_clicker' to 'uint128_zero'\n*)\nprocedure ContractOwnerResetButton()\n  total_count_clicks  := uint128_zero\nend\n")))}p.isMDXComponent=!0}}]);