const { ethers } = require('ethers');

const INFURA_ID  = 'f67125134e064cf094e2495c49323c68';
const provider   = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);

const account1 = '0x6dAE04565cE8033553Eb4916a2c1Bc90C7Bf839B';
const account2 = '0x646D5CDbB9478464c7150cFce373aa378224c327';

const privateKey1 = 'e4a1c030381cd28d1dc6b574a1d794224d4c77d23585a6a97e7eb7ee54878f87';
const address     = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'; // chainlink contract address
const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)"
];

const wallet      = new ethers.Wallet(privateKey1, provider);
const contract    = new ethers.Contract(address, ERC20_ABI , provider);


const main = async () => {
    
    const balance = await contract.balanceOf(account1) - 10;

    console.log(`\n Reading From address ${address} \n`);
    console.log(`Balance Of Sender ${balance} \n`);

    const contractWithWallet = contract.connect(wallet);
    const tx = await contractWithWallet.transfer(account2, balance);
    await tx.wait();

    console.log(tx);

    const balanceOfSender = await contract.balanceOf(account1);
    const balancOfReciever = await contract.balancOf(account2);

    console.log(`balance Of account sender: ${balanceOfSender}`);
    console.log(`balance of acount reciever: ${balancOfReciever}`);
}

main()