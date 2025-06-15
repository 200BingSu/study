import { useEffect, useRef } from "react";
import SignaturePad from "signature_pad";

const SignPad = () => {
  const canvasRef = useRef(null);
  const sigPadRef = useRef(null);

  const url = import.meta.env.VITE_API_URL;

  const postFileData = async (file, fileName) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
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

  const clear = () => {
    sigPadRef.current?.clear();
  };

  const save = () => {
    if (sigPadRef.current?.isEmpty()) {
      alert("서명을 먼저 해주세요.");
      return;
    }

    const dataUrl = sigPadRef.current.getTrimmedCanvas().toDataURL("image/png");
    fetch(dataUrl)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "sign.png", { type: "image/png" });
        postFileData(file, "sign.png");
      });
    postFileData(dataUrl, "sign.png");
    // PNG 다운로드
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "signature.png";
    link.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    sigPadRef.current = new SignaturePad(canvas);
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        style={{ border: "1px solid #000" }}
      />
      <div className="flex gap-2">
        <button
          onClick={clear}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          지우기
        </button>
        <button
          onClick={save}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          저장
        </button>
      </div>
    </div>
  );
};
export default SignPad;
