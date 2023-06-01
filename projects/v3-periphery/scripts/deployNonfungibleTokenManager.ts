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
  const beraV3PoolDeployerAddress = '0x4fec5eFc5644C04d8131623a3C0f91850D6b9a49'
  const beraV3FactoryAddress = '0x5774AC0d203B95b3988A2a939e3611C5C3082e36'
  const WBERA = '0x11DC191B1D664fcE05565A456C80aE81AB4914e9'
  const nonfungibleTokenPositionDescriptor = '0x99CA5A05948468da7218768250afE637bFc0Bd9c'

  const NonfungiblePositionManager = new ContractFactory(
    artifacts.NonfungiblePositionManager.abi,
    artifacts.NonfungiblePositionManager.bytecode,
    owner
  )

  const nonfungiblePositionManager = await NonfungiblePositionManager.deploy(
    beraV3PoolDeployerAddress,
    beraV3FactoryAddress,
    WBERA,
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
