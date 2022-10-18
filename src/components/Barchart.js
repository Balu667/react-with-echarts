import ReactEChart from "echarts-for-react";
import "./Barchart.css";

const Barchart = () => {
  const eChartOptions = {
    legend: {
      // Try 'horizontal'
      orient: "vertical",
      right: 10,
      top: "center",
    },
    title: {
      text: "ECharts Getting Started Example",
    },
    tooltip: {},
    legend: {
      data: ["sales"],
    },
    xAxis: {
      data: ["Shirts", "Cardigans", "Chiffons", "Pants", "Heels", "Socks"],
    },
    yAxis: {},
    series: [
      {
        name: "sales",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
        barWidth: "20%",
      },
    ],
  };
  return (
    <div className="barchart_container">
      <ReactEChart option={eChartOptions} />
    </div>
  );
};

export default Barchart;
