const { getNamedAccounts, deployments, network } = require("hardhat")
const { deployVariables, developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verifyOurToken")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const chainId = network.config.chainId

    // ERC20 constructor: name, symbol
    // Our constructor: initialsupply.

    const tokenName = deployVariables["name"]
    const tokenSymbol = deployVariables["symbol"]
    const initialSupply = ethers.utils.parseEther(deployVariables["supplyEth"])

    args = [initialSupply, tokenName, tokenSymbol]

    const ourToken = await deploy("OurToken", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(ourToken.address, args)
    }
    log("----------------------------------------------------------------------------")
}

module.exports.tags = ["Token"]
