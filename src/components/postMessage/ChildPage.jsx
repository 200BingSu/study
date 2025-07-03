import { useEffect, useState } from "react";

export default function ChildPage() {
  const [signature, setSignature] = useState("");
  const [form, setForm] = useState({ name: "" });
  const [mode, setMode] = useState("default");

  const sendSignature = () => {
    if (window.opener) {
      window.opener.postMessage(
        {
          type: "signatureCompleted",
          payload: signature,
        },
        window.location.origin,
      );
      //   window.close(); // 창 닫기 (필요 시)
    }
  };

  const renderComponent = () => {
    switch (mode) {
      case "default":
        return <>default mode</>;
      case "form":
        return (
          <>
            <h1>자식 창 (서명 입력)</h1>
            <input
              type="text"
              value={signature}
              onChange={e => setSignature(e.target.value)}
              placeholder="서명 입력"
            />
            <button
              onClick={() => {
                sendSignature();
                setMode("default");
              }}
            >
              서명 전송
            </button>
          </>
        );
      default:
        return <div>알 수 없는 모드입니다.</div>;
    }
  };

  useEffect(() => {
    const handleMessage = event => {
      if (event.origin !== window.location.origin) return;

      if (event.data.type === "init") {
        console.log("부모창 초기 메시지:", event.data.message);
      } else if (event.data.type === "mode") {
        console.log("부모에서 보낸 mode:", event.data.payload);
        setMode(event.data.payload);
      } else if (event.data.type === "form") {
        // console.log("부모에서 보낸 form:", event.data.payload);
        setForm(event.data.payload);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return <div>{renderComponent()}</div>;
}
