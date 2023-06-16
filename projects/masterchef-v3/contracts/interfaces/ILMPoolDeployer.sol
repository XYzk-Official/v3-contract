// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./IBeraV3Pool.sol";
import "./ILMPool.sol";

interface ILMPoolDeployer {
    function deploy(IBeraV3Pool pool) external returns (ILMPool lmPool);
}
