import React, { useState, useCallback } from 'react';
import { useWalletMultiButton } from '@solana/wallet-adapter-react-ui';

function CustomConnectButton() {
    const [walletModalConfig, setWalletModalConfig] = useState<{
        onSelectWallet(walletName: string): void;
        wallets: { adapter: { name: string } }[];
    } | null>(null);
    const { buttonState, onConnect, onDisconnect, onSelectWallet } = useWalletMultiButton({
        onSelectWallet: setWalletModalConfig,
    });
    let label;
    switch (buttonState) {
        case 'connected':
            label = 'Disconnect';
            break;
        case 'connecting':
            label = 'Connecting';
            break;
        case 'disconnecting':
            label = 'Disconnecting';
            break;
        case 'has-wallet':
            label = 'Connect';
            break;
        case 'no-wallet':
            label = 'Select Wallet';
            break;
    }
    const handleClick = useCallback(() => {
        switch (buttonState) {
            case 'connected':
                return onDisconnect();
            case 'connecting':
            case 'disconnecting':
                break;
            case 'has-wallet':
                return onConnect();
            case 'no-wallet':
                return onSelectWallet();
        }
    }, [buttonState, onDisconnect, onConnect, onSelectWallet]);

    return (
        <div className="custom-connect-button" style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <button disabled={buttonState === 'connecting' || buttonState === 'disconnecting'} onClick={handleClick}>
                {label}
            </button>
            {walletModalConfig ? (
                <div>
                    {walletModalConfig.wallets.map((wallet) => (
                        <button
                            key={wallet.adapter.name}
                            onClick={() => {
                                walletModalConfig.onSelectWallet(wallet.adapter.name);
                                setWalletModalConfig(null);
                            }}
                        >
                            {wallet.adapter.name}
                        </button>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default CustomConnectButton;
