/* eslint-disable camelcase */
import { ethers, run, network } from "hardhat";

async function main() {
  // Get network data from Hardhat config (see hardhat.config.ts).
  const networkName = network.name;
  // Check if the network is supported.
  console.log(`Deploying to ${networkName} network...`);

  // Compile contracts.

  const nonfungiblePositionManagerAddress = "0xA2ABA85196e3F7FFDD6e6802b12049d67ceE58bA";
  const xyzkToken = "0x707dc1041dc702a83F7a0af57dDe1a3cdAC9643e";
  const WXYzK = "0xEB9Ee513943FcaeC858B74441B5A4205380b9560";
  const MasterChefV3 = await ethers.getContractFactory("MasterChefV3");
  const masterChefV3 = await MasterChefV3.deploy(xyzkToken, nonfungiblePositionManagerAddress, WXYzK);

  console.log("masterChefV3 deployed to:", masterChefV3.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
