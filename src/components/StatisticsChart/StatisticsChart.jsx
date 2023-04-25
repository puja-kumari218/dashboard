import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import React from 'react';

const StatisticsChart = () => {

    const option = {
  

        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            },
            backgroundColor: "rgba(1, 0.2, 1, 0.59)",
            borderWidth: .1,
        },
        grid: {
            left: "4%",
            right: "4%",
            bottom: "4%",
            containLabel: true,
            show: false,
        },

        // 1st line

        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["08/11", "09/11", "10/11", "11/11", "11/12", "11/13",]
            }
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,

                }


            }
        ],
        series: [
            {
                type: "line",
                smooth: true,


                lineStyle: {
                    color: (214,116,225, [

                    ]),
                    width: 2
                },
                areaStyle: {
                    opacity: .3,
                    color: new echarts.graphic.LinearGradient(73,12,80,1, [
                        {
                            offset: 1,
                            color: "#490c50"

                        },
                        {
                            offset: 1,
                            color: "rgba(255,144,70,0.1)"
                        }
                    ])
                },
                emphasis: {
                    focus: "series",
                },
                showSymbol: false,
                data: [100000, 200000, 390000, 180000, 22000, 200000, 66000]
            },
            {
                type: "line",
                smooth: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(1, 0.1, 0, 1, [
                        {
                            offset: 0,
                            color: "rgb(255, 191, 0)",
                        },
                        {
                            offset: 1,
                            color: "#F450D3"
                        }
                    ]),
                    width: 3.5
                },
                areaStyle: {
                    opacity: .4,
                    color: new echarts.graphic.LinearGradient(73,12,80,1, [
                        {
                            offset: 0,
                            color: "#490c50"
                        },
                        {
                            offset: 0,
                            color: "rgba(253,29,29,1)"
                        }
                    ])
                },
                emphasis: {
                    focus: "series",
                },
                showSymbol: true,
                 data: [80000, 50000, 490000, 83880, 220990, 33000, 336000]
            }
        ]
    }

    return (
        <ReactECharts option={option}
        />
    )
}

export default StatisticsChart