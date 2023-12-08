import { ethers, network } from 'hardhat'

async function main() {
  console.log('Deploying XYZKStableSwapLPFactory...')
  const contract = await ethers.getContractFactory('XYZKStableSwapLPFactory')
  const deployedContract = await contract.deploy()
  console.log('XYZKStableSwapLPFactory', deployedContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
