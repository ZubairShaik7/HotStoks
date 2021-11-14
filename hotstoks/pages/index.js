import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PriceCard from "../components/PriceCard";
import getPrice from "../components/getPriceData"
import getSymbols from "../components/getSymbols";
import Chart from "../components/chart"
import "tailwindcss/tailwind.css";
import React from "react";
import { useState, useEffect } from "react";

let data3 = [
  {
    "id": "japan",
    "color": "hsl(219, 91%, 52%)",
    "data": [
      {
        "x": 0,
        "y": 270
      },
      {
        "x": 1,
        "y": 96
      },
      {
        "x": 2,
        "y": 14
      },
      {
        "x": 3,
        "y": 69
      },
      {
        "x": 4,
        "y": 125
      },
      {
        "x": 5,
        "y": 284
      },
      {
        "x": 6,
        "y": 79
      },
      {
        "x": 7,
        "y": 195
      },
      {
        "x": 8,
        "y": 191
      },
      {
        "x": 9,
        "y": 35
      }
    ]
  }
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("aapl");
  const [data, setData] = useState("data3")
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    setIsLoading(true)
    console.log(searchTerm)
    console.log(await getSymbols(searchTerm))
    await getStockData(searchTerm)
    .catch(e => {
      console.log(e)
    })
    setIsLoading(false)
  }, [searchTerm])

  const fillInData = (stockPrice) => {
    const string = JSON.parse(stockPrice)
    const dateArray = string.t
    const priceArray = string.c
    let i = 0;
    for (i = 0; i < 10; i++) {
        let d = dateArray[i] * 1000
        let da = new Date(d).getMonth() + "/" + new Date(d).getDate()
        dateArray[i] = da
    }
    i = 0;
    data3[0].data.map((dataPoint) => {
        dataPoint.x = dateArray[i];
        dataPoint.y = priceArray[i];
        i++;
        //console.log(dataPoint.x + " " + dataPoint.y)
    })
    setData(data3)
    //console.log(data)
  }
  
  const getStockData = async () => {
    const stockPrice = await getPrice(searchTerm)
    fillInData(stockPrice)
  }

  return (
    <div className="bg-gray-200 h-screen flex flex-col space-y-5">
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
          {isLoading ? (
            <>
            <p>loading...</p>
            </>
          ) : (
            <>
            <Chart inputData={data} searchTerm={searchTerm}></Chart>
            </>
          )}
        </div>
      </div>
    </div>
  );
}