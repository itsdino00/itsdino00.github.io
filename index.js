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

// Token creation function
const createToken = async () => {
    try {
        // Example: Create token using given information
        const tokenInfo = {
            name: "Your Token Name",
            symbol: "Your Token Symbol",
            supply: 1000000, // Example token supply
            logo: "URL to your token's logo",
            description: "Your token description",
            website: "Your website URL",
            twitter: "Your Twitter URL",
            telegram: "Your Telegram URL"
        };

        // Code to create token
        // For example:
        // const token = await splToken.Token.createToken(...)
        // const tokenAddress = token.publicKey.toBase58();
        
        console.log('Token created successfully:', tokenAddress);
    } catch (error) {
        console.error('Error creating token:', error);
    }
};

// Event listener for token creation button click
document.getElementById('createTokenBtn').addEventListener('click', createToken);
