// index.js

// Function to handle wallet connect button click
const connectWallet = async (walletType) => {
    if (walletType === 'phantom') {
        await connectPhantom();
    } else if (walletType === 'solflare') {
        await connectSolflare();
    }
};

// Example usage
document.getElementById('connectPhantomBtn').addEventListener('click', () => connectWallet('phantom'));
document.getElementById('connectSolflareBtn').addEventListener('click', () => connectWallet('solflare'));
