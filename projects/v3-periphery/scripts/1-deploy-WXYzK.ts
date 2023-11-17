import { ethers, network, run } from 'hardhat'

const main = async () => {
  const WXYzKWithMintFunction = await ethers.getContractFactory('WXYzK')

  const WXYzK = await WXYzKWithMintFunction.deploy()

  console.log('WXYzK with mint function: ', WXYzK.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('error', error)
    process.exit(1)
  })
