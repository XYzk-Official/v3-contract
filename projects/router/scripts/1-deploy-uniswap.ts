import { ethers, network } from 'hardhat'

async function main() {
  console.log('Deploying UniswapV3Factory...')
  const contract = await ethers.getContractFactory('UniswapV3Factory')
  const deployedContract = await contract.deploy()
  console.log('UniswapV3Factory', deployedContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
