// Phantom wallet integration
const connectPhantom = async () => {
    try {
        if (window.solana && window.solana.isPhantom) {
            const connected = await window.solana.connect();
            if (connected) {
                console.log('Phantom wallet connected');
                document.getElementById('connectPhantomBtn').innerText = 'Connected';
                // Do further actions after successful wallet connection
            }
        } else {
            console.error('Phantom wallet not found');
        }
    } catch (error) {
        console.error('Error connecting Phantom wallet:', error);
    }
};

// Event listener for wallet connect button click
document.getElementById('connectPhantomBtn').addEventListener('click', connectPhantom);
