import React ,{useState}from 'react'
import Web3 from 'web3'


function App() {
  const [amount, setAmount] = useState(0)
  const [account, setAccount] = useState('')
  const [balance, setBalance] = useState(0)

  const web3 = new Web3(new Web3.providers.HttpProvider("https://sepolia.infura.io/v3/4e3461ff9766436abbbad5e8334dc6d2"))

  const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "initialSupply",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]

  const address = "0x5c2b3fe7df448424b0c0d1a320da7b28114b6343"

  const contract = new web3.eth.Contract(abi, address)

    console.log(contract)
      function mint(){
        // contract.methods.mint(account,amount).send({from:account})
        contract.methods.mint(account,amount).call().then((e)=>{
          console.log(e);
        }).catch((e)=>{
          console.log(e);
        })
      }

      function transfer(){
        contract.methods.transfer(account,amount).send({from:account})
      }

      function balanceOf(){
        contract.methods.balanceOf(account).call().then(res=>setBalance(res))
      }
  return (
    <div className='h-screen w-screen flex flex-wrap bg-slate-400 rounded-lg shadow-md items-center justify-center m-8'>
      <div className='flex flex-col items-center justify-center space-x-4 bg-stone-100 rounded-lg p-7'>
      <h1 className='font-bold py-9 text-xl'>Fungible Tokens</h1>
       <input className='p-2 border-spacing-2 bg-gray-500 rounded-md ' type="text" placeholder="Account" onChange={(e)=>setAccount(e.target.value)}/> <br />
       <input className='p-2 border-spacing-2 bg-gray-500 rounded-md ' type="text" placeholder="Amount" onChange={(e)=>setAmount(e.target.value)}/>  <br />
       <button className="bg-blue-500 rounded-md p-2 shadow-md w-3/4" onClick={mint}>Mint</button> <br />
       <button className="bg-blue-500 rounded-md p-2 shadow-md w-3/4" onClick={transfer}>Transfer</button> <br />
       <button className="bg-blue-500 rounded-md p-2 shadow-md w-3/4" onClick={balanceOf}>BalanceOf</button> <br />
       <h2>Balance: {balance}</h2>
      </div>
  
     </div>
   )
 }

 export default App


// import { useEffect, useState } from "react";
// import Web3 from "web3";
// import "./App.css";

// function App() {
//   const [account, setAccount] = useState("");
//   const [contract, setContract] = useState(null);
//   const [balance, setBalance] = useState("0");
//   const [amount, setAmount] = useState("");
//   const [recipient, setRecipient] = useState("");

//   useEffect(() => {
//     const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

//     const abi = [
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "recipient",
//             "type": "address"
//           },
//           {
//             "internalType": "uint256",
//             "name": "amount",
//             "type": "uint256"
//           }
//         ],
//         "name": "mint",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "recipient",
//             "type": "address"
//           },
//           {
//             "internalType": "uint256",
//             "name": "amount",
//             "type": "uint256"
//           }
//         ],
//         "name": "transfer",
//         "outputs": [
//           {
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//           }
//         ],
//         "stateMutability": "nonpayable",
//         "type": "function"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "uint256",
//             "name": "initialSupply",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//       },
//       {
//         "inputs": [
//           {
//             "internalType": "address",
//             "name": "account",
//             "type": "address"
//           }
//         ],
//         "name": "balanceOf",
//         "outputs": [
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//       },
//       {
//         "inputs": [],
//         "name": "totalSupply",
//         "outputs": [
//           {
//             "internalType": "uint256",
//             "name": "",
//             "type": "uint256"
//           }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//       }
//     ];

//     const address = "0x707dD469E0d8fC09Ace4f91Eccb0D6871FC986FA";

//     async function initializeContract() {
//       const accounts = await web3.eth.requestAccounts();
//       setAccount(accounts[0]);
      
//       const contractInstance = new web3.eth.Contract(abi, address);
//       setContract(contractInstance);
//     }

//     initializeContract();
//   }, []);

//   useEffect(() => {
//     if (contract && account) {
//       loadBalance();
//     }
//   }, [contract, account]);

//   async function loadBalance() {
//     if (contract && account) {
//       try {
//         const result = await contract.methods.balanceOf(account).call();
//         setBalance(result);
//       } catch (error) {
//         console.error("Balance check failed:", error);
//       }
//     }
//   }

//   async function mint() {
//     if (contract && account) {
//       try {
//         await contract.methods.mint(recipient, amount).send({ from: account });
//         await loadBalance();
//       } catch (error) {
//         console.error("Minting failed:", error);
//       }
//     }
//   }

//   async function transfer() {
//     if (contract && account) {
//       try {
//         await contract.methods.transfer(recipient, amount).send({ from: account });
//         await loadBalance();
//       } catch (error) {
//         console.error("Transfer failed:", error);
//       }
//     }
//   }

//   return (
//     <div className="h-screen w-full flex flex-wrap items-center justify-center bg-slate-400 rounded-lg p-5">
//       <header className="App-header">
//         Fungible Token Interface
//         <p>Your Account: {account}</p>
//         <p>Your Balance: {balance}</p>
//         <input
//           type="text"
//           placeholder="Recipient Address"
//           onChange={(e) => setRecipient(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Amount"
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <button onClick={mint}>Mint</button>
//         <button onClick={transfer}>Transfer</button>
//       </header>
//     </div>
//   );
// }

// export default App;