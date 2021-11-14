import { ResponsiveLine } from "@nivo/line";
import "tailwindcss/tailwind.css";
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

const Chart = ({ inputData, searchTerm }) => {
  const [stockData, setStockData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setStockData(inputData);
      console.log(stockData);
      //setIsLoading(false);
    })();
  }, [inputData]);

  return (
    <div style={{ height: 400, width: 800 }}>
      <ResponsiveLine
        data={stockData}
        margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
        //xScale={{ type: 'linear' }}
        //yScale={{ type: 'linear', stacked: true, min: 0, max: 300 }}
        yFormat=" >-.2f"
        curve="monotoneX"
        enableGridX={false}
        colors={{ scheme: "purple_orange" }}
        lineWidth={4}
        pointSize={6}
        pointColor={{ theme: "grid.line.stroke" }}
        pointBorderWidth={3}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableGridY={false}
        enableGridX={false}
        useMesh={true}
      />
    </div>
  );
};

export default Chart;
