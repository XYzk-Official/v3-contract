import { ethers, network } from 'hardhat'

async function main() {
  console.log('Deploying XYZKStableSwapTwoPoolInfo...')
  const contract = await ethers.getContractFactory('XYZKStableSwapTwoPoolInfo')
  const deployedContract = await contract.deploy()
  console.log('XYZKStableSwapTwoPoolInfo', deployedContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
