import { ResponsiveLine } from '@nivo/line'
import "tailwindcss/tailwind.css"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data2 = [
    {
      "id": "japan",
      "color": "hsl(4, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 132
        },
        {
          "x": "helicopter",
          "y": 148
        },
        {
          "x": "boat",
          "y": 39
        },
        {
          "x": "train",
          "y": 297
        },
        {
          "x": "subway",
          "y": 206
        },
        {
          "x": "bus",
          "y": 143
        },
        {
          "x": "car",
          "y": 74
        },
        {
          "x": "moto",
          "y": 13
        },
        {
          "x": "bicycle",
          "y": 62
        },
        {
          "x": "horse",
          "y": 127
        },
        {
          "x": "skateboard",
          "y": 51
        },
        {
          "x": "others",
          "y": 160
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(152, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 185
        },
        {
          "x": "helicopter",
          "y": 172
        },
        {
          "x": "boat",
          "y": 158
        },
        {
          "x": "train",
          "y": 262
        },
        {
          "x": "subway",
          "y": 187
        },
        {
          "x": "bus",
          "y": 104
        },
        {
          "x": "car",
          "y": 127
        },
        {
          "x": "moto",
          "y": 61
        },
        {
          "x": "bicycle",
          "y": 250
        },
        {
          "x": "horse",
          "y": 27
        },
        {
          "x": "skateboard",
          "y": 44
        },
        {
          "x": "others",
          "y": 204
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(191, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 255
        },
        {
          "x": "helicopter",
          "y": 144
        },
        {
          "x": "boat",
          "y": 222
        },
        {
          "x": "train",
          "y": 114
        },
        {
          "x": "subway",
          "y": 0
        },
        {
          "x": "bus",
          "y": 227
        },
        {
          "x": "car",
          "y": 293
        },
        {
          "x": "moto",
          "y": 221
        },
        {
          "x": "bicycle",
          "y": 197
        },
        {
          "x": "horse",
          "y": 118
        },
        {
          "x": "skateboard",
          "y": 79
        },
        {
          "x": "others",
          "y": 294
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(78, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 119
        },
        {
          "x": "helicopter",
          "y": 225
        },
        {
          "x": "boat",
          "y": 190
        },
        {
          "x": "train",
          "y": 210
        },
        {
          "x": "subway",
          "y": 279
        },
        {
          "x": "bus",
          "y": 288
        },
        {
          "x": "car",
          "y": 178
        },
        {
          "x": "moto",
          "y": 168
        },
        {
          "x": "bicycle",
          "y": 88
        },
        {
          "x": "horse",
          "y": 123
        },
        {
          "x": "skateboard",
          "y": 289
        },
        {
          "x": "others",
          "y": 247
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(202, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 230
        },
        {
          "x": "helicopter",
          "y": 231
        },
        {
          "x": "boat",
          "y": 77
        },
        {
          "x": "train",
          "y": 83
        },
        {
          "x": "subway",
          "y": 270
        },
        {
          "x": "bus",
          "y": 85
        },
        {
          "x": "car",
          "y": 273
        },
        {
          "x": "moto",
          "y": 13
        },
        {
          "x": "bicycle",
          "y": 247
        },
        {
          "x": "horse",
          "y": 91
        },
        {
          "x": "skateboard",
          "y": 248
        },
        {
          "x": "others",
          "y": 162
        }
      ]
    }
  ]

const homePage = () => {
    return (
        <div>
            <p>
                hello
            </p>
            <MyResponsiveLine data={data2}></MyResponsiveLine>
        </div>
    )
}

const MyResponsiveLine = ({ data /* see data tab */ }) => {
    return (
        <div style={{ height: 500 }}>
            <ResponsiveLine
                data={data2}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
        />
        </div>
    )
}

export default MyResponsiveLine;