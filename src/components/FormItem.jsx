import { useEffect, useRef, useState } from "react";
import { maskSsnBack } from "./Util";

/* eslint-disable react/prop-types */
const FormItem = ({ label = "", type = "text", value, onChange }) => {
  const middleRef = useRef(null);
  const backRef = useRef(null);

  const [maskingValue, setMaskingValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const getMaxLength = () => {
    if (type === "tellNum_home") {
      if (value.front?.startsWith("02")) return 2;
      return 3;
    }
    return 4;
  };

  useEffect(() => {
    if (value?.back) {
      const masked = maskSsnBack(value.back);
      setMaskingValue(masked);
    }
  }, [value?.back]);

  const renderInput = () => {
    switch (type) {
      case "text":
        return (
          <input
            type="text"
            value={value ?? ""}
            onChange={e => onChange(e)}
            className="flex-1 w-full h-full px-2"
            placeholder="이름을 입력해주세요"
          />
        );

      case "birth": {
        const gender = value?.back?.[0] ?? "";
        const getGenderText = () => {
          switch (gender) {
            case "1":
            case "3":
              return "남";
            case "2":
            case "4":
              return "여";
            default:
              return " ";
          }
        };
        return (
          <div className="flex gap-1 h-full items-center">
            <input
              type="text"
              data-value="front"
              maxLength={6}
              value={value.front ?? ""}
              onChange={e => {
                onChange(e);
                if (e.target.value.length === 6) {
                  backRef.current?.focus();
                }
              }}
              className=" h-full"
            />
            -
            <input
              type="text"
              data-value="back"
              maxLength={7}
              ref={backRef}
              value={isEdit ? (value.back ?? "") : maskingValue} // 🔁 마스킹 제거
              onChange={e => onChange(e)}
              onBlur={() => {
                setIsEdit(false);
                setMaskingValue(maskSsnBack(value.back));
              }}
              onFocus={() => {
                setIsEdit(true);
                setMaskingValue("");
              }}
              className=" h-full"
            />
            <span className={`${isEdit ? "invisible" : "visible"}`}>
              ({getGenderText()})
            </span>
          </div>
        );
      }

      case "tellNum_home":
      case "tellNum_phone": {
        return (
          <div className="flex-1 flex items-center gap-1">
            <input
              type="text"
              maxLength={getMaxLength()}
              data-value="front"
              value={value.front ?? ""}
              onChange={e => onChange(e)}
              className="flex-1 w-full "
            />
            -
            <input
              ref={middleRef}
              type="text"
              data-value="middle"
              value={value.middle ?? ""}
              onChange={e => onChange(e)}
              className="flex-1 w-full "
            />
            -
            <input
              ref={backRef}
              type="text"
              data-value="back"
              value={value.back ?? ""}
              onChange={e => onChange(e)}
              className="flex-1 w-full "
            />
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className="form_item flex-1 h-full flex items-center border-2 border-slate-500">
      <div className="label whitespace-nowrap bg-slate-400 h-full">{label}</div>
      <div className="inputBox w-full h-full flex-1">{renderInput()}</div>
    </div>
  );
};

export default FormItem;
