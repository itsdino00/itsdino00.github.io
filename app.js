// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { Connection, PublicKey, Transaction, SystemProgram } = require('@solana/web3.js');

const app = express();
const port = 3000;

// Solana Devnet cluster connection
const connection = new Connection('https://api.devnet.solana.com');

app.use(bodyParser.json());

// Endpoint to mint token
app.post('/mint-token', async (req, res) => {
    const { publicKey } = req.body;

    try {
        // Logic to mint token on Solana blockchain
        // For simplicity, let's assume we are minting a SPL token with name and symbol provided
        const mintTokenInstruction = SystemProgram.createAccount({
            fromPubkey: new PublicKey(publicKey),
            newAccountPubkey: new PublicKey(publicKey), // Same as fromPubkey for simplicity
            lamports: 1000000, // Initial lamports
            space: 165, // Size of the new account
            programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), // SPL token program ID
        });

        const transaction = new Transaction().add(mintTokenInstruction);

        // Sign and send transaction
        const signature = await connection.sendTransaction(transaction);
        console.log('Token minted. Transaction signature:', signature);

        res.status(200).json({ message: 'Token minted successfully.' });
    } catch (error) {
        console.error('Error minting token:', error);
        res.status(500).json({ message: 'Error minting token. Please try again later.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
