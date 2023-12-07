// SPDX-License-Identifier: BUSL-1.1
pragma solidity >=0.5.0;

interface IBunswapV3LmPool {
    function accumulateReward(uint32 currTimestamp) external;

    function crossLmTick(int24 tick, bool zeroForOne) external;
}
