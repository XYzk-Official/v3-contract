// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;

import '@xyzk/v3-core/contracts/interfaces/IXYzKV3Factory.sol';
import '@xyzk/v3-core/contracts/interfaces/IXYzKV3Pool.sol';

import './PeripheryImmutableState.sol';
import '../interfaces/IPoolInitializer.sol';

/// @title Creates and initializes V3 Pools
abstract contract PoolInitializer is IPoolInitializer, PeripheryImmutableState {
    /// @inheritdoc IPoolInitializer
    function createAndInitializePoolIfNecessary(
        address token0,
        address token1,
        uint24 fee,
        uint160 sqrtPriceX96
    ) external payable override returns (address pool) {
        require(token0 < token1);
        pool = IXYzKV3Factory(factory).getPool(token0, token1, fee);

        if (pool == address(0)) {
            pool = IXYzKV3Factory(factory).createPool(token0, token1, fee);
            IXYzKV3Pool(pool).initialize(sqrtPriceX96);
        } else {
            (uint160 sqrtPriceX96Existing, , , , , , ) = IXYzKV3Pool(pool).slot0();
            if (sqrtPriceX96Existing == 0) {
                IXYzKV3Pool(pool).initialize(sqrtPriceX96);
            }
        }
    }
}
