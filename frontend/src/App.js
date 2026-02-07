import React from 'react';
import WalletConnect from './components/WalletConnect';
import TransactionList from './components/TransactionList';
import BalanceDisplay from './components/BalanceDisplay'; // Tambahkan ini
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="logo">Web3 Dashboard</h1>
        <WalletConnect />
      </header>
      
      <main className="app-content">
        <section className="card">
          <h2>Contract Stats</h2>
          <BalanceDisplay /> {/* Tampilkan di sini */}
        </section>

        <section className="card">
          <h2>Recent Transactions</h2>
          <p className="subtitle">Data from Node.js Backend API [cite: 37]</p>
          <TransactionList />
        </section>
      </main>
      
      <footer className="app-footer">
        <p>© 2026 Aldo Yulian - Informatics 2024 [cite: 15]</p>
      </footer>
    </div>
  );
}

export default App;