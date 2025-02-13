import { Arbed as ArbedEvent } from "../generated/SonicArbContract/SonicArbContract";
import { Arbed } from "../generated/schema";

export function handleArbed(event: ArbedEvent): void {
  let entity = new Arbed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.executor = event.params.executor;
  entity.token = event.params.token;
  entity.amount = event.params.amount;
  entity.profit = event.params.profit;
  entity.fees = event.params.fees;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
