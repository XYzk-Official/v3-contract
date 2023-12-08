import { ethers, network } from 'hardhat'

async function main() {
  console.log('Deploying XYZKStableSwapFactory...')
  const contract = await ethers.getContractFactory('XYZKStableSwapFactory')
  const deployedContract = await contract.deploy()
  console.log('XYZKStableSwapFactory', deployedContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
