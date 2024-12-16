window.addEventListener("load", function () {
  //api:day.json
  const DAY_URL = "day.json";
  fetch(DAY_URL)
    .then(function (response) {
      console.log("날짜: ", response);
      const result = response.json();
      return result;
    })
    .then(function (result) {
      console.log("날짜 결과: ", result);
      for (let i = 0; i < 3; i++) {
        const htmlDay = "";
        const tag = `
        <h2>오늘은 ${result[i].day} .</h2>
        <p>${result[i].name}입니다.</p>`;
        htmlDay += tag;
      }
      console.log(htmlDay);
    })
    .catch(function () {});

  // const today = document.querySelector(".today");
  // console.log(today);
  // const event = `<p>오늘은 빼빼로 데이입니다.</p>`;
  // today.innerHTML = event;
});
