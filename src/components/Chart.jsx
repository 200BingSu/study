/* eslint-disable no-unused-vars */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// 데이터 예시
const data = {
  labels: ["1월", "2월", "3월", "4월"],
  datasets: [
    {
      label: "매출",
      data: [120, 190, 300, 500],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

// 옵션 예시
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "월별 매출 현황",
    },
  },
};

const Chart = () => {
  return <Bar data={data} options={options} />;
};
export default Chart;
