console.clear();

const { ethers } = require('ethers');

const INFURA_ID  = 'f67125134e064cf094e2495c49323c68';
const provider   = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const account1 = '';
const account2 = '';

const privateKey1 = '';
const wallet = new ethers.Wallet(privateKey1, provider);