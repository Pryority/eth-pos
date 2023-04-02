import { useState } from "react";

export default function Terminal() {
  const [total, setTotal] = useState(0);

  const handleDigitClick = (digit: number) => {
    setTotal(prevTotal => prevTotal * 10 + digit / 100);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="grid grid-cols-3 items-center justify-center h-full bg-primary">
        <section className="flex flex-col items-center justify-center h-full col-span-1 border-r border-accent">
          <input
            placeholder="Enter the item SKU or scan barcode"
            className="flex w-[350px] p-2 rounded-lg border border-accent mb-8 bg-neutral"
          />
          <h1 className="text-6xl font-bold mb-8">{`$${total.toFixed(2)}`}</h1>
          <div className="grid grid-cols-3 gap-4 justify-center items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(digit => (
              <button
                key={digit}
                className={
                  digit != 0
                    ? `px-8 py-4 text-3xl border border-neutral bg-secondary hover:bg-accent transition-all ease-in-out duration-75 rounded-md`
                    : `px-8 py-4 text-3xl border border-neutral bg-secondary hover:bg-accent transition-all ease-in-out duration-75 rounded-md col-span-3`
                }
                onClick={() => handleDigitClick(digit)}
              >
                {digit}
              </button>
            ))}
          </div>
        </section>
        {/* ORDER INFORMATION */}
        <section className="flex flex-col items-start px-40 justify-center w-full h-full col-span-2">
          <div className="flex flex-col h-2/3 items-center justify-center w-full">
            <h1 className="text-xl font-bold">Enter the customer address or scan their QR</h1>
            <div className="flex justify-center items-center">
              <div
              // className={`px-8 py-4 text-3xl bg-slate-50 border border-gray-300 hover:bg-slate-100 transition-all ease-in-out duration-100 rounded-md`}
              >
                Customer: vitalik.eth
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="flex justify-end items-center py-4 px-8">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handlePaymentClick}>
          Send Payment
        </button>
      </div> */}
    </div>
  );
}
