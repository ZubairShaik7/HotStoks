import React from "react";
import "tailwindcss/tailwind.css";

const PriceCard = (props) => {
  return (
    <div className=" w-full shadow-lg">
      <div className="p-5 rounded-lg bg-white border border-gray-300">
        <div className="flex flex-col">
          <div className="text-xs uppercase font-bold text-gray-500">
            {props.ticketName}
          </div>
          <div className="grid grid-cols-3">
            <div className="text-base font-bold mb-1">${props.price}</div>
            <div className="col-span-2 flex flex-row space-x-4 justify-end">
              {props.sentiment < 0 ? (
                <div className="text-base font-bold text-red-400">Bearish</div>
              ) : (
                <div className="text-base font-bold text-green-400">
                  Bullish
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
