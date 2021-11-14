import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PriceCard from "../components/PriceCard";
import getPrice from "../components/getPriceData";
import getSymbols from "../components/getSymbols";
import Chart from "../components/chart";
import getQuote from "../components/getQuote";
import getNews from "../components/getNews";
import "tailwindcss/tailwind.css";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

let data3 = [
  {
    id: "japan",
    color: "hsl(219, 91%, 52%)",
    data: [
      {
        date: 0,
        price: 270,
      },
      {
        date: 1,
        price: 96,
      },
      {
        date: 2,
        price: 14,
      },
      {
        date: 3,
        price: 69,
      },
      {
        date: 4,
        price: 125,
      },
      {
        date: 5,
        price: 284,
      },
      {
        date: 6,
        price: 79,
      },
      {
        date: 7,
        price: 195,
      },
      {
        date: 8,
        price: 191,
      },
      {
        date: 9,
        price: 35,
      },
    ],
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("aapl");
  const [data, setData] = useState("data3");
  const [isLoading, setIsLoading] = useState(true);
  const [isNewsLoading, setIsNewsLoading] = useState(true);
  const [stockPrice, setPrice] = useState(0);
  const [stockNews, setStockNews] = useState("");
  const [stockName, setStockName] = useState("");
  const stocks = ["TSLA", "AMC", "GME", "PROG", "SPY", "NVDA"];
  const prices = [1029.03, 40.11, 202.47, 2.98, 467.6, 301.24];
  const topCryptos = ["BTC", "ETH", "LRC", "ADA", "LTO", "CRO"];
  const crypPrices = [64, 686.97, 581.61, 4619.02, 3.12, 2.05, 0.67, 1.15];

  useEffect(async () => {
    setIsLoading(true);
    setIsNewsLoading(true);
    console.log(searchTerm);
    await getSymbols(searchTerm).catch((e) => {
      console.log(e);
    });
    await getStockNews(searchTerm).catch((e) => {
      console.log(e);
    });
    await getStockData(searchTerm).catch((e) => {
      console.log(e);
    });
    getStockPrice(searchTerm);
    setTimeout(() => {
      setIsLoading(false);
      if (stockNews === null) {
        setIsNewsLoading(false);
      }
    }, 1000);
  }, [searchTerm]);

  const fillInData = (stockPrice) => {
    const string = JSON.parse(stockPrice);
    const dateArray = string.t;
    const priceArray = string.c;
    let i = 0;
    for (i = 0; i < 10; i++) {
      let d = dateArray[i] * 1000;
      let da = new Date(d).getMonth() + "/" + new Date(d).getDate();
      dateArray[i] = da;
    }
    i = 0;
    data3[0].data.map((dataPoint) => {
      dataPoint.x = dateArray[i];
      dataPoint.y = priceArray[i];
      i++;
      //console.log(dataPoint.x + " " + dataPoint.y)
    });
    setData(data3);
    //console.log(data)
  };

  const getStockPrice = async (searchTerm) => {
    const data = await getQuote(searchTerm);
    const string = JSON.parse(data);
    setPrice(string.c);
  };

  const getStockNews = async (searchTerm) => {
    const data = await getNews(searchTerm);
    const string = JSON.parse(data);
    setStockNews(string.splice(0, 3)[0]);
    console.log(stockNews);
  };

  const getStockData = async () => {
    const stockPrice = await getPrice(searchTerm);
    getStockPrice(searchTerm);
    fillInData(stockPrice);
    getStockSymbols(searchTerm);
  };

  const getStockSymbols = async (searchTerm) => {
    const data = await getSymbols(searchTerm);
    const string = JSON.parse(data);
    if (string.result[0] !== undefined) {
      setStockName(string.result[0].description);
    }
    //setStockName(string.result[0].description);
  };

  return (
    <div className="bg-gray-200 h-full flex flex-col space-y-5">
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="mt-2">
        <div className="grid grid-cols-3">
          <div className="col-span-1 text-base mt-4 ml-7">
            <Image src="/Snipin.png" height={80} width={80} />
          </div>
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
      <div className="h-2 w-auto" />
      <div className="grid grid-cols-3 m-4">
        <div className="flex flex-col ml-8">
          <div className="flex justify-center text-lg font-semibold text-gray-700">
            People Are Talking About 🔥
          </div>
          <div className="grid grid-cols-2 my-5">
            <div className="flex flex-col -space-x-2 space-y-2">
              <div className="flex justify-center text-lg font-semibold text-gray-700 mb-4">
                Stocks
              </div>
              <PriceCard
                ticketName={stocks[0]}
                price={prices[0]}
                sentiment={0.37}
              />
              <PriceCard
                ticketName={stocks[1]}
                price={prices[1]}
                sentiment={0.23}
              />
              <PriceCard
                ticketName={stocks[2]}
                price={prices[2]}
                sentiment={0.11}
              />
              <PriceCard
                ticketName={stocks[3]}
                price={prices[3]}
                sentiment={0.06}
              />
              <PriceCard
                ticketName={stocks[4]}
                price={prices[4]}
                sentiment={0.17}
              />
              <PriceCard
                ticketName={stocks[5]}
                price={prices[5]}
                sentiment={0.25}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center text-lg font-semibold text-gray-700 mb-4">
                Crypto
              </div>
              <PriceCard ticketName={topCryptos[0]} price={crypPrices[0]} />
              <PriceCard
                ticketName={topCryptos[1]}
                price={crypPrices[1]}
                sentiment={-0.1}
              />
              <PriceCard
                ticketName={topCryptos[2]}
                price={crypPrices[2]}
                sentiment={-0.1}
              />
              <PriceCard ticketName={topCryptos[3]} price={crypPrices[3]} />
              <PriceCard
                ticketName={topCryptos[4]}
                price={crypPrices[4]}
                sentiment={-0.1}
              />
              <PriceCard ticketName={topCryptos[5]} price={crypPrices[5]} />
            </div>
          </div>
        </div>
        <div className="col-span-2 p-6 bg-white bg-opacity-40 border border-gray-200 rounded-xl shadow-lg mx-6 mb-4">
          <div className="flex flex-col space-y-2">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <div className="text-2xl font-bold text-gray-700">
                  {stockName}{" "}
                  <div className="text-gray-500">
                    {searchTerm.toUpperCase()}
                  </div>
                </div>
                <div className="mt-4 text-2xl font-bold text-green-400">
                  ${stockPrice}
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex justify-end">
                  <div className="text-2xl font-bold text-green-400">
                    Bullish
                  </div>
                </div>
                <div className="flex justify-end text-base font-semibold text-red-400">
                  1.02 Sentiment Score
                </div>
              </div>
            </div>
            <div className="flex justify-center col-span-2 font-semibold text-gray-700 mt-12">
              {isLoading ? (
                <>
                  <p>loading...</p>
                </>
              ) : (
                <>
                  <div className="flex flex-col">
                    <Chart inputData={data} searchTerm={searchTerm}></Chart>
                    <div className="text-xl font-semibold">Company News:</div>
                    <div className="flex flex-col">
                      {isNewsLoading ? (
                        <>
                          <div></div>
                        </>
                      ) : (
                        <>
                          <div>
                            <Link
                              className="text-base italic"
                              href={stockNews.url}
                            >
                              {stockNews.headline}
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
