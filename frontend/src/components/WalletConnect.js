import { ethers } from "ethers";
import { useState } from 'react';

function WalletConnect() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []); 
        const signer = await provider.getSigner(); 
        const address = await signer.getAddress(); 
        
        const balanceWei = await provider.getBalance(address);
        const balanceEth = ethers.formatEther(balanceWei); 

        setAccount(address);
        setBalance(balanceEth);
      } catch (error) {
        console.error("Error connecting wallet:", error);
        alert("Gagal menghubungkan wallet. Pastikan MetaMask terpasang."); 
      }
    } else {
      alert("Silakan install MetaMask!"); 
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button 
        onClick={connectWallet}
        style={{
          padding: '10px 20px',
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#007AFF', 
          color: 'white',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {account ? `Connected: ${account.substring(0, 6)}...` : "Connect MetaMask"}
      </button>
      {balance && <p style={{ marginTop: '10px' }}>Balance: {balance} ETH</p>}
    </div>
  );
}

export default WalletConnect;