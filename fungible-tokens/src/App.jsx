// import React ,{useState}from 'react'
// import Web3 from 'web3'


// function App() {
//   const [amount, setAmount] = useState(0)
//   const [account, setAccount] = useState('')
//   const [balance, setBalance] = useState(0)

//   const web3 = new Web3(new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/4e3461ff9766436abbbad5e8334dc6d2"))

//   const abi = [
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "recipient",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "mint",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "recipient",
//           "type": "address"
//         },
//         {
//           "internalType": "uint256",
//           "name": "amount",
//           "type": "uint256"
//         }
//       ],
//       "name": "transfer",
//       "outputs": [
//         {
//           "internalType": "bool",
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "uint256",
//           "name": "initialSupply",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//     },
//     {
//       "inputs": [
//         {
//           "internalType": "address",
//           "name": "account",
//           "type": "address"
//         }
//       ],
//       "name": "balanceOf",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "inputs": [],
//       "name": "totalSupply",
//       "outputs": [
//         {
//           "internalType": "uint256",
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//     }
//   ]

//   const address = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8"

//   const contract = new web3.eth.Contract(abi, address)
//       function mint(){
//         // contract.methods.mint(account,amount).send({from:account})
//         contract.methods.mint(account,amount).call()
//       }

//       function transfer(){
//         contract.methods.transfer(account,amount).send({from:account})
//       }

//       function balanceOf(){
//         contract.methods.balanceOf(account).call().then(res=>setBalance(res))
//       }
//   return (
//     <div>
//       <h1>Fungible Tokens</h1>
//       <input type="text" placeholder="Account" onChange={(e)=>setAccount(e.target.value)}/>
//       <input type="text" placeholder="Amount" onChange={(e)=>setAmount(e.target.value)}/>
//       <button onClick={mint}>Mint</button>
//       <button onClick={transfer}>Transfer</button>
//       <button onClick={balanceOf}>BalanceOf</button>
//       <h2>Balance: {balance}</h2>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react';
import Web3 from 'web3';

function App() {
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('0');

  const web3 = new Web3('https://sepolia.infura.io/v3/4e3461ff9766436abbbad5e8334dc6d2');

  const abi = [
    // ... (your existing ABI)
  ];

  const address = "0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8";
  const contract = new web3.eth.Contract(abi, address);

  async function mint() {
    try {
      await contract.methods.mint(account, amount).send({ from: account });
      await balanceOf();
    } catch (error) {
      console.error('Minting failed:', error);
    }
  }

  async function transfer() {
    try {
      await contract.methods.transfer(account, amount).send({ from: account });
      await balanceOf();
    } catch (error) {
      console.error('Transfer failed:', error);
    }
  }

  async function balanceOf() {
    try {
      const result = await contract.methods.balanceOf(account).call();
      setBalance(result);
    } catch (error) {
      console.error('Balance check failed:', error);
    }
  }

  // return (

  //   <div>
  //     <h1>Fungible Tokens</h1>
  //     <input type="text" placeholder="Account" onChange={(e) => setAccount(e.target.value)} /> <br />
  //     <input type="text" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} /> <br />
  //     <button onClick={mint}>Mint</button>
  //     <button onClick={transfer}>Transfer</button>
  //     <button onClick={balanceOf}>BalanceOf</button>
  //     <h2>Balance: {balance}</h2>
  //   </div>
  // );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
       <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-4xl font-bold mb-6">Fungible Tokens</h1>
      <div className="flex flex-col w-full max-w-md">
        <input
          type="text"
          placeholder="Account Address"
          className="mb-4 p-2 border rounded-lg"
          onChange={(e) => setAccount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          className="mb-4 p-2 border rounded-lg"
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="flex justify-between mb-4">
          <button onClick={mint} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Mint</button>
          <button onClick={transfer} className="px-4 py-2 bg-green-500 text-white rounded-lg">Transfer</button>
          <button onClick={balanceOf} className="px-4 py-2 bg-gray-500 text-white rounded-lg">Balance Of</button>
        </div>
      </div>
      <h2 className="text-2xl mt-4">Balance: {balance}</h2>
      </form>
    </div>
  );
}


export default App;