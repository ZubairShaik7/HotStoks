import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PriceCard from "../components/PriceCard";
import Chart from "../components/chart"
import "tailwindcss/tailwind.css";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-200 h-screen flex flex-col space-y-5">
      {console.log(searchTerm)}
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="mt-10">
        <div className="flex items-center justify-center">
          <div className="flex border-2 border-gray-200 rounded">
            <input
              type="text"
              className="px-4 py-2 flex-grow w-96 h-auto rounded-lg mt-6 shadow-lg"
              placeholder="Search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="h-16 w-auto" />
      <div className="grid grid-cols-3 m-4">
        <div className="flex flex-col">
          <div className="flex justify-center text-lg font-semibold text-gray-700">
            People Are Talking About
          </div>
          <div className="grid grid-cols-2 my-5">
            <div className="flex flex-col -space-x-2 space-y-2">
              <div className="flex justify-center text-lg font-semibold text-gray-700 mb-4">
                Stocks
              </div>
              <PriceCard ticketName="AAPL" price={9990.9} />
              <PriceCard ticketName="TSLA" price={9990.9} />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center text-lg font-semibold text-gray-700 mb-4">
                Crypto
              </div>
              <PriceCard ticketName="AAPL" price={9990.9} />
            </div>
          </div>
        </div>
        <div className="flex justify-center col-span-2 text-lg font-semibold text-gray-700">
          <Chart searchTerm={"aapl"}></Chart>
        </div>
      </div>
    </div>
  );
}