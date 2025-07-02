import React, { useEffect, useState } from "react";

export default function ChildPage() {
  const [signature, setSignature] = useState("");

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

  useEffect(() => {
    const handleMessage = event => {
      if (event.origin !== window.location.origin) return;

      if (event.data.type === "init") {
        console.log("부모창 초기 메시지:", event.data.message);
      } else if (event.data.type === "ping") {
        console.log("부모에서 보낸 ping:", event.data.message);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div>
      <h1>자식 창 (서명 입력)</h1>
      <input
        type="text"
        value={signature}
        onChange={e => setSignature(e.target.value)}
        placeholder="서명 입력"
      />
      <button onClick={sendSignature}>서명 전송</button>
    </div>
  );
}
