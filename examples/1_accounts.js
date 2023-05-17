const {ethers} = require('ethers');

const INFURA_ID = '';
const provider  = new ethers.provider.jsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const address = '';

const main = async () => {
    const balance = await provider.getBalance(address);
    console.log(`\n ETH Blanac of ${address} --> ${ethers.untils.formatEther(balance)} ETH`);
}

main()