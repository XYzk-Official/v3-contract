// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./IXYzKV3Pool.sol";
import "./ILMPool.sol";

interface ILMPoolDeployer {
    function deploy(IXYzKV3Pool pool) external returns (ILMPool lmPool);
}
