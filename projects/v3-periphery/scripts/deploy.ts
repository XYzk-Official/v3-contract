import { ethers, network, run } from 'hardhat'

const main = async () => {
  const { name } = network
  const [deployer] = await ethers.getSigners()

  const WBeraContract = await ethers.getContractFactory('WBERA')

  const WBera = await WBeraContract.deploy()

  console.log('WBera: ', WBera.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('error', error)
    process.exit(1)
  })
