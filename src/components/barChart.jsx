import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// ✅ 커스텀 플러그인: 막대 위 + x축 아래 둘 다 처리
const CustomLabelPlugin = {
  id: "customLabelPlugin",
  afterDatasetsDraw: chart => {
    const { ctx, data, scales } = chart;
    const xScale = scales.x;
    const yScale = scales.y;
    const dataset = data.datasets[0];

    ctx.save();
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";

    // 반복: 각 데이터 포인트에 대해
    dataset.data.forEach((value, index) => {
      const bar = chart.getDatasetMeta(0).data[index];
      const numerator = value;
      const denominator = dataset.customDenominators?.[index] ?? 1;
      const percent = Math.round((numerator / denominator) * 100);

      // ✅ 막대 위 텍스트
      const barX = bar.x;
      const barY = bar.y;
      const barLabel = `${numerator} (${percent}%)`;
      ctx.fillText(barLabel, barX, barY - 10);

      // ✅ x축 아래 텍스트
      const xTickX = xScale.getPixelForTick(index);
      const bottomLabel = `${numerator}/${denominator}`;
      ctx.fillStyle = "gray"; // 색 다르게
      ctx.fillText(bottomLabel, xTickX, xScale.bottom + 20);
    });

    ctx.restore();
  },
};

const data = {
  labels: ["A", "B", "C"],
  datasets: [
    {
      label: "점수",
      data: [50, 75, 30],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      customDenominators: [100, 100, 100],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  layout: {
    padding: {
      bottom: 30, // 아래 여백
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
    x: {
      ticks: {
        font: { size: 14 },
      },
    },
  },
};

export default function BarWithLabels() {
  return <Bar data={data} options={options} plugins={[CustomLabelPlugin]} />;
}
