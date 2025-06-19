import { createElement, useEffect } from "react";
import Chart from "react-apexcharts";

const CircleGraph = () => {
  const series = [1000, 3000];
  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#FF4560", "#008FFB"],
    title: {
      show: false,
    },
    labels: ["A", "B", "C", "D", "E"],
    tooltip: {
      enabled: false, // 툴팁(hover 정보) 비활성화
    },
    states: {
      hover: {
        filter: {
          type: "none", // hover 시 효과 없음
        },
      },
      active: {
        filter: {
          type: "none", // 클릭 시 효과 없음
        },
      },
    },
    dataLabels: {
      formatter: function (val, opts) {
        // opts, opts.w, opts.w.globals가 모두 있는지 확인
        const globals = opts?.w?.globals;
        const seriesIndex = opts?.seriesIndex;
        let count = 0;
        if (
          globals &&
          Array.isArray(globals.series) &&
          seriesIndex !== undefined
        ) {
          count = globals.series[seriesIndex]?.toLocaleString?.() ?? 0;
        }
        return `${count} (${val?.toFixed ? val.toFixed(1) : val}%)`;
      },
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: ["#333"], // 텍스트 색상 배열, 데이터 수만큼 적용됨
      },
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "40%", // 50% 크기로 줄임
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              label: " ", // 또는 삭제
              formatter: function () {
                return series.reduce((a, b) => a + b, 0).toLocaleString();
              },
            },
          },
        },
      },
    },
    stroke: {
      width: 0, // 경계선 두께 0으로 설정
    },
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
            .apexcharts-datalabel-value {
                font-size: 24px;
                fill: red;
                font-weight: bold;
                top: 50%;
                dominant-baseline: middle !important;
                transform: translateY(-23px); //total 위치
            }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const title = "도넛";
    const style = document.createElement("style");
    style.innerHTML = `
       .apexcharts-legend {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        }
       .apexcharts-legend:before{
        content: '${title}';
        display: inline-block;
        text-align: start;
        font-size: 12px;
        margin-right: 5px;
        line-height: 20px;
       }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
      // legendDiv.removeChild(titleDiv);
    };
  }, []);

  return (
    <>
      <Chart options={options} series={series} type="donut" width="400" />
    </>
  );
};

export default CircleGraph;
