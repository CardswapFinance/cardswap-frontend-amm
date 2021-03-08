import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x72cd9AF80D94A4607B5B005a1b45042b50Cb5E2F', // TODO
  [ChainId.BSCTESTNET]: ''
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
