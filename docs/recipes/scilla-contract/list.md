---
tags:
  - List
---

# List

A list is a data type which can hold several instances of a singular type.

Consider the below definition of creating a List.

```ocaml
scilla_version 0
(***************************************************)
(* List operations                                 *)
(***************************************************)
import ListUtils BoolUtils

library List

let empty_list = Nil {Uint32}

let one   = Uint32 1 (* numbers 1, 2, 3 and 4 to use below *)
let two   = Uint32 2
let three = Uint32 3
let four = Uint32 4

let create_3el_list = (* utility to create a list with 3 elements *)
  fun (e1 : Uint32) =>
  fun (e2 : Uint32) =>
  fun (e3 : Uint32) =>
  let nil = empty_list in
      let le3 = Cons {Uint32} e3 empty_list in (* insert in front *)
      let le2e3 = Cons {Uint32} e2 le3 in
      Cons {Uint32} e1 le2e3 (* [e1, e2, e3] *)

let equal = fun (a: Uint32) => fun(b: Uint32) =>
  builtin eq a b

let not_equal = fun (a: Uint32) => fun(b: Uint32) =>
  let equal = builtin eq a b in
  negb equal (* from BoolUtils *)

(* utility to remove all elements that equal a value from a lit *)
let remove_elements_from_list = fun(value: Uint32) => fun(l: List Uint32) =>
  let f = not_equal value in
  let filterUint32 = @list_filter Uint32 in (* from ListUtils *)
  filterUint32 f l

(* check if two list l1 and l2 have no common elements:         *)
(* for each element in the first list, we check if it exists    *)
(* in the second list. If any such element exists, we return    *)
(* False (not disjunct) otherwise we return True                *)

(* return true if l[i] != value for all elements l[i] in the list l *)
let all_elements_different_from_value =
  fun(l: List Uint32) =>
  fun(value: Uint32) =>
    let f = not_equal value in
    let for_allUint32 = @list_forall Uint32 in (* from ListUtiles *)
    for_allUint32 f l (* checks if all elements are NOT equal to value *)

(* return true if no element in l1 is also in l2, or, put differently,  *)
(* check for each element in l1 if all elements in l2 are different     *)
let are_lists_disjunct =
  fun(l1: List Uint32) =>
  fun(l2: List Uint32) =>
    let f = all_elements_different_from_value l2 in (* apply above expression to l2 *)
    let for_allUint32 = @list_forall Uint32 in
    for_allUint32 f l1 (* apply now this f to l1 *)


(* count the number of occurences of a value in a list *)
let count_in_list =
  fun(l: List Uint32) =>
  fun(value: Uint32) =>
    let f = (* increase accumulator if element equals value *)
      fun(acc: Uint32) => fun(element: Uint32) =>
      let equal = builtin eq value element in
      match equal with
      | False => acc
      | True => builtin add acc one
      end in
    let init = Uint32 0 in (* initial value of accumulator *)
    let folder = @list_foldl Uint32 Uint32 in
    folder f init l

(* check if all elements in a list are unique                               *)
(* we apply above counter to each element and check if it is exactly 1      *)
(* if it is bigger than 1 for an element we are done and the result is fale *)
let is_unique =
  fun(l: List Uint32) =>
    let f = fun(value: Uint32) =>
      let num = count_in_list l value in
      builtin eq num one in
    let for_allUint32 = @list_forall Uint32 in
    for_allUint32 f l (* apply now this f to l1 *)


contract List()

field list : List Uint32 = empty_list
field doubles : Map Uint32 Uint32 = Emp Uint32 Uint32 (* doubles[l[i]]=2*l[i] *)

(* create lists [1,2,3] or [1,2,1] and store in field list *)
transition Create123()
  l = create_3el_list one two three; (* [1, 2, 3] *)
  list := l
end

transition Create121()
  l = create_3el_list one two one; (* [1, 2, 1] *)
  list := l
end

(* access n-th element of a list using list_nth, and emit it *)
transition ElementAtPosition(n: Uint32)
  l <- list;
  el_opt =
    let nth = @list_nth Uint32 in (* from ListUtils *)
    nth n l; (* note that indexing starts at 0 *)
  match el_opt with (* Option is None if no element with index i in list *)
  | None => (* index is out of bounds: no such element *)
    ev = {_eventname: "ElementAtPositionFailure"};
    event ev
  | Some el => (* list[i] = el *)
    ev = {_eventname: "ElementAtPositionSuccess"; index: n; element: el};
    event ev
  end
end

(* remove elements from list that equal to value *)
transition RemoveIfEqualtTo(value: Uint32)
  l <- list;
  list_without_values = remove_elements_from_list value l;
  list := list_without_values
end

(* compare the lists [1,2,3] and [3 2 1] *)
transition Compare123To321()
  l123 = create_3el_list one two three; (* [1, 2, 3] *)
  l321 = create_3el_list three two one; (* [3, 2, 1] *)
  list_zip_eq_with = @list_zip_with Uint32 Uint32 Bool; (* from ListUtils *)
  r = list_zip_eq_with equal l123 l321;
  ev = {_eventname : "Compare123To321"; result: r};
  event ev
end

(* compute the element wise difference of 2 lists *)
transition Difference321Minus111()
    l321 = create_3el_list three two one; (* [3, 2, 1] *)
    l111 = create_3el_list one one one; (* [1, 1, 1] *)
    list_zip_diff = @list_zip_with Uint32 Uint32 Uint32; (* from ListUtils *)
    r = let diff = fun (a: Uint32) => fun(b: Uint32) => builtin sub a b in (* diff = a - b *)
      list_zip_diff diff l321 l111;
    ev = {_eventname: "Difference321Minus111"; result: r};
    event ev
end

(* compute 2*l[i] and store in doubles[l[i]] *)
procedure Twice(v: Uint32)
  res =
    let two = Uint32 2 in (* res = 2 * v *)
    builtin mul v two;
  doubles[v] := res (* store in map *)
end
transition ComputeDoubles()
  l <- list;
  forall l Twice (* apply Twice(.) to each element *)
end

(* sum the elements of a list using a left fold: res = 1 + 1 + 2 = 4 *)
transition SumElements112()
  l = create_3el_list one one two; (* [1, 1, 2] *)
  folder = @list_foldl Uint32 Uint32; (* accumulator and list elements are of type Uint32 *)
  sum_of_elements =
    let init = Uint32 0 in (* initialize the accumulator at 0 *)
    let addition = (* add elements to accumulator: a + b *)
      fun(a: Uint32) => fun(b: Uint32) =>
        builtin add a b in
    folder addition init l;
  ev = {_eventname: "SumElements112"; sum: sum_of_elements};
  event ev
end

(* check if two lists l1 and l2 have at least one common element  *)
(* if they have, they are not disjunct                            *)
transition AreListsDisjunct()
  (* create a few lists for testing *)
  l1 = Cons {Uint32} one empty_list;      (* [1] *)
  l2 = Cons {Uint32} two empty_list;      (* [2] *)
  l32 = Cons {Uint32} three l2;           (* [3,2] *)
  l41 = Cons {Uint32} four l1;            (* [4,1] *)
  l111 = create_3el_list one one one;     (* [1,1,1] *)
  l131 = create_3el_list one three one;   (* [1,3,1] *)
  l243 = create_3el_list two four three;  (* [2,4,3] *)
  (* apply are_lists_disjunct to some pair of the lists *)
  check_1_2       = are_lists_disjunct l1 l2;         (* True *)
  check_1_32      = are_lists_disjunct l1 l32;       (* True *)
  check_2_32      = are_lists_disjunct l2 l32;       (* False *)
  check_32_41     = are_lists_disjunct l32 l41;     (* True *)
  check_1_111     = are_lists_disjunct l1 l111;     (* False *)
  check_111_2     = are_lists_disjunct l111 l2;     (* True *)
  check_32_111    = are_lists_disjunct l32 l111;   (* True *)
  check_111_131   = are_lists_disjunct l111 l131; (* False *)
  check_111_243   = are_lists_disjunct l111 l243; (* True *)
  (* emit results *)
  ev = {_eventname: "AreListsDisjunct";
        check_1_2: check_1_2;
        check_1_32: check_1_32;
        check_2_32: check_2_32;
        check_32_41: check_32_41;
        check_1_111: check_1_111;
        check_111_2: check_111_2;
        check_32_111: check_32_111;
        check_111_131: check_111_131;
        check_111_243: check_111_243
  };
  event ev
end

(* count the number of occurences of a value in a list *)
transition Count()
  (* create a few lists for testing *)
  l111 = create_3el_list one one one;     (* [1,1,1] *)
  l131 = create_3el_list one three one;   (* [1,3,1] *)
  l243 = create_3el_list two four three;  (* [2,4,3] *)
  (* apply count_in_list to some value and the test lists *)
  check_1_in_empty= count_in_list empty_list one; (* 0 *)
  check_1_in_243  = count_in_list l243 one; (* 0 *)
  check_1_in_131  = count_in_list l131 one; (* 2 *)
  check_1_in_111  = count_in_list l111 one; (* 3 *)
  (* emit results *)
  ev = {_eventname: "Count";
        check_1_in_empty: check_1_in_empty;
        check_1_in_243: check_1_in_243;
        check_1_in_131: check_1_in_131;
        check_1_in_111: check_1_in_111
  };
  event ev
end

transition CheckUniqueness()
  (* create a few lists for testing *)
  l1 = Cons {Uint32} one empty_list;      (* [1] *)
  l123 = create_3el_list one two three;   (* [1,2,3] *)
  l131 = create_3el_list one three one;   (* [1,3,1] *)
  l311 = create_3el_list three one one;   (* [3,1,1] *)
  (* apply is_uniqe to some lists *)
  chk_empty = is_unique empty_list; (* true *)
  chk_1     = is_unique l1;         (* true *)
  chk_123   = is_unique l123;       (* true *)
  chk_131   = is_unique l131;       (* false *)
  chk_311   = is_unique l311;       (* false *)
  (* emit results *)
  ev = {_eventname: "CheckUniqueness";
        chk_empty: chk_empty;
        chk_1: chk_1;
        chk_123: chk_123;
        chk_131: chk_131;
        chk_311: chk_311
  };
  event ev
end
```

## User Defined List Functions

The below snippets are user defined library snippets which involve the List type.

### listByStr20Contains

```ocaml
let listByStr20Contains =
  fun(list: List ByStr20) =>
  fun(bs: ByStr20) =>
    let listMemByStr20 = @list_mem ByStr20 in
      listMemByStr20 eqByStr20 bs list
```

### listByStr20Excludes

```ocaml
let listByStr20Excludes =
  fun(list: List ByStr20) =>
  fun(bs: ByStr20) =>
    let b = listByStr20Contains list bs in negb b
```

### listByStr20FilterOut

```ocaml
let listByStr20FilterOut =
  fun(list: List ByStr20) =>
  fun(bs: ByStr20) =>
    let listByStr20Filter = @list_filter ByStr20 in
    let fn = fun(v: ByStr20) =>
      let b = builtin eq v bs in
       negb b in
      listByStr20Filter fn list
```

## Further Reading

[TheDrBee - List.Scilla](https://github.com/TheDrBee/oSCILLAtor/blob/24e03d7f14802f84a1db4c183031d1f916eeac88/contracts/List.scilla)
