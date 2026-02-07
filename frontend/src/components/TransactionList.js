import React, { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/transactions')
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setTransactions(result.data);
        }
      })
      .catch(err => console.error("Gagal ambil data backend:", err));
  }, []);

  return (
    <div className="transaction-container">
      {transactions.map(tx => (
        <div key={tx.id} style={{ 
          borderBottom: '1px solid #e5e5e5', 
          padding: '15px 0',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div>
            <p style={{ margin: 0, fontWeight: '500' }}>From: {tx.from}</p>
            <p style={{ margin: 0, fontSize: '12px', color: '#86868b' }}>{tx.timestamp}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ margin: 0, color: '#0071e3', fontWeight: 'bold' }}>{tx.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;