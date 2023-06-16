import { ContractFactory } from 'ethers'
import { ethers, network } from 'hardhat'
import fs from 'fs'

type ContractJson = { abi: any; bytecode: string }
const artifacts: { [name: string]: ContractJson } = {
  // eslint-disable-next-line global-require
  BeraV3Pool: require('../artifacts/contracts/BeraV3Pool.sol/BeraV3Pool.json'),
}

async function main() {
  const [owner] = await ethers.getSigners()
  const BeraV3PoolContract = new ContractFactory(artifacts.BeraV3Pool.abi, artifacts.BeraV3Pool.bytecode, owner)

  const beraV3PoolDeployer = await BeraV3PoolContract.deploy()

  console.log('beraV3PoolDeployer', beraV3PoolDeployer.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
