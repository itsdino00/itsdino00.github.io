import React from 'react';
import CustomConnectButton from './components/CustomConnectButton';

function App() {
  return (
    <div className="App">
      <header>
        <h1>SOLANA TOOLS</h1>
      </header>
      <main>
        {/* Content */}
        <CustomConnectButton />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
