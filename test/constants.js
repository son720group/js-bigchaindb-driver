import test from 'ava'
import { Transaction, Ed25519Keypair } from '../src'
// TODO: Find out if ava has something like conftest, if so put this there.

// TODO: We're adding `Math.random()` here to never create the same transaction
// twice.
export const assetMessage = { assetMessage: Math.random() }
export const metaDataMessage = { metaDataMessage: 'metaDataMessage' }

export const alice = new Ed25519Keypair()
export const aliceCondition = Transaction.makeEd25519Condition(alice.publicKey)
export const aliceOutput = Transaction.makeOutput(aliceCondition)
export const createTx = Transaction.makeCreateTransaction(
    assetMessage,
    metaDataMessage,
    [aliceOutput],
    alice.publicKey
)
export const transferTx = Transaction.makeTransferTransaction(
    createTx,
    metaDataMessage,
    [aliceOutput],
    0
)

export const bob = new Ed25519Keypair()
export const bobCondition = Transaction.makeEd25519Condition(bob.publicKey)
export const bobOutput = Transaction.makeOutput(bobCondition)


// TODO: https://github.com/avajs/ava/issues/1190
test('', () => 'dirty hack. TODO: Exclude this file from being run by ava')
