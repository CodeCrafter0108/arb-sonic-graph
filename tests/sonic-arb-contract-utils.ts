import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Arbed,
  Paused,
  Unpaused
} from "../generated/SonicArbContract/SonicArbContract"

export function createArbedEvent(
  executor: Address,
  token: Address,
  amount: BigInt,
  profit: BigInt,
  fees: BigInt
): Arbed {
  let arbedEvent = changetype<Arbed>(newMockEvent())

  arbedEvent.parameters = new Array()

  arbedEvent.parameters.push(
    new ethereum.EventParam("executor", ethereum.Value.fromAddress(executor))
  )
  arbedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  arbedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  arbedEvent.parameters.push(
    new ethereum.EventParam("profit", ethereum.Value.fromUnsignedBigInt(profit))
  )
  arbedEvent.parameters.push(
    new ethereum.EventParam("fees", ethereum.Value.fromUnsignedBigInt(fees))
  )

  return arbedEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
