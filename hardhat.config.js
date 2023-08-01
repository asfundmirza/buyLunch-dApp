require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const Sepolia_URL = process.env.Sepolia_URL;
const Private_key = process.env.Private_key;
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: Sepolia_URL,
      accounts: [Private_key],
    },
  },
};
