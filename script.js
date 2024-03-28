// Initialize Wallet
const wallet = new WalletAdapter(SolanaWalletAdapter.providers.phantom);

// Connect Button Click Event
document.getElementById('connectButton').onclick = async () => {
    try {
        // Connect to Solana Wallet
        await wallet.connect();

        // Update Wallet Status
        updateWalletStatus('Wallet connected!');
    } catch (error) {
        console.error('Error connecting to wallet:', error);
        updateWalletStatus('Error connecting to wallet.');
    }
};

// Update Wallet Status Function
function updateWalletStatus(status) {
    const walletStatusElement = document.getElementById('walletStatus');
    walletStatusElement.textContent = status;
}
