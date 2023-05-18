const { ethers } = require('ethers');

//const INFURA_ID  = 'f67125134e064cf094e2495c49323c68';
const provider   = new ethers.providers.JsonRpcProvider(`HTTP://127.0.0.1:7545`);
const address    = '0x06012c8cf97bead5deae237070f9587f8e7a266d';

const ERC20_ABI  = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",

    "event Transfer(address indexed from, address indexed to, uint amount)"
];


const contract   = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {

    const block = await provider.getBlockNumber();
    const transferEvent = await contract.queryFilter("Transfer", block - 5 , block);
    console.log(transferEvent)

};

main();