import { ResponsiveLine } from '@nivo/line'
import "tailwindcss/tailwind.css"
import { useState, useEffect } from "react"

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

const Chart = ({ inputData, searchTerm }) => {
    const [stockData, setStockData] = useState("")
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setStockData(inputData)
            console.log(stockData)
            //setIsLoading(false);
        })();
    }, [inputData]);

    return (
            <div style={{ height: 400, width: 800 }}>
                <h1>{searchTerm}</h1>
                        <ResponsiveLine
                            data={stockData}
                            margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
                            //xScale={{ type: 'linear' }}
                            //yScale={{ type: 'linear', stacked: true, min: 0, max: 300 }}
                            yFormat=" >-.2f"
                            curve="monotoneX"
                            enableGridX={false}
                            colors={{ scheme: 'purple_orange' }}
                            lineWidth={4}
                            pointSize={6}
                            pointColor={{ theme: 'grid.line.stroke' }}
                            pointBorderWidth={3}
                            pointBorderColor={{ from: 'serieColor' }}
                            pointLabelYOffset={-12}
                            enableGridY={false}
                            enableGridX={false}
                            axisLeft={
                                null
                            }
                            axisBottom={
                                null
                            }
                            useMesh={true}
                        />
            </div>
    )
}

export default Chart;