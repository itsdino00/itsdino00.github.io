import React from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useAutoConnect } from "../contexts/AutoConnectProvider";
import NetworkSwitcher from "./NetworkSwitcher";

const AppBar: React.FC = (props) => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  const handleWalletConnect = () => {
    // Add your wallet connect functionality here
    console.log('Wallet connected!');
  };

  return (
    <div>
      {/* NavBar / Header */}
      <div className="navbar flex flex-row bg-neutral text-neutral-content shadow-lg md:mb-2">
        <div className="navbar-start">
          <label htmlFor="my-drawer" className="btn btn-ghost btn-square">
            <svg
              className="inline-block h-6 w-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>

          <div className="w-22 h-22 hidden sm:inline md:p-2">
            {/* Solana Tools logo */}
            <svg
              width="100%"
              height="22"
              viewBox="0 0 646 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add your logo SVG here */}
            </svg>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:navbar-center md:inline">
          {/* Add your navigation links here */}
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end">
          {/* Wallet Connect button */}
          <button
            className="btn btn-ghost mr-4"
            onClick={handleWalletConnect}
          >
            Wallet Connect
          </button>

          <div className="dropdown-end dropdown">
            {/* Settings dropdown */}
            {/* Add your settings dropdown code here */}
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default AppBar;
