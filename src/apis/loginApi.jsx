import axios from "axios";

const LOGIN_API_URL = "";

// GET
const getData = async () => {
  try {
    const res = await axios.get(`${LOGIN_API_URL}`);
    console.log("통신 결과:", res.status);
    const responsseStatus = res.status.toString().charAt(0);
    if (responseStatus === "2") {
      return res.data;
    } else {
      console.log("데이터가 없어요.");
      return [];
    }
  } catch (error) {
    const errorStatus = error.response.status.toString().charAt(0);
    if (errorStatus === "5") {
      console.log("서버가 꺼졌어요.");
    }
    if (errorStatus === "4") {
      console.log("4xx, 호출에 실패하였습니다.");
    }
    console.log(error);
    return [];
  }
};
