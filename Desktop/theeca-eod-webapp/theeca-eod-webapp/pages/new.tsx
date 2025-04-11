'use client';
import { useState } from 'react';

export default function NewReport() {
  const [cashSales, setCashSales] = useState('');
  const [name, setName] = useState('');
  const [passcode, setPasscode] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSubmit = () => {
    if (passcode !== '0000') {
      alert('Invalid passcode');
      return;
    }
    // Simulate saving data
    console.log({ name, cashSales });
    setSaved(true);
  };

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-2">New EOD Report</h1>
      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cash Sales"
        className="border p-2 w-full mb-2"
        value={cashSales}
        onChange={(e) => setCashSales(e.target.value)}
      />
      <input
        type="password"
        placeholder="Passcode"
        className="border p-2 w-full mb-2"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
      {saved && <p className="mt-2 text-green-600">Report saved!</p>}
    </main>
  );
}