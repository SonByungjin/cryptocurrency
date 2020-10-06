import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";

HC_more(Highcharts);

function StockChart({ coinId, chartList }) {
  const [browserRender, setbrowserRender] = useState(false);
  const [chart, setChart] = useState({
    chart: {
      height: "333px",
    },
    time: {
      useUTC: false,
    },
    rangeSelector: {
      selected: 4,
      inputEnabled: false,
      buttonTheme: {
        visibility: "hidden",
      },
      labelStyle: {
        visibility: "hidden",
      },
    },
    title: {
      text: "Wall Street",
    },
    plotOptions: {
      series: {
        states: {
          hover: {
            enabled: false,
          },
        },
      },
      line: {
        color: "#e12343",
      },
    },
    exporting: {
      enabled: false,
    },
    yAxis: {
      gridLineWidth: 0,
      labels: {
        enabled: false,
      },
    },
    xAxis: {
      lineWidth: 0,
      crosshair: false,
      labels: {
        enabled: false,
      },
      minorTickLength: 0,
      tickLength: 0,
    },
    tooltip: { enabled: false },
    navigator: {
      enabled: true,
    },
    credits: {
      enabled: false,
    },
    scrollbar: {
      barBackgroundColor: "transparent",
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: "transparent",
      buttonBorderWidth: 0,
      buttonArrowColor: "transparent",
      rifleColor: "transparent",
      trackBackgroundColor: "transparent",
      trackBorderColor: "transparent",
    },
    series: [{ data: [] }],
  });

  useEffect(() => {
    if (browserRender) {
      fetchChart();
    } else {
      setbrowserRender(true);
    }
  }, [chartList]);

  useEffect(() => {
    fetchChart();
  }, [coinId]);

  const fetchChart = () => {
    setChart({
      ...chart,
      plotOptions: {
        line: {
          color: chartList[coinId]?.upDown > 0 ? "#e12343" : "#1763b6",
        },
      },
      series: [
        {
          data: chartList[coinId]?.data.map((data) => [
            data.reported_time,
            data.closing_price,
          ]),
        },
      ],
    });
  };

  return (
    <HighchartsReact
      constructorType={"stockChart"}
      highcharts={Highcharts}
      options={chart}
    />
  );
}
export default StockChart;
