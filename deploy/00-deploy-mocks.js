const { network } = require("hardhat");
const {
    developmentChain,
    DECIMALS,
    INITAL_ANSWERS,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    if (developmentChain.includes(network.name)) {
        log("Local network detected! deploying mocks...");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITAL_ANSWERS],
        });
        log("Mock deployed!");
        log("---------------------------------------");
    }
};

module.exports.tags = ["all", "mocks"];
