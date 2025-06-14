import { useEffect, useState } from "react";

const InsertFile = () => {
  const [file, setFile] = useState(null);
  const [dataList, setDataList] = useState([]);

  const url = import.meta.env.VITE_API_URL;
  const postFileData = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName");
    try {
      const res = await fetch(`${url}/insert/insertFile`, {
        method: "POST",
        body: formData,
      });
      console.log("res", res);
    } catch (error) {
      console.log("postFIle", error);
    }
  };

  const testInsert = async () => {
    const param = { text: "안녕" };

    try {
      const res = await fetch("http://localhost:8080/insert/testInsert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // 중요!
        },
        body: JSON.stringify(param), // 객체 → JSON 문자열
      });

      const data = await res.json(); // 응답 데이터 사용 시
      console.log("res", data);
    } catch (error) {
      console.log("testInsert", error);
    }
  };

  function base64ToUint8Array(base64) {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  function downloadByteaFile(fileName, base64String) {
    try {
      const byteArray = base64ToUint8Array(base64String);
      const blob = new Blob([byteArray], { type: "application/octet-stream" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(link.href);
        document.body.removeChild(link);
      }, 100);
    } catch (e) {
      alert("파일 다운로드에 실패했습니다: " + e.message);
    }
  }

  const selectFileList = async () => {
    try {
      const res = await fetch(`${url}/insert/selectFileList`, {
        method: "POST",
      });
      const data = await res.json();
      console.log("data", data);
      const resultData = data.dataList;
      setDataList(resultData);
    } catch (error) {
      console.log("list읽기", error);
    }
  };
  useEffect(() => {
    console.log("dataList", dataList);
  }, [dataList]);
  useEffect(() => {
    selectFileList();
  }, []);

  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = value => {
    const onlyNums = value.replace(/[^0-9]/g, "");
    if (onlyNums.length < 4) return onlyNums;
    if (onlyNums.length < 8) {
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    }
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
  };

  const formatHomePhoneNumber = value => {
    const onlyNums = value.replace(/[^0-9]/g, "");
    if (onlyNums.startsWith("02")) {
      // 서울(02) 지역번호
      if (onlyNums.length < 3) return onlyNums;
      if (onlyNums.length < 6) {
        return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2)}`;
      }
      if (onlyNums.length < 10) {
        return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2, 5)}-${onlyNums.slice(5, 9)}`;
      }
      return `${onlyNums.slice(0, 2)}-${onlyNums.slice(2, 6)}-${onlyNums.slice(6, 10)}`;
    } else {
      // 그 외 지역번호(3자리)
      if (onlyNums.length < 4) return onlyNums;
      if (onlyNums.length < 7) {
        return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
      }
      if (onlyNums.length < 11) {
        return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
      }
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
    }
  };

  const [ssn, setSsn] = useState("");

  // 주민등록번호 마스킹 함수
  const maskSsn = value => {
    const onlyNums = value.replace(/[^0-9]/g, "");
    if (onlyNums.length <= 6) return onlyNums;
    if (onlyNums.length <= 7)
      return `${onlyNums.slice(0, 6)}-${onlyNums.slice(6)}`;
    // 6자리-1자리-나머지 마스킹
    const masked = "*".repeat(Math.max(0, onlyNums.length - 7));
    return `${onlyNums.slice(0, 6)}-${onlyNums[6]}${masked}`;
  };

  /**
   * base64 문자열을 File 객체와 dataUrl로 변환
   * @param {string} base64Str - base64 인코딩된 이미지 문자열 (data:image/png;base64,xxx 일 수도 있고 순수 base64일 수도 있음)
   * @param {string} fileName - 생성할 파일 이름
   * @returns {{ file: File, dataUrl: string }}
   */
  function base64ToFile(base64Str, fileName = "image.png") {
    // dataUrl 형식인지 확인
    let mime = "";
    let base64Data = "";

    if (base64Str.startsWith("data:")) {
      const parts = base64Str.split(",");
      mime = parts[0].match(/:(.*?);/)[1];
      base64Data = parts[1];
    } else {
      mime = "image/png"; // 기본값
      base64Data = base64Str;
    }

    // base64 → byte array
    const byteString = atob(base64Data);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // File 객체 생성
    const file = new File([ab], fileName, { type: mime });

    // dataUrl 반환 (미리보기용)
    const dataUrl = `data:${mime};base64,${base64Data}`;

    return { file, dataUrl };
  }

  return (
    <div>
      <div>
        <input
          type="file"
          name=""
          id=""
          onChange={e => {
            console.log("e", e.target.files[0]);
            setFile(e.target.files[0]);
          }}
        />
        <button type="button" onClick={postFileData}>
          전송
        </button>
      </div>
      <div>
        <button type="button" onClick={testInsert}>
          test
        </button>
      </div>
      <div>
        {dataList.map((item, index) => {
          const { file, dataUrl } = base64ToFile(
            item.file_data,
            item.file_name,
          );

          return (
            <div key={index}>
              <img src={dataUrl} alt="미리보기" style={{ maxWidth: 300 }} />
              <button
                type="button"
                onClick={() =>
                  downloadByteaFile(item.file_name, item.file_data)
                }
              >
                {item.file_name}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phoneNumber}
          onChange={e => setPhoneNumber(formatPhoneNumber(e.target.value))}
        />
        {/* // input에서는 마스킹된 값, 상태에는 실제 값 저장 */}
        <input
          type="text"
          name="ssn"
          id="ssn"
          maxLength={14}
          value={maskSsn(ssn)}
          onChange={e => {
            // 입력값에서 숫자만 추출해서 상태에 저장
            const onlyNums = e.target.value.replace(/[^0-9]/g, "");
            setSsn(onlyNums.slice(0, 13)); // 13자리 제한
          }}
        />
        ;
      </div>
    </div>
  );
};
export default InsertFile;
