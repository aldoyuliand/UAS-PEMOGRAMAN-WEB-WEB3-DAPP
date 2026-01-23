🌐 Web3 Donation DApp - UAS Pemrograman Web
Tugas ini dikerjakan untuk memenuhi Ujian Akhir Semester (UAS) mata kuliah Pemrograman Web (INF2101). 

Identitas Mahasiswa
Nama: Aldo Yulian


Angkatan: Informatika 2024 


Dosen: Restiadi Bayu Taruno, S.T., M.Eng. 


Prodi: Informatika - Universitas Nahdlatul Ulama Yogyakarta 

📌 Fitur Utama
Aplikasi ini merupakan Decentralized Application (DApp) sederhana yang mengintegrasikan ekosistem Web2 tradisional dengan teknologi Web3 (Blockchain). 


Frontend (React.js): Dashboard minimalis dan futuristik yang menampilkan saldo dompet dan daftar transaksi. 


Backend (Node.js/Express.js): RESTful API yang menyediakan data transaksi dummy dalam format JSON. 


Blockchain Integration (Ethers.js): Menghubungkan aplikasi ke wallet MetaMask dan membaca data langsung dari smart contract di jaringan Sepolia Testnet. 


Responsive Design: Tampilan dioptimalkan untuk berbagai ukuran perangkat menggunakan CSS Flexbox dan Media Queries. 

📂 Struktur Direktori
Struktur folder ini mengikuti panduan teknis implementasi proyek yang telah ditetapkan: 

Plaintext
web3-dapp-uas/
├── frontend/         # Aplikasi React.js (Client Side) [cite: 81]
├── backend/          # RESTful API Express.js (Server Side) [cite: 91]
├── smart-contracts/  # File Solidity (DonationContract.sol) [cite: 96]
└── README.md         # Dokumentasi Proyek [cite: 98]
🛠️ Cara Instalasi & Menjalankan
1. Persiapan Awal
Pastikan Anda sudah menginstal Node.js dan memiliki ekstensi MetaMask di browser Anda.

2. Menjalankan Backend
Bash
cd backend
npm install
node server.js

Backend akan berjalan di: http://localhost:5000 

3. Menjalankan Frontend
Bash
cd ../frontend
npm install
npm start
Frontend akan berjalan di: http://localhost:3000

⛓️ Detail Smart Contract

Jaringan: Ethereum Sepolia Testnet 

Contract Address: 0x183A3A1E1E128E2252675986f2a7b21A7B7Eb437


Fungsi Utama: Membaca total donasi (totalDonations) dan daftar donor. 

📜 Pedoman Integritas
Proyek ini dikerjakan dengan menjunjung tinggi integritas akademik: 

Implementasi kode didasarkan pada dokumentasi resmi Ethers.js dan React. 

Tidak melakukan plagiarisme dan memahami setiap baris kode yang dikirimkan.