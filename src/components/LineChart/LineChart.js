/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-streaming';
import "./LineChart.css";

const LineChart = props => {
    const context = useThemeUI()
    const chartRef = React.createRef();
    var MAX_DATA_SET_LENGTH = 10;

    const chartData = { 
        labels: props.timeData,
        datasets: [{
            data: props.temperatureData,
            label: 'Temperature',
            fill: true,
            borderWidth: 2,
            backgroundColor: 'rgba(4, 214, 144, 0.1)',
            borderColor: 'rgba(4, 214, 143, 1)',
        }]
    };

    chartData.labels = chartData.labels.slice(-10);
    chartData.datasets[0].data = chartData.datasets[0].data.slice(-10);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1000,
          easing: 'linear'
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
            yAxes: [
                {
                ticks: {
                    fontColor: context.theme.colors.text,
                    maxTicksLimit: MAX_DATA_SET_LENGTH
                },
                id: 'y-axis-0',
                position: 'left',
                },
            ],
          xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontColor: context.theme.colors.text,
                    maxTicksLimit: MAX_DATA_SET_LENGTH
                },
          }]
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
    };

    return (
      <div className="line-chart">
        {chartData.dataset ? <div /> : <Line ref={chartRef} data={chartData} options={options}/>}
      </div>
    );
  };
  
  export default LineChart;
  
