## Decentralized Instant Messaging System Using Blockchain

1. Abstract
 The Decentralized Instant Messaging System Using Blockchain is a secure communication platform designed to eliminate dependency on centralized messaging servers. The system leverages blockchain technology to provide tamper-proof, transparent, and secure message transmission between users.

Authentication is performed using MetaMask wallet addresses, and messages are securely stored through Solidity smart contracts deployed on a private blockchain network. Cryptographic techniques such as AES encryption, ECDSA digital signatures, and Keccak-256 hashing ensure confidentiality, integrity, and authenticity of communication.

2. Objectives
--To develop a decentralized messaging platform without centralized control
--To ensure secure communication using blockchain technology
--To provide wallet-based authentication instead of traditional credentials
--To store messages immutably using smart contracts
--To enhance privacy using cryptographic encryption techniques

3. System Architecture

The proposed system consists of three primary layers.

--Frontend Layer (Client Interface)
   The frontend is developed using React.js with Vite and provides an interactive interface for users to send and receive messages. It communicates with the blockchain using Ethers.js and integrates wallet authentication through MetaMask.

--Blockchain Layer (Smart Contracts)
   The blockchain layer consists of Solidity smart contracts deployed on a private Hardhat blockchain network. This layer manages:

--User identity mapping
Secure message storage
Transaction validation
Timestamp recording
Wallet Layer (Authentication Provider)

-- MetaMask is used as a wallet provider for:
 User authentication
 Transaction signing
 Secure identity verification without passwords
 Security Mechanisms

--The application integrates multiple cryptographic techniques to ensure secure communication:
AES encryption for message confidentiality
ECDSA digital signatures for transaction authentication
Keccak-256 hashing for blockchain integrity verification
Wallet-based authentication to eliminate password vulnerabilities

4. Technologies Used

Technology	                   Purpose

React.js	            Frontend user interface
Vite	                Development environment
Solidity	         Smart contract implementation
Hardhat	                Local blockchain network
Node.js	                    Backend server
MetaMask	            Wallet authentication
Ethers.js	           Blockchain interaction
AES	                    Message encryption
ECDSA	            Digital signature verification
Keccak-256	              Hashing algorithm

5. Project Structure
frontend/            Client-side application
server/              Node.js socket server
smart-contracts/     Solidity smart contracts
security/            Encryption modules
.env                 Environment configuration
README.md            Project documentation
Installation and Execution Procedure

## Follow the steps below to run the project locally.

Step 1: Start Local Blockchain Network
cd smart-contracts
npx hardhat node

This initializes a local blockchain at:

http://127.0.0.1:8545
Step 2: Start Backend Server

Open a new terminal and execute:

cd server
npm start

The socket server will start on:

http://localhost:3001
Step 3: Start Frontend Application

Open another terminal and execute:

cd frontend
npm run dev

This launches the React application using Vite.

Step 4: Configure Environment Variables

Update the .env file with the deployed contract address: VITE_CONTRACT_ADDRESS=your_contract_address_here

Step 5: Connect MetaMask Wallet
    Install MetaMask browser extension
    Connect wallet to Hardhat local network
    Authorize transaction signing
    Begin secure messaging

6. Advantages of the Proposed System
    Eliminates reliance on centralized messaging servers
    Ensures tamper-proof communication using blockchain
    Provides secure wallet-based authentication
    Enhances transparency and trust between users
    Protects message confidentiality through encryption
    
7. Future Enhancements
    Implementation of group messaging functionality
    Secure file and multimedia sharing support
    Deployment on Ethereum public test networks
    Mobile application development
    Advanced end-to-end encryption mechanisms