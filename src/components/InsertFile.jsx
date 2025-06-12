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
          return (
            <button
              type="button"
              key={index}
              onClick={() => downloadByteaFile(item.file_name, item.file_data)}
            >
              {item.file_name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default InsertFile;
