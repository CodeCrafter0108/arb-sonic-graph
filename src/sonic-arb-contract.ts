import {
  Arbed as ArbedEvent,
  Paused as PausedEvent,
  Unpaused as UnpausedEvent
} from "../generated/SonicArbContract/SonicArbContract"
import { Arbed, Paused, Unpaused } from "../generated/schema"

export function handleArbed(event: ArbedEvent): void {
  let entity = new Arbed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.executor = event.params.executor
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.profit = event.params.profit
  entity.fees = event.params.fees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
