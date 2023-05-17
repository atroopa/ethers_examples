const { ethers } = require('ethers');

const INFURA_ID = 'f67125134e064cf094e2495c49323c68';
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);


const address = '0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa';

const main = async () => {
    const balance = await provider.getBalance(address);
    console.log(`\n ETH Blanac of ${address} --> ${ethers.utils.formatEther(balance)} ETH`);
}

main();
