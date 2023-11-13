import { tryVerify } from '@pancakeswap/common/verify'
import { ContractFactory } from 'ethers'
import { ethers, network } from 'hardhat'
import fs from 'fs'

type ContractJson = { abi: any; bytecode: string }
const artifacts: { [name: string]: ContractJson } = {
  // eslint-disable-next-line global-require
  XYzKV3PoolDeployer: require('../artifacts/contracts/XYzKV3PoolDeployer.sol/XYzKV3PoolDeployer.json'),
  // eslint-disable-next-line global-require
  XYzKV3Factory: require('../artifacts/contracts/XYzKV3Factory.sol/XYzKV3Factory.json'),
}

async function main() {
  const [owner] = await ethers.getSigners()
  const networkName = network.name
  console.log('owner', owner.address)

  let xyzkV3PoolDeployerAddress = ''
  let xyzkV3PoolDeployer
  const XYzKV3PoolDeployer = new ContractFactory(
    artifacts.XYzKV3PoolDeployer.abi,
    artifacts.XYzKV3PoolDeployer.bytecode,
    owner
  )

  xyzkV3PoolDeployer = await XYzKV3PoolDeployer.deploy()

  xyzkV3PoolDeployerAddress = xyzkV3PoolDeployer.address
  console.log('xyzkV3PoolDeployer', xyzkV3PoolDeployerAddress)

  let xyzkV3FactoryAddress = ''
  let xyzkV3Factory
  if (!xyzkV3FactoryAddress) {
    const XYzKV3Factory = new ContractFactory(artifacts.XYzKV3Factory.abi, artifacts.XYzKV3Factory.bytecode, owner)
    xyzkV3Factory = await XYzKV3Factory.deploy(xyzkV3PoolDeployerAddress)

    xyzkV3FactoryAddress = xyzkV3Factory.address
    console.log('xyzkV3Factory', xyzkV3FactoryAddress)
  }

  // Set FactoryAddress for xyzkV3PoolDeployer.
  await xyzkV3PoolDeployer.setFactoryAddress(xyzkV3FactoryAddress)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
