import { ContractFactory } from 'ethers'
import { ethers, network, run } from 'hardhat'

type ContractJson = { abi: any; bytecode: string }

const artifacts: { [name: string]: ContractJson } = {
  NonfungibleTokenPositionDescriptorOffChain: require('../artifacts/contracts/NonfungibleTokenPositionDescriptorOffChain.sol/NonfungibleTokenPositionDescriptorOffChain.json'),
  // eslint-disable-next-line global-require
  NonfungiblePositionManager: require('../artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json'),
}

const main = async () => {
  const { name } = network
  const [owner] = await ethers.getSigners()
  const xyzkV3PoolDeployerAddress = '0x012684dbd63cCB0C66dCeD294CA72e7d45704D53'
  const xyzkV3FactoryAddress = '0x682f2407856Ee3fDfd4eA1636c978532Eb05584F'
  const WXYZK = '0xEB9Ee513943FcaeC858B74441B5A4205380b9560'
  const nonfungibleTokenPositionDescriptor = '0xe482A4d614aef5963f4C87C3bB47Db0B31595486'

  const NonfungiblePositionManager = new ContractFactory(
    artifacts.NonfungiblePositionManager.abi,
    artifacts.NonfungiblePositionManager.bytecode,
    owner
  )

  const nonfungiblePositionManager = await NonfungiblePositionManager.deploy(
    xyzkV3PoolDeployerAddress,
    xyzkV3FactoryAddress,
    WXYZK,
    nonfungibleTokenPositionDescriptor
  )
  console.log('nonfungiblePositionManager', nonfungiblePositionManager.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('error', error)
    process.exit(1)
  })
