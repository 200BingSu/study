/* eslint-disable no-unused-vars */
// filepath: [SignPad.jsx](http://_vscodecontentref_/3)
import React, { useEffect, useRef, forwardRef } from "react";
import SignaturePad from "signature_pad";

const SignPad = forwardRef(({ onInit }, ref) => {
  const signPadRef = useRef(null);

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
    ref.current?.clear();
  };

  const save = () => {
    if (ref.current?.isEmpty()) {
      alert("서명을 먼저 해주세요.");
      return;
    }
    const canvas = ref.current;
    canvas.toBlob(blob => {
      if (blob) {
        const file = new File([blob], "sign_apply.png", { type: "image/png" });
        // onSave(value, file); // file을 콜백으로 넘김
      }
    }, "image/png");
  };

  useEffect(() => {
    if (ref.current && !ref.current._signaturePad) {
      // 이미 SignaturePad 인스턴스가 있으면 새로 만들지 않음
      ref.current._signaturePad = new SignaturePad(ref.current);
      if (onInit) onInit(ref.current._signaturePad);
    }
  }, [ref, onInit]);

  return (
    <div>
      <canvas
        ref={ref}
        width={400}
        height={200}
        style={{ border: "1px solid #000" }}
      />
      {/* 버튼 등은 필요에 따라 추가 */}
    </div>
  );
});

SignPad.displayName = "SignPad";
export default SignPad;
