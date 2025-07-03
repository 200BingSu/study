import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";

export default function ParentPage() {
  const [form, setForm] = useState({ name: "" });
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

  const sendFormToChild = () => {
    if (childWindowRef.current) {
      childWindowRef.current.postMessage(
        { type: "form", payload: form },
        window.location.origin,
      );
    }
  };

  const sendChangeModeToChild = () => {
    if (childWindowRef.current) {
      childWindowRef.current.postMessage(
        { type: "mode", payload: "form" },
        window.location.origin,
      );
    }
  };

  const handleClickSendBtn = () => {
    sendFormToChild();
    sendChangeModeToChild();
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
      <input
        type="text"
        name="name"
        id="name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        placeholder="이름을 입력하세요"
      />
      <Button type="button" onClick={handleClickSendBtn}>
        폼 보내기
      </Button>
      <Button type="button" onClick={openSignatureWindow}>
        창열기
      </Button>
      <Button type="button" onClick={sendChangeModeToChild}>
        자식창에 ping 보내기
      </Button>
      {signature && <p>받은 서명: {signature}</p>}
    </div>
  );
}
