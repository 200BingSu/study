import { useEffect, useRef, useState } from "react";
import { maskSsnBack } from "./Util";

const hospitalList = [
  { id: "1", name: "병원A" },
  { id: "2", name: "병원B" },
  { id: "3", name: "병원C" },
];

/* eslint-disable react/prop-types */
const FormItem = ({
  label = "",
  type = "text",
  value,
  onChange,
  placeholder = "",
  checkBoxLabel = "",
}) => {
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
            placeholder={placeholder}
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
              className=" h-full w-full flex-1"
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
              className=" h-full w-full flex-1"
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
      case "booleanCheckBox": {
        return (
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={value} onChange={onChange} />
            <p>{checkBoxLabel}</p>
          </label>
        );
      }
      case "radio": {
        return (
          <div className="flex items-center gap-2">
            {hospitalList.map(hospital => (
              <label key={hospital.id} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="hospital"
                  value={hospital.name}
                  data-value={hospital.id}
                  checked={value === hospital.name}
                  onChange={onChange}
                />
                {hospital.name}
              </label>
            ))}
          </div>
        );
      }
      default:
        console.log("renderInput type 없음", type);
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
