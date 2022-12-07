import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'zero',
    prefix: 25,
    ipfsGateway: 'https://gamedao.infura-ipfs.io/ipfs/',
    dataSource: {
        archive: 'http://localhost:8888/graphql',
        chain: 'wss://node.dev.sub.zero.io',
    }
}

export default config