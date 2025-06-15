import { useEffect, useRef, useState } from "react";
import FormItem from "./FormItem";
import SignPad from "./SignPad";

const ApplyForm = () => {
  const initForm = {
    name: "",
    birth: {
      front: "",
      back: "",
    },
    tellNum_home: {
      front: "",
      middle: "",
      back: "",
    },
    tellNum_phone: {
      front: "",
      middle: "",
      back: "",
    },
    address: "",
    li: "",
    is_izang: false,
    is_priority: false,
    hospital: {},
    is_hanul: false,
    is_first_row: false,
    is_second_row: false,
    is_disabled: false,
    is_check_government_sign: false,
    sign_government: 0,
    sign_apply: null,
    sign_agent: null,
  };

  const signApplyCanvasRef = useRef(null);
  const signAgentCanvasRef = useRef(null);
  const signApplyPadRef = useRef(null); // SignaturePad 인스턴스용
  const signAgentPadRef = useRef(null); // SignaturePad 인스턴스용

  const [form, setForm] = useState(initForm);

  const isEqual = (obj1, obj2) => {
    // 간단한 깊은 비교 함수 (재귀)
    if (obj1 === obj2) return true;
    if (
      typeof obj1 !== "object" ||
      obj1 === null ||
      typeof obj2 !== "object" ||
      obj2 === null
    )
      return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
      if (!keys2.includes(key)) return false;
      if (!isEqual(obj1[key], obj2[key])) return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (isEqual(initForm, form)) {
      // 변경사항 없으면 submit 중단
      return;
    }
    console.log("form", form);
  };

  const handleChangeInput = (key, e, type) => {
    switch (type) {
      case "text":
        setForm({ ...form, [key]: e.target.value });
        return;
      case "birth": {
        const birthType = e.target.dataset.value;
        console.log("birthType", birthType);
        if (birthType === "front") {
          setForm({ ...form, birth: { ...form.birth, front: e.target.value } });
        } else {
          setForm({ ...form, birth: { ...form.birth, back: e.target.value } });
        }
        return;
      }
      case "tellNum": {
        const tellType = e.target.dataset.value;
        if (tellType === "front") {
          setForm({
            ...form,
            [key]: { ...form[key], front: e.target.value },
          });
        } else if (tellType === "middle") {
          setForm({
            ...form,
            [key]: { ...form[key], middle: e.target.value },
          });
        } else {
          setForm({
            ...form,
            [key]: { ...form[key], back: e.target.value },
          });
        }
        return;
      }
      case "boolean": {
        setForm({ ...form, [key]: e.target.checked });
        return;
      }
      case "radio": {
        const hospitalName = e.target.value;
        const hospitalId = e.target.dataset.value;
        setForm({
          ...form,
          hospital: {
            hospital_name: hospitalName,
            hospital_id: hospitalId,
          },
        });
        return;
      }
      default:
        console.log("준비되지 않은 type");
        return;
    }
  };

  const handleClearSign = () => {
    const signApplyPad = signApplyPadRef.current;
    const signAgentPad = signAgentPadRef.current;
    if (signApplyPad) {
      signApplyPad.clear();
      setForm(prev => ({ ...prev, sign_apply: null }));
    }
    if (signAgentPad) {
      signAgentPad.clear();
      setForm(prev => ({ ...prev, sign_agent: null }));
    }
  };

  const handleSaveSign = () => {
    const signApplyPad = signApplyPadRef.current;
    const signAgentPad = signAgentPadRef.current;
    if (signApplyPad.isEmpty() || signAgentPad.isEmpty()) {
      alert("서명을 먼저 해주세요.");
      return;
    }
    signApplyPad.canvas.toBlob(blob => {
      if (blob) {
        const file = new File([blob], "sign_apply.png", { type: "image/png" });
        setForm(prev => ({ ...prev, sign_apply: file }));
      }
    }, "image/png");
    signAgentPad.canvas.toBlob(blob => {
      if (blob) {
        const file = new File([blob], "sign_agent.png", { type: "image/png" });
        setForm(prev => ({ ...prev, sign_agent: file }));
      }
    }, "image/png");
  };

  useEffect(() => {
    console.log("form", form);
  }, [form]);
  return (
    <div className="apply_form flex flex-col gap-2">
      <div className="container flex">
        <div className="form flex-1">
          <div className="form_row flex items-center bg-slate-100 h-12">
            <FormItem
              label="성명"
              value={form.name}
              onChange={e => handleChangeInput("name", e)}
            />
            <FormItem
              label="주민번호"
              value={form.birth}
              onChange={e => handleChangeInput("birth", e, "birth")}
              type="birth"
            />
            <FormItem
              label="전화번호(자택)"
              value={form.tellNum_home}
              onChange={e => handleChangeInput("tellNum_home", e, "tellNum")}
              type="tellNum_home"
            />
            <FormItem
              label="휴대폰"
              value={form.tellNum_phone}
              onChange={e => handleChangeInput("tellNum_phone", e, "tellNum")}
              type="tellNum_phone"
            />
          </div>
          <div className="form_row flex items-center bg-slate-100 h-12">
            <FormItem
              label="주소"
              value={form.address}
              onChange={e => handleChangeInput("address", e)}
              type="text"
              placeholder="주소를 입력하세요"
            />
            <FormItem
              label="리"
              value={form.li}
              onChange={e => handleChangeInput("li", e)}
              type="text"
              placeholder="리를 입력하세요"
            />
          </div>
          <div className="form_row flex items-center bg-slate-100 h-12">
            <FormItem
              label="이장여부"
              value={form.is_izang}
              onChange={e => handleChangeInput("is_izang", e, "boolean")}
              type="booleanCheckBox"
              checkBoxLabel="여"
            />
            <FormItem
              label="우선대상자"
              value={form.is_priority}
              onChange={e => handleChangeInput("is_priority", e, "boolean")}
              type="booleanCheckBox"
              checkBoxLabel="여"
            />
            <FormItem
              label="희망검진병원"
              value={form.hospital.hospital_name}
              onChange={e => handleChangeInput("hospital", e, "radio")}
              type="radio"
              placeholder="희망검진병원을 입력하세요"
            />
          </div>
        </div>
      </div>
      <div className="container flex gap-2">
        {/* 공무원 서명 */}
        <div className="form flex-1">
          <div className="sign_government flex items-center justify-between">
            <div className="flex items-center">
              <p className="bg-slate-200">공무원 서명</p>
              <p>울진군수장인 </p>
            </div>
            <button type="button">동의 서명 요청</button>
          </div>
          <div>
            <div className="signPadWrap flex items-center">
              <div></div>
              <div>
                <p>본인 서명 미리보기</p>
                <SignPad
                  ref={signApplyCanvasRef}
                  onInit={pad => (signApplyPadRef.current = pad)}
                />
              </div>
              <div>
                <p>법정대리인 서명 미리보기</p>
                <SignPad
                  ref={signAgentCanvasRef}
                  onInit={pad => (signAgentPadRef.current = pad)}
                />
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="border-[1px] border-slate-500"
                onClick={handleClearSign}
              >
                지우기
              </button>
              <button
                type="button"
                className="border-[1px] border-slate-500"
                onClick={handleSaveSign}
              >
                저장하기
              </button>
            </div>
          </div>
        </div>
        {/* 추가 자료 등록 */}
        <div className="fileList flex-1 bg-slate-200">추가 자료 등록</div>
      </div>
    </div>
  );
};
export default ApplyForm;
