// function deployFunc() {
//     console.log("Hiii");
// }
// module.exports.default = deployFunc;
const { network } = require("hardhat");
const { networkConfig, developmentChain } = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainID = network.config.chainId;

    // const ethUsdPriceFeedAddress = networkConfig[chainID]["ethUsdPriceFeed"];
    let ethUsdPriceFeedAddress;
    if (developmentChain.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator");
        ethUsdPriceFeedAddress = ethUsdAggregator.address;
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainID]["ethUsdPriceFeed"];
    }

    const FundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true,
    });
    log("-----------------------");
};

module.exports.tags = ["all", "fundme"];
