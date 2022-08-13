// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// easier to just use openzeppelin - opensource library.
contract ManualToken {
    uint256 initialSupply;
    // could add a mint function
    // need an approve function to allow someone to use tokens. etc.
    mapping(address => uint256) public balanceOf;
    // address patrick is going to allow address of patrick's brother to use his address/balance combo.
    mapping(address => mapping(address => uint256)) public allowance;

    // transfer tokens: subtract from address amount and add to to address

    function transfer(
        address from,
        address to,
        uint256 amount
    ) public {
        balanceOf[from] = balanceOf[from] - amount;
        balanceOf[to] += amount;
    }

    // function transferFrom() {
    //     //
    // }
}
