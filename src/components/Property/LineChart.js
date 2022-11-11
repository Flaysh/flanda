import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
    const randomData = {
        options: {
            chart: {
                id: "share-price",
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            colors: ['#33a688'],
        },
        series: [
            {
                name: "Share Price",
                data: [30, 40, 45, 50, 49, 60, 70, 91,]
            }
        ],

    };


    return (
        <>
            <Chart
                options={randomData.options}
                series={randomData.series}
                type="line"
            />
        </>
    );
}

export default LineChart;