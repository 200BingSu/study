import { useEffect, useState } from "react";
import FormItem from "./FormItem";

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
    is_first: false,
    hospital: {},
    is_hanul: false,
    is_first_row: false,
    is_second_row: false,
    is_disabled: false,
    is_check_government_sign: false,
    apply_sign: null,
    apply_daeri: null,
  };
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
      default:
        console.log("준비되지 않은 type");
        return;
    }
  };

  useEffect(() => {
    console.log("form", form);
  }, [form]);
  return (
    <div className="form">
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
    </div>
  );
};
export default ApplyForm;
