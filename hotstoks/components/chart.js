import { ResponsiveLine } from '@nivo/line'
import "tailwindcss/tailwind.css"
import getPrice from './getPriceData'

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
    console.log(data3[0].data)
    return data3[0].data
}

const getStockData = async (userInput) => {
    const stockPrice = await getPrice(userInput)
    fillInData(stockPrice)
}

const Chart = (searchTerm) => {
    getStockData("aapl")
    return (
        <div style={{ height: 370, width:700 }}>
            <ResponsiveLine
                data={data3}
                margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
                xScale={{ type: 'linear' }}
                yScale={{ type: 'linear', stacked: true, min: 0, max: 300 }}
                yFormat=" >-.2f"
                curve="monotoneX"
                enableGridX={false}
                colors={{ scheme: 'purple_orange' }}
                lineWidth={1}
                pointSize={6}
                pointColor={{ theme: 'grid.line.stroke' }}
                pointBorderWidth={1}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
            />
        </div>
    )
}

export default Chart;