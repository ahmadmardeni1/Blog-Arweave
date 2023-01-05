import { WarpFactory } from 'warp-contracts'
import { transactionId } from './transactionid'


/*
*  environment can be 'local' | 'testnet' | 'mainnet' | 'custom';
*/

const environment = 'testnet'
let warp
let contract

async function getContract() {
  if (environment == 'testnet') {
    warp = WarpFactory.forTestnet()
    contract = warp.contract(transactionId).connect(wallet)

  } else {
    throw new Error('Environment configured improperly...')
  }
  return contract
}

export {
  getContract
}