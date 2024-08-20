// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BitcoinPrice {
    string public latestPrice;
    address public oracle;

    constructor() {
        oracle = msg.sender;
    }

    function updatePrice(string memory _newPrice) public {
        require(msg.sender == oracle, "Only the Oracle can update");
        latestPrice = _newPrice;
    }
}