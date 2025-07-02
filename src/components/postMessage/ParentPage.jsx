import React, { useEffect, useRef, useState } from "react";

export default function ParentPage() {
  const [signature, setSignature] = useState(null);
  const childWindowRef = useRef(null);

  const openSignatureWindow = () => {
    const child = window.open(
      "/child", // 자식 창 경로
      "signatureWindow",
      "width=600,height=400",
    );
    childWindowRef.current = child;

    // 자식 창이 로드될 시간을 약간 주고 메시지 전송
    setTimeout(() => {
      child.postMessage(
        { type: "init", message: "서명을 시작해주세요." },
        window.location.origin,
      );
    }, 500); // 0.5초 후 전송
  };

  const sendPingToChild = () => {
    if (childWindowRef.current) {
      childWindowRef.current.postMessage(
        { type: "ping", message: "부모에서 보낸 ping!" },
        window.location.origin,
      );
    }
  };

  useEffect(() => {
    const handleMessage = event => {
      if (event.origin !== window.location.origin) return;

      if (event.data.type === "signatureCompleted") {
        console.log("부모 창에서 받은 서명:", event.data.payload);
        setSignature(event.data.payload);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div>
      <h1>부모 창</h1>
      <button onClick={openSignatureWindow}>서명 받기</button>
      <button onClick={sendPingToChild}>자식창에 ping 보내기</button>
      {signature && <p>받은 서명: {signature}</p>}
    </div>
  );
}
