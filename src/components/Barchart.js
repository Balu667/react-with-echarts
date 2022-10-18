
import ReactEChart from "echarts-for-react";
import "./Barchart.css";
import Draggable from "react-draggable";


const Barchart = () => {

  const eChartOptions = {
    legend: {
      // Try 'horizontal'
      orient: "vertical",
      right: 10,
      top: "center",
    },
    title: {
      text: "Simple Bar chart",
    },
    tooltip: {},
    legend: {
      data: ["sales"],
    },
    xAxis: {
      data: ["Shirts", "Cardigans", "Chiffons", "Pants", "Heels", "Socks"],
    },
    yAxis: {
      type:"value"
    },
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
    <div className="parent">
    <Draggable bounds="parent" axis="x" handle="#handle">
        <div  className="barchart_container">
          <span className="drag" id="handle">For Drag</span>
          <ReactEChart option={eChartOptions} />
        </div>
    </Draggable>
    </div>
  );
};

export default Barchart;
