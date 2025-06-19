import ApplyForm from "./components/ApplyForm";
import CircleGraph from "./components/CircleGraph";

const App = () => {
  const handleDownloadAllSVGs = () => {
    const chartDivs = document.querySelectorAll(".apexcharts-canvas");
    if (chartDivs.length === 0) return alert("차트가 없습니다!");

    const titles = ["도넛 차트", "막대 차트", "꺾은선 차트"]; // 각 차트의 제목
    const chartWidth = 400;
    const chartHeight = 400;
    const titleHeight = 30;
    const titleYOffset = -30; // 제목을 차트 아래로 살짝 내리기
    const padding = 10;

    const totalWidth = chartDivs.length * (chartWidth + 20);
    const totalHeight = chartHeight + titleHeight + titleYOffset + padding;

    const titleY = chartHeight + titleYOffset;
    let combinedSVGContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${totalHeight}">`;

    chartDivs.forEach((chartDiv, index) => {
      const svg = chartDiv.querySelector("svg");
      if (!svg) return;

      const clonedSvg = svg.cloneNode(true);

      // ⚠️ XMLSerializer 충돌 방지
      clonedSvg.querySelectorAll("*").forEach(el => {
        [...el.attributes].forEach(attr => {
          if (attr.name.startsWith("data:")) {
            el.removeAttribute(attr.name);
          }
        });
      });

      const innerContent = new XMLSerializer()
        .serializeToString(clonedSvg)
        .replace(/^<svg[^>]*>/, "")
        .replace(/<\/svg>$/, "");

      const xOffset = index * (chartWidth + 20); // 차트 수평 위치 조절

      // ✅ 차트 삽입
      const chartGroup = `<g transform="translate(${xOffset}, 0)">${innerContent}</g>`;

      // ✅ 하단 제목 삽입
      const titleText = `
      <text x="${xOffset + chartWidth / 2}" y="${chartHeight + titleYOffset}" text-anchor="middle"
        font-size="14" font-family="Arial" fill="#000">
        ${titles[index] || `Chart ${index + 1}`}
      </text>
    `;

      combinedSVGContent += chartGroup + titleText;
    });

    combinedSVGContent += "</svg>";

    const blob = new Blob([combinedSVGContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `가로형_차트_통합.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ height: "100%" }}>
      <button
        type="button"
        onClick={() =>
          handleDownloadAllSVGs("apexchartsdo84xx6sh", "도넛 차트")
        }
      >
        다운받기
      </button>
      <CircleGraph />
      <CircleGraph />
    </div>
  );
};
export default App;
