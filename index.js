const Web3 = require('web3')   // creating web3 instance 
const solc = require('solc')

async function webthreeandsolc(){
   
    web3 = new Web3('http://127.0.0.1:8545') ;// assigning contract to variable. use http://
    let accounts = await web3.eth.getAccounts(); //assigning accounts from BC using eth.getAccounts()
    console.log(accounts);
    let balance = await web3.eth.getBalance(accounts[0]) //finding account balance
    console.log ("balannce", balance); 
    let balanceInether = web3.utils.fromWei(balance, 'ether')  //converting toether
    
}

webthreeandsolc();