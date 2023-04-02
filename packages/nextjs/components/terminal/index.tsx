import { useState } from "react";

export default function Terminal() {
  const [total, setTotal] = useState(0);

  const handleDigitClick = (digit: number) => {
    setTotal(prevTotal => prevTotal * 10 + digit / 100);
  };

  const handleClearClick = () => {
    setTotal(0);
  };

  const handlePaymentClick = () => {
    alert(`Total payment: $${total.toFixed(2)}`);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex justify-end items-center py-4 px-8">
        <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <input
          placeholder="Enter the recipient address"
          className="flex w-[400px] p-2 rounded-lg border border-slate-50 mb-8"
        />
        <h1 className="text-6xl font-bold mb-8">{`$${total.toFixed(2)}`}</h1>
        <div className="grid grid-cols-3 gap-4 justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(digit => (
            <button
              key={digit}
              className="px-8 py-4 text-3xl bg-slate-50 border border-gray-300 hover:bg-slate-100 transition-all ease-in-out duration-100 rounded-md"
              onClick={() => handleDigitClick(digit)}
            >
              {digit}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center py-4 px-8">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handlePaymentClick}>
          Send Payment
        </button>
      </div>
    </div>
  );
}
