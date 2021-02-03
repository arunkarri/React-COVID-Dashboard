import React from 'react';
import Chart from 'react-apexcharts';

const Timeline = (props) => {
  const options = {
    chart: {
      id: 'Country Data',
    },
    xaxis: {
      labels: {
        datetimeFormatter: {
          year: 'yyyy',
          month: "MMM 'yy",
          day: 'dd MMM',
          hour: 'HH:mm',
        },
        formatter: function (value) {
          return new Date(value).toLocaleDateString();
        },
      },
      tickAmount: 5,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
  };

  const series1 = [
    {
      name: 'Deaths',
      data: props.deathSeries,
    },
  ];
  const series2 = [
    {
      name: 'Active',
      data: props.activeSeries,
    },
    {
      name: 'Recovered',
      data: props.recoveredSeries,
    },
  ];
  return (
    <>
      <b className="text-danger">Deaths</b>
      <Chart options={options} series={series1} type="line" width={350} height={250} />
      <b className="text-primary">Active & Recovered</b>
      <Chart options={options} series={series2} type="line" width={350} height={250} />
    </>
  );
};

export default Timeline;
