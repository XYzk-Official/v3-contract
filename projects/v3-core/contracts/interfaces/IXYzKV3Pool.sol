// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IXYzKV3PoolImmutables.sol';
import './pool/IXYzKV3PoolState.sol';
import './pool/IXYzKV3PoolDerivedState.sol';
import './pool/IXYzKV3PoolActions.sol';
import './pool/IXYzKV3PoolOwnerActions.sol';
import './pool/IXYzKV3PoolEvents.sol';

interface IXYzKV3Pool is
    IXYzKV3PoolImmutables,
    IXYzKV3PoolState,
    IXYzKV3PoolDerivedState,
    IXYzKV3PoolActions,
    IXYzKV3PoolOwnerActions,
    IXYzKV3PoolEvents
{}
