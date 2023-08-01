import logo from "./logo.svg";
import "./App.css";
import abi from "./contract/lunch.json";
import { useState, useEffect } from "react";
const { ethers } = require("ethers");

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
      const contractAbi = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);

  return <div className="App"></div>;
}

export default App;
