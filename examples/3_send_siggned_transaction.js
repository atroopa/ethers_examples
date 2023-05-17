console.clear();

const { ethers } = require('ethers');

const INFURA_ID  = '1686d734cca740a6b519a4902ec98ebd';
const provider   = new ethers.providers.JsonRpcProvider(`HTTP://127.0.0.1:7545`); // Ganache

const account1 = '0xcA27B24aa74703d401867A6744D625B1d56CF57e';
const account2 = '0xD965d6e0831d9BB79caC83b92D9fc2216125c960';

const privateKey1 = '0xafc6453bd6cd3df7b5a783a49dee5d38ee1bb0be7c3efb9564319e8fbc60a7d3';
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {

    // show balance account1 befor transfer
    const senderBalanceBefor = await provider.getBalance(account1);
    console.log(`\n Sender Balance Befor : ${senderBalanceBefor}`);

    // show balance account2 befor transfer
    const recieverBalanceBefor = await provider.getBalance(account2);
    console.log(` reciever Balance Befor : ${recieverBalanceBefor} \n`);

    // Send Ether
    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("0.028")
    })

    // Fetch Transaction
    await tx.wait();
    console.log(tx);

    // show balance account1 befor transfer
    const senderBalanceAfter = await provider.getBalance(account1);
    console.log(`\n Sender Balance After : ${senderBalanceAfter}`);

    // show balance account2 befor transfer
    const recieverBalanceAfter = await provider.getBalance(account2);
    console.log(` reciever Balance After : ${recieverBalanceAfter} \n`);
}

main()