const hre = require("hardhat");

async function main() {
  const PriceFeed = await hre.ethers.getContractFactory("PriceFeed");
  const priceFeed = await PriceFeed.deploy();

  await priceFeed.deployed();

  console.log(
    `PriceFeed deployed to ${priceFeed.address}`
  );

  const latestPrice = await priceFeed.getLatestPrice();
  console.log("The latest price is:", latestPrice);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
