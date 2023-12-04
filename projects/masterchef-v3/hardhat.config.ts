/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import type { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@openzeppelin/hardhat-upgrades";
import "@typechain/hardhat";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "solidity-docgen";
import "dotenv/config";

require("dotenv").config({ path: require("find-config")(".env") });

const ftmTest: NetworkUserConfig = {
  url: "https://rpc.testnet.fantom.network",
  chainId: 4002,
  accounts: [process.env.KEY_TESTNET!],
};

const lineaTest: NetworkUserConfig = {
  chainId: 59140,
  url: "https://rpc.goerli.linea.build",
  accounts: [process.env.KEY_TESTNET!],
};

const config = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    // testnet: bscTestnet,
    // mainnet: bscMainnet,
    testnet: lineaTest,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 999,
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts/",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  docgen: {
    pages: "files",
  },
};

export default config;
