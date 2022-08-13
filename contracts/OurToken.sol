// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// yarn add --dev @openzeppelin/contracts
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20 {
    // default decimals is 18

    constructor(
        uint256 initialSupply,
        string memory tokenName,
        string memory tokenSymbol
    ) ERC20(tokenName, tokenSymbol) {
        _mint(msg.sender, initialSupply);
    }
}
