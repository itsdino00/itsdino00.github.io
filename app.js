const express = require('express');
const bodyParser = require('body-parser');
const { Connection, PublicKey, Transaction, SystemProgram, TransactionInstruction, sendAndConfirmTransaction } = require('@solana/web3.js');

const app = express();
const port = 3000;

const connection = new Connection('https://api.devnet.solana.com');

app.use(bodyParser.json());

app.post('/mint-token', async (req, res) => {
    const { publicKey } = req.body;

    try {
        // Create a new token account for the user
        const tokenAccount = await createTokenAccount(publicKey);

        // Mint tokens to the newly created account
        const mintAmount = 100; // Adjust as needed
        await mintTokens(tokenAccount, mintAmount);

        res.status(200).json({ message: 'Token minted successfully.' });
    } catch (error) {
        console.error('Error minting token:', error);
        res.status(500).json({ message: 'Error minting token. Please try again later.' });
    }
});

// Function to create a new token account for a given public key
async function createTokenAccount(publicKey) {
    // Replace with the actual token mint address
    const tokenMintAddress = 'Your Token Mint Address Here';
    
    // Create the transaction instruction
    const transactionInstruction = SystemProgram.createAccount({
        fromPubkey: new PublicKey(publicKey),
        newAccountPubkey: new PublicKey(publicKey), // Use the same public key for simplicity
        lamports: await connection.getMinimumBalanceForRentExemption(165), // Minimum balance required for account creation
        space: 165, // Size of the new account
        programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA') // SPL Token program ID
    });

    // Send and confirm the transaction
    const transaction = new Transaction().add(transactionInstruction);
    await sendAndConfirmTransaction(connection, transaction, [new PublicKey(publicKey)]);

    return new PublicKey(publicKey);
}

// Function to mint tokens to a given token account
async function mintTokens(tokenAccount, amount) {
    // Replace with the actual token mint address
    const tokenMintAddress = 'Your Token Mint Address Here';

    // Create the transaction instruction
    const transactionInstruction = new TransactionInstruction({
        keys: [
            { pubkey: tokenAccount, isSigner: false, isWritable: true },
            { pubkey: new PublicKey(tokenMintAddress), isSigner: false, isWritable: false },
        ],
        programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), // SPL Token program ID
        data: Buffer.from([3, ...Buffer.alloc(8), ...Buffer.from(amount.toString(), 'utf8')]), // MintTo instruction data
    });

    // Send and confirm the transaction
    const transaction = new Transaction().add(transactionInstruction);
    await sendAndConfirmTransaction(connection, transaction, [tokenAccount]);
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
