const { assert, expect } = require("chai")
const { inputToConfig } = require("@ethereum-waffle/compiler")
const { getNamedAccounts, deployments, ethers, network } = require("hardhat")
const { assertHardhatInvariant } = require("hardhat/internal/core/errors")
const { developmentChains, deployVariables } = require("../../helper-hardhat-config")

describe("OurToken", function () {
    const chainId = network.config.chainId
    beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer
        await deployments.fixture(["Token"]) // runs all deploy scripts
        ourtoken = await ethers.getContract("OurToken", deployer) // gets most recent ourtoken after we deploy
    })

    describe("constructor", function () {
        it("initializes the token correctly", async function () {
            const tokenSupply = (await ourtoken.totalSupply()).toString()
            const tokenName = await ourtoken.name()
            const tokenSymbol = await ourtoken.symbol()

            assert.equal(tokenSupply, ethers.utils.parseEther(deployVariables["supplyEth"]))
            assert.equal(tokenName, deployVariables["name"])
            assert.equal(tokenSymbol, deployVariables["symbol"])
        })
    })
})
