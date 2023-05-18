console.clear();

const { ethers } = require('ethers');

const INFURA_ID  = '1686d734cca740a6b519a4902ec98ebd';
const provider   = new ethers.providers.JsonRpcProvider(`HTTP://127.0.0.1:7545`); // Ganache

const account1 = '0x948e4b6078F954415240D73D8F574a10710889f2';
const account2 = '0x60DED7d31Af78C99f881385056B67F04f9f53039';

const privateKey1 = '0x87d7f25d12ff59a3533ed08b75f2084488ea811d3a42bb20406dc07b80147689';
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {

    // show balance account1 befor transfer
    const senderBalanceBefor = await provider.getBalance(account1);
    console.log(`\n Sender Balance Befor : ${ethers.utils.formatEther(senderBalanceBefor)} ETH`);

    // show balance account2 befor transfer
    const recieverBalanceBefor = await provider.getBalance(account2);
    console.log(` reciever Balance Befor : ${ethers.utils.formatEther(recieverBalanceBefor)} ETH \n`);

    // Send Ether
    const tx = await wallet.sendTransaction({
        to: account2,
        value: ethers.utils.parseEther("1")
    })

    // Fetch Transaction
    await tx.wait();
    console.log(tx);

    // show balance account1 befor transfer
    const senderBalanceAfter = await provider.getBalance(account1);
    console.log(`\n Sender Balance After : ${ethers.utils.formatEther(senderBalanceAfter)} ETH`);

    // show balance account2 befor transfer
    const recieverBalanceAfter = await provider.getBalance(account2);
    console.log(` reciever Balance After : ${ethers.utils.formatEther(recieverBalanceAfter)} ETH\n`);
}

main()