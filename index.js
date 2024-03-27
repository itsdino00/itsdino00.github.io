// Phantom wallet integration
const connectPhantom = async () => {
    try {
        if (window.solana) {
            const isPhantomInstalled = await window.solana.isPhantomInstalled();
            if (isPhantomInstalled) {
                const connected = await window.solana.connect();
                if (connected) {
                    console.log('Phantom wallet connected');
                    document.getElementById('connectPhantomBtn').innerText = 'Connected';
                    // Do further actions after successful wallet connection
                }
            } else {
                console.error('Phantom wallet not installed');
            }
        } else {
            console.error('Solana object not found');
        }
    } catch (error) {
        console.error('Error connecting Phantom wallet:', error);
    }
};

// Automatically connect Phantom wallet when the page loads
window.addEventListener('load', connectPhantom);
