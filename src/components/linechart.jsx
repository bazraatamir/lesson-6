import React from "react";
import {Bar} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  PointElement,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Linechart = () => {
  const data = {
    labels: ["january", "fabrary", "March", "december"],
    datasets: [
      {
        label: "Sales",
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
      },
    ],
  };

  return <Bar data={data} />;
};

export default Linechart;
