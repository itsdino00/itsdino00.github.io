// walletIntegration.js

// Phantom wallet integration
const connectPhantom = async () => {
    try {
        if (window.solana && window.solana.isPhantom) {
            const connected = await window.solana.connect();
            if (connected) {
                console.log('Phantom wallet connected');
                // Do further actions after successful wallet connection
            }
        } else {
            console.error('Phantom wallet not found');
        }
    } catch (error) {
        console.error('Error connecting Phantom wallet:', error);
    }
};

// Solflare wallet integration
const connectSolflare = async () => {
    try {
        if (window.solana && window.solana.isSolflare) {
            const connected = await window.solana.connect();
            if (connected) {
                console.log('Solflare wallet connected');
                // Do further actions after successful wallet connection
            }
        } else {
            console.error('Solflare wallet not found');
        }
    } catch (error) {
        console.error('Error connecting Solflare wallet:', error);
    }
};
