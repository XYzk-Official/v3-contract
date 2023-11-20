// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

interface IXYzKV3SwapCallback {
    function xyzkV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata data) external;
}
