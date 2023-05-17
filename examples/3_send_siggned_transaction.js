console.clear();

const { ethers } = require('ethers');

const INFURA_ID  = 'f67125134e064cf094e2495c49323c68';
const provider   = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);

const account1 = '0x6dAE04565cE8033553Eb4916a2c1Bc90C7Bf839B';
const account2 = '0x646D5CDbB9478464c7150cFce373aa378224c327';

const privateKey1 = 'e4a1c030381cd28d1dc6b574a1d794224d4c77d23585a6a97e7eb7ee54878f87';
const wallet = new ethers.Wallet(privateKey1, provider);
