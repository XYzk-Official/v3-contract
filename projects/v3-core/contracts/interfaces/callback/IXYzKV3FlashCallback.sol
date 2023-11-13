// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

interface IXYzKV3FlashCallback {
    function XYzKV3FlashCallback(uint256 fee0, uint256 fee1, bytes calldata data) external;
}
