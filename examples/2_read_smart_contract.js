const { ethers } = require('ethers');

const INFURA_ID  = 'f67125134e064cf094e2495c49323c68';
const provider   = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const ERC20_ABI  = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)"
]

const dai_contract_address = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const contract             = new ethers.Contract(dai_contract_address, ERC20_ABI, provider);

const main = async () => {
    const name = await contract.name();
        const symbol = await contract.symbol();
            const totalSupply = await contract.totalSupply();
                const balance = await contract.balanceOf('0xaAd7efd771864A5EA5c352Aa0ed0C70E716a0697');


    console.log(`\n read from this address ${dai_contract_address} \n`);        
        console.log(`name : ${name} \n`);
            console.log(`symbol: ${symbol} \n`);
                console.log(`totalSupply: ${totalSupply} \n`);
                    console.log(`balancOf: ${balance} \n`);
                        console.log(`balanceOf Formated: ${ethers.utils.formatEther(balance)} \n`);
}
 main();