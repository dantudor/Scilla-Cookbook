"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[6409],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6097:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={tags:["int","uint"]},s="U/int",u={unversionedId:"recipes/scilla-contract/uint",id:"recipes/scilla-contract/uint",isDocsHomePage:!1,title:"U/int",description:"Scilla defines signed and unsigned integer types of 32, 64, 128, and 256 bits.",source:"@site/docs/recipes/scilla-contract/uint.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/uint",permalink:"/recipes/scilla-contract/uint",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/docs/recipes/scilla-contract/uint.md",tags:[{label:"int",permalink:"/tags/int"},{label:"uint",permalink:"/tags/uint"}],version:"current",frontMatter:{tags:["int","uint"]},sidebar:"tutorialSidebar",previous:{title:"Safe Mutiplication",permalink:"/recipes/scilla-contract/safemutiply"},next:{title:"Utilities",permalink:"/recipes/scilla-contract/utilities"}},c=[{value:"Further Reading",id:"further-reading",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uint"},"U/int"),(0,a.kt)("p",null,"Scilla defines signed and unsigned integer types of 32, 64, 128, and 256 bits."),(0,a.kt)("p",null,"These integer types can be specified with the keywords ",(0,a.kt)("inlineCode",{parentName:"p"},"IntX")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UintX")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," can be ",(0,a.kt)("inlineCode",{parentName:"p"},"32"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"64"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"128"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"256"),"."),(0,a.kt)("p",null,"For example, the type of an unsigned integer of 32 bits is ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint32"),"."),(0,a.kt)("p",null,"The following code snippet declares a variable of type Uint32:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ocaml"},'scilla_version 0\n\nimport IntUtils\n\nlet zero_int32 = Int32 0\nlet zero_int64 = Int64 0\nlet zero_int128 = Int128 0\nlet zero_int256 = Int256 0\n\nlet zero_uint32 = Uint32 0\nlet zero_uint64 = Uint64 0\nlet zero_uint128 = Uint128 0\nlet zero_uint256 = Uint256 0\n\ncontract Integers()\n\ntransition IsGreaterThan(a: Int32, b: Int32)\n  is_gt = int32_gt a b;\n  ev = {_eventname : "IsGreaterThan"; a: a; b: b; is_a_greater_b: is_gt};\n  event ev\nend\n\ntransition Example(a: Uint128, b: Uint128)\n  c = builtin eq a b;  (*Is a equal to b? Returns a Bool.*)\n\n  d = builtin add a b; (*Add integer values a and b. Returns an integer of the same type.*)\n\n  e = builtin sub a b; (*Subtract b from a. Returns an integer of the same type.*)\n\n  f = builtin mul a b; (*Integer product of a and b. Returns an integer of the same type.*)\n\n  g = builtin div a b; (*Integer division of a by b. Returns an integer of the same type.*)\n\n  h = builtin rem a b; (*The remainder of integer division of a by b. Returns an integer of the same type.*)\n\n  i = builtin lt a b; (*Is a less than b? Returns a Bool.*)\n\n  j = builtin le a b; (*Is a less or equal to b? Returns a Bool.*)\n\n  k = builtin gt a b; (*Is a greater than b? Returns a Bool.*)\n\n  l = builtin ge a b; (*Is a greater or equal than b? Returns a Bool.*)\n\n  m = builtin pow a b; (*a raised to the power of b. Returns an integer of the same type as a.*)\n\n  p = builtin isqrt a; (*Computes the integer square root of i, i.e. the largest integer j such that j * j <= i. Returns an integer of the same type as i.*)\n\n  q = builtin to_nat a; (*Convert a value of type Uint32 to the equivalent value of type Nat.*)\n\n  r = builtin to_(u)int32/64/128/256 (*Convert a UintX / IntX or a String (that represents a decimal number) value to the result of Option UintX or Option IntX type. Returns Some res if the conversion succeeded and None otherwise. The conversion may fail when*)\nend\n')),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html#integer-types"},"readthedocs - Integers")))}d.isMDXComponent=!0}}]);