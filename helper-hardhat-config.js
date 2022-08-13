const { ethers } = require("hardhat")

const networkConfig = {
    4: {
        name: "rinkeby",
    },
    31337: {
        name: "localhost",
    },
    42: {
        name: "kovan",
    },
}

const developmentChains = ["hardhat", "localhost"]

const deployVariables = {
    name: "OurToken",
    symbol: "OT",
    supplyEth: "100000",
}

module.exports = {
    networkConfig,
    developmentChains,
    deployVariables,
}
