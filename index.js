// Function to connect Phantom wallet
const connectWallet = async () => {
    try {
        console.log('Attempting to connect Phantom wallet...');
        if (window.solana && window.solana.connect) {
            const connected = await window.solana.connect();
            console.log('Is connected?', connected);

            if (connected) {
                console.log('Phantom wallet connected');
                document.getElementById('connectPhantomBtn').innerText = 'Connected';
                // Perform further actions after successful wallet connection
            } else {
                console.error('Failed to connect Phantom wallet');
            }
        } else {
            console.error('Solana object or connect method not found');
        }
    } catch (error) {
        console.error('Error connecting Phantom wallet:', error);
    }
};

// Automatically connect Phantom wallet when the page loads
window.addEventListener('load', connectWallet);
