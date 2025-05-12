import styles from "./StaticsByYear.module.scss";

// import cancelButton from "image/common/cancelButton.svg";
// import searchButton from "image/common/searchButton.svg";

import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
// import { asyncCall } from "ggnr/util/ApiService";
// import { useSelector } from "react-redux";

// 필요한 모듈 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

const StaticsByYear = () => {
  //   const serviceState = useSelector(state => state.serviceState);
  //   const standardData = useSelector(standard => standard.standardData);
  //   const dataList = standardData?.standardDetail?.dataList[0];

  const currentYear = new Date().getFullYear();

  const filterArr = [
    { key: 2, kor: "건별", value: "DATA" },
    { key: 3, kor: "일별", value: "DAY" },
    { key: 1, kor: "월별", value: "MONTH" },
    { key: 0, kor: "년도별", value: "YEAR" },
  ];

  const labels = [];
  for (let index = 0; index < 12; index++) {
    labels.push(`${index + 1}월`);
  }

  const years = [];
  for (let i = currentYear - 10; i <= currentYear + 10; i++) {
    years.push({ label: `${i}년`, value: i });
  }

  const colors = [
    "rgba(255, 134, 48, 1)",
    "rgba(255, 0, 0, 0.85)",
    "rgba(0, 98, 122, 0.85)",
  ];

  const [stationList, setStationList] = useState([]);
  const [staticsData, setStaticsData] = useState([]);

  const [staionCode, setStaionCode] = useState("");
  const [selectedYears, setSelectedYears] = useState([
    { label: `${currentYear}년`, value: currentYear },
  ]);
  useEffect(() => {
    console.log("selectedYears", selectedYears);
  }, [selectedYears]);
  const dataArr = [
    {
      key: 1,
      kor: "수심",
      label: "수심(m)",
      value: "water_level",
    },
    {
      key: 2,
      kor: "전도도",
      label: "전도도",
      value: "conductivity",
    },
    {
      key: 3,
      kor: "수온",
      label: "수온",
      value: "water_temperature",
    },
  ];

  const [selectedData, setSelectedData] = useState(dataArr[0]);

  const [isLoading, setIsLoading] = useState(false);

  //   측정소 목록
  const getStationList = async () => {
    setIsLoading(true);
    const payLoad = {
      page: 1,
      pageSize: 100,
    };
    try {
      const data = {
        data: [
          {
            groundwater_support_station_key: 1,
            station_name: "측정소1",
            station_standard_code: "1234",
          },
          {
            groundwater_support_station_key: 2,
            station_name: "측정소2",
            station_standard_code: "2234",
          },
        ],
        code: "SUCCESS",
      };
      const dataList = data.data;
      //   console.log("측정소 목록", data);
      if (data.code === "SUCCESS") {
        setStationList([...dataList]);
      }
    } catch (error) {
      console.log("측정소 목록", error);
    }
  };

  // 수위측정 데이터 읽기
  const getWaterLevelData = async () => {
    setIsLoading(true);
    const yearsValueArr = selectedYears.map(item => item.value);
    const payLoad = {
      years: yearsValueArr,
      station_standard_code: staionCode,
    };

    try {
      const data = {
        waterDataMap: {
          2024: [
            {
              station_standard_code: "WS2401",
              measurement_time: "2024-01-15T10:00:00Z",
              gl: 13.4,
              water_temperature: 17.5,
              conductivity: 311.2,
              water_level: 3.1,
              groundwater_support_measurement_key: "GW202401",
              label: "2024-01",
            },
            {
              station_standard_code: "WS2402",
              measurement_time: "2024-02-15T10:00:00Z",
              gl: 13.9,
              water_temperature: 7.5,
              conductivity: 222.1,
              water_level: 6.7,
              groundwater_support_measurement_key: "GW202402",
              label: "2024-02",
            },
            {
              station_standard_code: "WS2403",
              measurement_time: "2024-03-15T10:00:00Z",
              gl: 11.0,
              water_temperature: 5.1,
              conductivity: 420.7,
              water_level: 5.9,
              groundwater_support_measurement_key: "GW202403",
              label: "2024-03",
            },
            {
              station_standard_code: "WS2404",
              measurement_time: "2024-04-15T10:00:00Z",
              gl: 12.3,
              water_temperature: 10.2,
              conductivity: 332.4,
              water_level: 7.7,
              groundwater_support_measurement_key: "GW202404",
              label: "2024-04",
            },
            {
              station_standard_code: "WS2405",
              measurement_time: "2024-05-15T10:00:00Z",
              gl: 11.3,
              water_temperature: 12.1,
              conductivity: 311.1,
              water_level: 2.4,
              groundwater_support_measurement_key: "GW202405",
              label: "2024-05",
            },
            {
              station_standard_code: "WS2406",
              measurement_time: "2024-06-15T10:00:00Z",
              gl: 12.9,
              water_temperature: 9.9,
              conductivity: 433.2,
              water_level: 7.9,
              groundwater_support_measurement_key: "GW202406",
              label: "2024-06",
            },
            {
              station_standard_code: "WS2407",
              measurement_time: "2024-07-15T10:00:00Z",
              gl: 11.5,
              water_temperature: 11.5,
              conductivity: 463.3,
              water_level: 5.0,
              groundwater_support_measurement_key: "GW202407",
              label: "2024-07",
            },
            {
              station_standard_code: "WS2408",
              measurement_time: "2024-08-15T10:00:00Z",
              gl: 11.2,
              water_temperature: 17.8,
              conductivity: 457.9,
              water_level: 4.1,
              groundwater_support_measurement_key: "GW202408",
              label: "2024-08",
            },
            {
              station_standard_code: "WS2409",
              measurement_time: "2024-09-15T10:00:00Z",
              gl: 11.9,
              water_temperature: 16.5,
              conductivity: 396.3,
              water_level: 6.7,
              groundwater_support_measurement_key: "GW202409",
              label: "2024-09",
            },
            {
              station_standard_code: "WS2410",
              measurement_time: "2024-10-15T10:00:00Z",
              gl: 11.9,
              water_temperature: 6.1,
              conductivity: 459.1,
              water_level: 5.7,
              groundwater_support_measurement_key: "GW202410",
              label: "2024-10",
            },
            {
              station_standard_code: "WS2411",
              measurement_time: "2024-11-15T10:00:00Z",
              gl: 11.7,
              water_temperature: 5.1,
              conductivity: 340.4,
              water_level: 7.8,
              groundwater_support_measurement_key: "GW202411",
              label: "2024-11",
            },
            {
              station_standard_code: "WS2412",
              measurement_time: "2024-12-15T10:00:00Z",
              gl: 13.8,
              water_temperature: 12.4,
              conductivity: 286.0,
              water_level: 3.8,
              groundwater_support_measurement_key: "GW202412",
              label: "2024-12",
            },
          ],
          2025: [
            {
              station_standard_code: "WS2501",
              measurement_time: "2025-01-15T10:00:00Z",
              gl: 11.1,
              water_temperature: 19.8,
              conductivity: 481.0,
              water_level: 5.0,
              groundwater_support_measurement_key: "GW202501",
              label: "2025-01",
            },
            {
              station_standard_code: "WS2502",
              measurement_time: "2025-02-15T10:00:00Z",
              gl: 14.5,
              water_temperature: 17.3,
              conductivity: 298.1,
              water_level: 2.7,
              groundwater_support_measurement_key: "GW202502",
              label: "2025-02",
            },
            {
              station_standard_code: "WS2503",
              measurement_time: "2025-03-15T10:00:00Z",
              gl: 13.3,
              water_temperature: 16.4,
              conductivity: 330.8,
              water_level: 4.4,
              groundwater_support_measurement_key: "GW202503",
              label: "2025-03",
            },
            {
              station_standard_code: "WS2504",
              measurement_time: "2025-04-15T10:00:00Z",
              gl: 12.9,
              water_temperature: 9.8,
              conductivity: 281.4,
              water_level: 3.0,
              groundwater_support_measurement_key: "GW202504",
              label: "2025-04",
            },
            {
              station_standard_code: "WS2505",
              measurement_time: "2025-05-15T10:00:00Z",
              gl: 13.4,
              water_temperature: 4.6,
              conductivity: 203.8,
              water_level: 7.6,
              groundwater_support_measurement_key: "GW202505",
              label: "2025-05",
            },
            {
              station_standard_code: "WS2506",
              measurement_time: "2025-06-15T10:00:00Z",
              gl: 14.0,
              water_temperature: 10.4,
              conductivity: 423.0,
              water_level: 4.7,
              groundwater_support_measurement_key: "GW202506",
              label: "2025-06",
            },
            {
              station_standard_code: "WS2507",
              measurement_time: "2025-07-15T10:00:00Z",
              gl: 14.4,
              water_temperature: 17.2,
              conductivity: 238.7,
              water_level: 5.1,
              groundwater_support_measurement_key: "GW202507",
              label: "2025-07",
            },
            {
              station_standard_code: "WS2508",
              measurement_time: "2025-08-15T10:00:00Z",
              gl: 14.4,
              water_temperature: 7.2,
              conductivity: 223.6,
              water_level: 4.3,
              groundwater_support_measurement_key: "GW202508",
              label: "2025-08",
            },
            {
              station_standard_code: "WS2509",
              measurement_time: "2025-09-15T10:00:00Z",
              gl: 11.1,
              water_temperature: 12.1,
              conductivity: 424.3,
              water_level: 2.4,
              groundwater_support_measurement_key: "GW202509",
              label: "2025-09",
            },
            {
              station_standard_code: "WS2510",
              measurement_time: "2025-10-15T10:00:00Z",
              gl: 13.8,
              water_temperature: 19.6,
              conductivity: 413.6,
              water_level: 4.3,
              groundwater_support_measurement_key: "GW202510",
              label: "2025-10",
            },
            {
              station_standard_code: "WS2511",
              measurement_time: "2025-11-15T10:00:00Z",
              gl: 13.7,
              water_temperature: 15.9,
              conductivity: 287.0,
              water_level: 3.3,
              groundwater_support_measurement_key: "GW202511",
              label: "2025-11",
            },
            {
              station_standard_code: "WS2512",
              measurement_time: "2025-12-15T10:00:00Z",
              gl: 11.3,
              water_temperature: 18.2,
              conductivity: 220.5,
              water_level: 3.9,
              groundwater_support_measurement_key: "GW202512",
              label: "2025-12",
            },
          ],
        },
        weatherDataMap: {
          2024: [
            {
              weather_station_rainfall_key: "RAIN202401",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-01-28T23:59:59Z",
              rainfall: 16.5,
              label: "2024-01",
              sum: 45.4,
              avg: 0.7,
            },
            {
              weather_station_rainfall_key: "RAIN202402",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-02-28T23:59:59Z",
              rainfall: 28.3,
              label: "2024-02",
              sum: 75.6,
              avg: 1.0,
            },
            {
              weather_station_rainfall_key: "RAIN202403",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-03-28T23:59:59Z",
              rainfall: 20.8,
              label: "2024-03",
              sum: 59.3,
              avg: 0.7,
            },
            {
              weather_station_rainfall_key: "RAIN202404",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-04-28T23:59:59Z",
              rainfall: 6.6,
              label: "2024-04",
              sum: 19.7,
              avg: 0.3,
            },
            {
              weather_station_rainfall_key: "RAIN202405",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-05-28T23:59:59Z",
              rainfall: 5.5,
              label: "2024-05",
              sum: 16.1,
              avg: 0.2,
            },
            {
              weather_station_rainfall_key: "RAIN202406",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-06-28T23:59:59Z",
              rainfall: 14.2,
              label: "2024-06",
              sum: 35.8,
              avg: 0.6,
            },
            {
              weather_station_rainfall_key: "RAIN202407",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-07-28T23:59:59Z",
              rainfall: 6.9,
              label: "2024-07",
              sum: 20.3,
              avg: 0.2,
            },
            {
              weather_station_rainfall_key: "RAIN202408",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-08-28T23:59:59Z",
              rainfall: 9.8,
              label: "2024-08",
              sum: 28.2,
              avg: 0.4,
            },
            {
              weather_station_rainfall_key: "RAIN202409",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-09-28T23:59:59Z",
              rainfall: 1.2,
              label: "2024-09",
              sum: 3.6,
              avg: 0.0,
            },
            {
              weather_station_rainfall_key: "RAIN202410",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-10-28T23:59:59Z",
              rainfall: 25.7,
              label: "2024-10",
              sum: 70.6,
              avg: 0.9,
            },
            {
              weather_station_rainfall_key: "RAIN202411",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-11-28T23:59:59Z",
              rainfall: 23.9,
              label: "2024-11",
              sum: 67.5,
              avg: 0.9,
            },
            {
              weather_station_rainfall_key: "RAIN202412",
              station_code: "WR24",
              station_name: "서울 관측소",
              measuredat: "2024-12-28T23:59:59Z",
              rainfall: 6.9,
              label: "2024-12",
              sum: 19.7,
              avg: 0.3,
            },
          ],
          2025: [
            {
              weather_station_rainfall_key: "RAIN202501",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-01-28T23:59:59Z",
              rainfall: 8.6,
              label: "2025-01",
              sum: 24.0,
              avg: 0.4,
            },
            {
              weather_station_rainfall_key: "RAIN202502",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-02-28T23:59:59Z",
              rainfall: 3.7,
              label: "2025-02",
              sum: 10.7,
              avg: 0.2,
            },
            {
              weather_station_rainfall_key: "RAIN202503",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-03-28T23:59:59Z",
              rainfall: 27.1,
              label: "2025-03",
              sum: 75.3,
              avg: 0.9,
            },
            {
              weather_station_rainfall_key: "RAIN202504",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-04-28T23:59:59Z",
              rainfall: 1.0,
              label: "2025-04",
              sum: 2.6,
              avg: 0.0,
            },
            {
              weather_station_rainfall_key: "RAIN202505",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-05-28T23:59:59Z",
              rainfall: 11.3,
              label: "2025-05",
              sum: 28.8,
              avg: 0.5,
            },
            {
              weather_station_rainfall_key: "RAIN202506",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-06-28T23:59:59Z",
              rainfall: 20.1,
              label: "2025-06",
              sum: 55.5,
              avg: 0.9,
            },
            {
              weather_station_rainfall_key: "RAIN202507",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-07-28T23:59:59Z",
              rainfall: 24.7,
              label: "2025-07",
              sum: 69.9,
              avg: 1.0,
            },
            {
              weather_station_rainfall_key: "RAIN202508",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-08-28T23:59:59Z",
              rainfall: 18.4,
              label: "2025-08",
              sum: 55.0,
              avg: 0.7,
            },
            {
              weather_station_rainfall_key: "RAIN202509",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-09-28T23:59:59Z",
              rainfall: 25.2,
              label: "2025-09",
              sum: 63.4,
              avg: 0.9,
            },
            {
              weather_station_rainfall_key: "RAIN202510",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-10-28T23:59:59Z",
              rainfall: 14.0,
              label: "2025-10",
              sum: 37.7,
              avg: 0.5,
            },
            {
              weather_station_rainfall_key: "RAIN202511",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-11-28T23:59:59Z",
              rainfall: 8.5,
              label: "2025-11",
              sum: 24.7,
              avg: 0.3,
            },
            {
              weather_station_rainfall_key: "RAIN202512",
              station_code: "WR25",
              station_name: "서울 관측소",
              measuredat: "2025-12-28T23:59:59Z",
              rainfall: 20.8,
              label: "2025-12",
              sum: 60.9,
              avg: 1.0,
            },
          ],
        },
        status: "SUCCESS",
      };
      console.log("수위측정 데이터", data);
      if (data.status === "SUCCESS") {
        console.log("selectedYears", selectedYears);
        const formattedData = selectedYears.map((item, index) => {
          return {
            type: "line",
            label: item.label,
            data: [
              ...data.waterDataMap[item.value].map(
                item => item[selectedData.value],
              ),
            ],
            borderColor: colors[index % colors.length],
            borderWidth: 2,
            pointRadius: 0,
            fill: false,
            yAxisID: `y1`, // 라인 차트는 별도 축 사용 (선택)
            order: 1,
          };
        });
        console.log("forformattedDatam", formattedData);
        setStaticsData(formattedData);
      }
    } catch (error) {
      console.log("수위측정 데이터", error);
    } finally {
      setIsLoading(false);
    }
  };

  const topAlignedTitlePlugin = {
    id: "topAlignedTitlePlugin",
    afterDraw(chart) {
      const ctx = chart.ctx;
      const yScale = chart.scales["y"];
      const rightScales = Object.values(chart.scales).filter(
        scale => scale.axis === "y" && scale.position === "right",
      );

      ctx.save();
      ctx.font = "bold 12px sans-serif";
      ctx.fillStyle = "#666";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";

      // 왼쪽 y 축 제목 (display 여부와 상관없이 text가 있으면 그림)
      if (yScale?.options?.title?.text) {
        ctx.fillText(
          yScale.options.title.text,
          yScale.left - 0,
          chart.chartArea.top - 30,
        );
      }

      // 오른쪽 축들 중 가장 오른쪽 축 제목 하나만 표시
      if (rightScales.length > 0) {
        const rightMost = rightScales.reduce((prev, curr) =>
          curr.right > prev.right ? curr : prev,
        );

        const titleText = rightMost.options.title?.text;
        if (titleText) {
          ctx.fillText(
            titleText,
            rightMost.right + 0,
            chart.chartArea.top - 30,
          );
        }
      }

      ctx.restore();
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        type: "bar",
        label: "강수량(mm)",
        data: [30, 20, 10, 30, 30, 30, 15, 10, 9, 5, 6, 8], // 일단 고정
        backgroundColor: "rgba(0, 98, 122, 0.85)",
        order: 2,
      },
      ...staticsData,
    ],
  };
  console.log("data", data.datasets);
  // 옵션
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      title: {
        display: false,
        text: "연도별 비교조회",
      },
      legend: {
        position: "right",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        type: "linear",
        position: "left",
        align: "start",
        title: {
          display: false,
          text: "강수량 (mm)",
        },
      },
      y1: {
        grid: {
          display: false,
          drawOnChartArea: false, // 겹치지 않도록
        },
        type: "linear",
        position: "right",
        align: "start",
        title: {
          display: false,
          text: "수위 (m)",
        },
      },
    },
  };

  /* NOTE: 검색 초기화 */
  function searchClear() {
    // searchForm.current.reset();
    // selectDataList(1);
  }

  // 년도 선택
  const handleClickYears = e => {
    const yearValue = Number(e.target.value);
    const isSelected = selectedYears.some(item => item.value === yearValue);

    const updatedYears = isSelected
      ? selectedYears.filter(item => item.value !== yearValue)
      : [...selectedYears, years.find(item => item.value === yearValue)];

    setSelectedYears(updatedYears);
  };

  // 검색 클릭
  const handleClickSearchBtn = () => {
    if (staionCode === "") {
      alert("관측소를 선택해주세요.");
      return;
    }
    if (selectedYears.length === 0) {
      alert("최소 1개의 년도를 입력해주세요.");
      return;
    }
    getWaterLevelData();
  };

  useEffect(() => {
    getStationList();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        {/* NOTE : 기능 title */}
        <div className={styles.titleDiv}>
          <p>
            {/* {serviceState.currentService.serviceKorName} <span>&gt;</span>{" "}
            {serviceState.currentSubService.serviceKorName} */}
          </p>
        </div>
        {/* NOTE : 검색 및 제어 버튼 */}
        <div className={styles.searchDiv}>
          <div>
            <label htmlFor="stationList">관측소</label>
            <select
              name="stationList"
              id="stationList"
              onChange={e => {
                setStaionCode(e.target.value);
              }}
              defaultValue={"관측소를 선택해주세요"}
            >
              {stationList.map(item => {
                return (
                  <option
                    key={item.groundwater_support_station_key}
                    value={item.station_standard_code}
                  >
                    {item.station_name}
                  </option>
                );
              })}
            </select>
            <div className={styles.searchButtonDiv}>
              <div className="standarListdBtn" onClick={handleClickSearchBtn}>
                검색
                <img src={"searchButton"} alt="" />
              </div>
              <div className="standarListdBtn" onClick={searchClear}>
                <img src={"cancelButton"} alt="" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="year">년도별</label>
            <select
              name="year"
              id="year"
              defaultValue={[currentYear]}
              multiple
              onChange={e => {
                handleClickYears(e);
              }}
            >
              {years.map(item => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <div>
              <ul>
                {selectedYears.map((item, index) => (
                  <li key={index}>
                    <p type="button">{item.label}</p>
                    <button
                      type="button"
                      onClick={() => {
                        console.log("item.value", item.value);
                        setSelectedYears(
                          selectedYears.filter(
                            year => year.value !== item.value,
                          ),
                        );
                      }}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <ul>
            {dataArr.map(item => (
              <li
                key={item.key}
                onClick={() => {
                  setSelectedData(item);
                }}
              >
                {item.kor}
              </li>
            ))}
          </ul>
        </div>
        <Chart
          type="bar"
          data={data}
          options={options}
          plugins={[topAlignedTitlePlugin]}
        />
      </div>
    </>
  );
};
export default StaticsByYear;
