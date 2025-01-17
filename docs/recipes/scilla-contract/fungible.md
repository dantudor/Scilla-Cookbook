---
tags:
  - fungible
  - token
  - reference
  - contract
  - zrc-2
---

# Fungible Token

## What is a fungible token?

Fungible Tokens are an open standard for creating currencies. Fungibility is the property of goods or commodities whose individual units are essentially interchangeable, and each of its parts is indistinguishable from another part. An example is 1 ZIL can be traded for an equal value of 1 ZIL.

ZRC-2 defines a minimum interface that a smart contract must implement to allow fungible tokens to be managed, tracked, owned, and traded peer-to-peer via wallets or exchanges.

## How does it work?

The fungible contract has a state map called ```balances``` where it maps addresses (ByStr20) to a value of tokens represented by a Uint128. The amount of tokens that a user can be influenced by logic the fungible contract has. When a user wants to use these transactions in a sale, the contract spending the amount will check the fungible balance state to check if you have funds available to deduct.

The fungible contract gives a token holder the ability to set an ```allowance``` for any address. This allowance address will have a spend limit it is allowed to spend on behalf of the token holder.

:::note
You cannot arbotarily move fungible tokens without you being either the owner or by giving an address some allowance.
:::

The fungible contract comes in different flavours depending on what the user needs to leverage. The contracts have the following public transitions :

## Types of fungible contracts

### Non-mintable

:::tip
The 'non-mintable' fungible contract defines the most basic interface a ZRC-2 token can have. It is considered the safest fungible contract as there is no ```Mint``` transition to be abused.
:::

:::info
The fungible contracts have been audited by PwC
:::

```ocaml
(* @dev: Increase the allowance of an approved_spender over the caller tokens. Only token_owner allowed to invoke.   *)
(* param spender:      Address of the designated approved_spender.                                                   *)
(* param amount:       Number of tokens to be increased as allowance for the approved_spender.                       *)
transition IncreaseAllowance(spender: ByStr20, amount: Uint128)

(* @dev: Decrease the allowance of an approved_spender over the caller tokens. Only token_owner allowed to invoke. *)
(* param spender:      Address of the designated approved_spender.                                                 *)
(* param amount:       Number of tokens to be decreased as allowance for the approved_spender.                     *)
transition DecreaseAllowance(spender: ByStr20, amount: Uint128)

(* @dev: Moves an amount tokens from _sender to the recipient. Used by token_owner. *)
(* @dev: Balance of recipient will increase. Balance of _sender will decrease.      *)
(* @param to:  Address of the recipient whose balance is increased.                 *)
(* @param amount:     Amount of tokens to be sent.                                  *)
transition Transfer(to: ByStr20, amount: Uint128)

(* @dev: Move a given amount of tokens from one address to another using the allowance mechanism. The caller must be an approved_spender. *)
(* @dev: Balance of recipient will increase. Balance of token_owner will decrease.                                                        *)
(* @param from:    Address of the token_owner whose balance is decreased.                                                                 *)
(* @param to:      Address of the recipient whose balance is increased.                                                                   *)
(* @param amount:  Amount of tokens to be transferred.                                                                                    *)
transition TransferFrom(from: ByStr20, to: ByStr20, amount: Uint128)
```

### Mintable

:::warning
The 'mintable' fungible contract should be viewed skeptically as the ```contract_owner``` can abortarily ```Mint``` new tokens.
:::

```ocaml
...
(* @dev: Mint new tokens. Only contract_owner can mint.                      *)
(* @param recipient: Address of the recipient whose balance is to increase.  *)
(* @param amount:    Number of tokens to be minted.                          *)
transition Mint(recipient: ByStr20, amount: Uint128)

(* @dev: Burn existing tokens. Only contract_owner can burn.                      *)
(* @param burn_account: Address of the token_owner whose balance is to decrease.  *)
(* @param amount:       Number of tokens to be burned.                            *)
transition Burn(burn_account: ByStr20, amount: Uint128)
```

### Operatable

:::warning
The 'operatorable' fungible contract should be viewed skeptically as an ```operator``` can aborarily move tokens.
:::

```ocaml
(* @dev: Moves amount tokens from token_owner to recipient. _sender must be an operator of token_owner. *)
(* @dev: Balance of recipient will increase. Balance of token_owner will decrease.                      *)
(* @param from:        Address of the token_owner whose balance is decreased.                           *)
(* @param to:          Address of the recipient whose balance is increased.                             *)
(* @param amount:      Amount of tokens to be sent.                                                     *)
transition OperatorSend(from: ByStr20, to: ByStr20, amount: Uint128)
```

## Further Reading
