/* eslint-disable camelcase */
import { ethers, run, network } from "hardhat";

async function main() {
  // Get network data from Hardhat config (see hardhat.config.ts).
  const networkName = network.name;
  // Check if the network is supported.
  console.log(`Deploying to ${networkName} network...`);

  // Compile contracts.

  const nonfungiblePositionManagerAddress = "0x84b27c0720c51f68F8A93de7862D361263b10711";
  const beraToken = "0xC938173CccA0f3C917A0dC799B3dbEF89626fE2B";
  const WBera = "0x11DC191B1D664fcE05565A456C80aE81AB4914e9";
  const MasterChefV3 = await ethers.getContractFactory("MasterChefV3");
  const masterChefV3 = await MasterChefV3.deploy(beraToken, nonfungiblePositionManagerAddress, WBera);

  console.log("masterChefV3 deployed to:", masterChefV3.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
