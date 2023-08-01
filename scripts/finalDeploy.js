const hre = require("hardhat");

async function main() {
  const lunch = await hre.ethers.getContractFactory("lunch");
  const contract = await lunch.deploy(); //instance of contract

  await contract.waitForDeployment();
  console.log("Address of contract:", contract.target);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
