import React, { useState } from 'react';

const Transaction = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    // Implement form validation and data submission here
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-8">Transaction Page</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md border rounded-md shadow-md p-4 bg-gray-200">
        <div className="mb-4">
          <label
            htmlFor="walletAddress"
            className="block text-sm font-medium mb-2"
          >
            Wallet Address:
          </label>
          <input
            type="text"
            id="walletAddress"
            className="border rounded-md w-full px-2 py-1"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium mb-2">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            className="border rounded-md w-full px-2 py-1"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>
        <button
          type="submit"
          disabled={!walletAddress || !amount}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Transaction;
