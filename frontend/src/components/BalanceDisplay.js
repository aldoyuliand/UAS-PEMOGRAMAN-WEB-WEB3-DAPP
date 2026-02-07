import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../contractData';

function BalanceDisplay() {
  const [totalDonations, setTotalDonations] = useState('0');

  const fetchTotalDonations = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        // Membuat instance kontrak untuk dibaca fungsinya
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        
        // Memanggil fungsi totalDonations() dari smart contract [cite: 161]
        const total = await contract.totalDonations();
        setTotalDonations(ethers.formatEther(total)); // Ubah Wei ke ETH [cite: 114]
      }
    } catch (error) {
      console.error("Error reading contract:", error);
    }
  };

  useEffect(() => {
    fetchTotalDonations();
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <p style={{ fontSize: '14px', color: '#86868b' }}>Total Contract Balance:</p>
      <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#007AFF' }}>
        {totalDonations} ETH
      </h3>
      <button 
        onClick={fetchTotalDonations}
        style={{ fontSize: '12px', color: '#007AFF', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        Refresh Data
      </button>
    </div>
  );
}

export default BalanceDisplay;