const { ethers } = require('ethers');

const INFURA_ID  = 'f67125134e064cf094e2495c49323c68';
const provider   = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);
const address    = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const ERC20_ABI  = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)"
]


const contract   = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {

};

main();