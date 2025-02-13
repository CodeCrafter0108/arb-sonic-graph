import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { Arbed } from "../generated/schema"
import { Arbed as ArbedEvent } from "../generated/SonicArbContract/SonicArbContract"
import { handleArbed } from "../src/sonic-arb-contract"
import { createArbedEvent } from "./sonic-arb-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let executor = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let token = Address.fromString("0x0000000000000000000000000000000000000001")
    let amount = BigInt.fromI32(234)
    let profit = BigInt.fromI32(234)
    let fees = BigInt.fromI32(234)
    let newArbedEvent = createArbedEvent(executor, token, amount, profit, fees)
    handleArbed(newArbedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Arbed created and stored", () => {
    assert.entityCount("Arbed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Arbed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "executor",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Arbed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Arbed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "Arbed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "profit",
      "234"
    )
    assert.fieldEquals(
      "Arbed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fees",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
