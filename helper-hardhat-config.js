const networkConfig = {
    1: {
        name: "mainnet",
        ethUsdPriceFeed: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
    },
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
};

const developmentChain = ["hardhat", "localhost"];
const DECIMALS = 8;
const INITAL_ANSWERS = 157949000000;

module.exports = {
    networkConfig,
    developmentChain,
    DECIMALS,
    INITAL_ANSWERS,
};
