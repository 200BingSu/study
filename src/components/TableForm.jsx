/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/ko"; // 한국어 locale import
import styles from "./TableForm.module.scss";
import { DatePicker } from "@mui/x-date-pickers"; // koKR import
import { useState } from "react";

dayjs.extend(customParseFormat);
dayjs.locale("ko"); // dayjs에 한국어 locale 적용

const TableForm = ({ form, onChangeForm }) => {
  const hospitalList = [
    { key: 1, value: "울진읍의료원" },
    { key: 2, value: "포항성묘병원" },
    { key: 3, value: "강릉아산병원" },
  ];

  const [isOpenCheckBoxList, setIsOpenCheckBoxList] = useState(false);

  const slotProps = {
    textField: {
      variant: "standard",
      InputProps: {
        disableUnderline: true, // 밑줄 완전 제거
      },
      sx: {
        backgroundColor: "#ffffff",
        borderRadius: 0,
        fontWeight: "bold",
        width: "120px", // 추가: 원하는 너비로 설정
        input: {
          padding: "0",
          fontSize: "12px",
          color: "#777777",
          textAlign: "center",
        },
      },
    },
  };
  const handleCheckBox = (e, item) => {
    const hospitalList = form.hospital;
    if (hospitalList.find(hospital => hospital.key === item.key)) {
      const updateList = hospitalList.filter(
        hospital => hospital.key !== item.key,
      );
      onChangeForm("hospital", updateList);
    } else {
      const updateList = [...hospitalList, item];
      onChangeForm("hospital", updateList);
    }
  };
  return (
    <div className={styles.tableForm}>
      <div className={styles.formRow}>
        <div className={styles.formItem}>
          <div className={styles.label}>
            <i className={styles.required}>*</i>사업명
          </div>
          <div className={styles.data}>
            <input
              type="text"
              value={form.business_name || ""}
              onChange={e => onChangeForm("business_name", e.target.value)}
              placeholder="사업명을 입력하세요."
            />
          </div>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formItem}>
          <div className={styles.label}>
            <i className={styles.required}>*</i>사업기간
          </div>
          <div className={styles.data}>
            <DatePicker
              views={["month", "year"]}
              format="YYYY-MM"
              value={form.business_start_date || null}
              onChange={newValue =>
                onChangeForm("business_start_date", newValue)
              }
              slotProps={slotProps}
            />
            <i>-</i>
            <DatePicker
              views={["month", "year"]}
              format="YYYY-MM"
              value={form.business_end_date || null}
              onChange={newValue => onChangeForm("business_end_date", newValue)}
              slotProps={slotProps}
            />
          </div>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formItem}>
          <div className={styles.label}>희망병원</div>
          <div
            className={styles.data}
            onClick={() => setIsOpenCheckBoxList(!isOpenCheckBoxList)}
          >
            <p
              className={`${form.hospital.length > 0 ? undefined : styles.placeholder}`}
            >
              {form.hospital.length > 0
                ? form.hospital.map(item => item.value).join(", ")
                : "희망병원을 선택해주세요"}
            </p>
          </div>
          <div
            className={`${styles.selectList} ${isOpenCheckBoxList ? styles.open : styles.close}`}
          >
            {hospitalList.map((item, index) => {
              return (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={item.value}
                    checked={form.hospital.find(
                      hospital => hospital.key === item.key,
                    )}
                    onChange={e => {
                      handleCheckBox(e, item);
                    }}
                  />
                  {item.value}
                </label>
              );
            })}
          </div>
        </div>
        <div className={styles.formItem}>
          <div className={styles.label}>주관</div>
          <div className={styles.data}>
            <input
              type="text"
              value={form.business_oranizer || ""}
              onChange={e => onChangeForm("business_oranizer", e.target.value)}
              placeholder="주관을 입력하세요."
            />
          </div>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formItem}>
          <div className={styles.label}>주최</div>
          <div className={styles.data}>
            <input
              type="text"
              value={form.business_host || ""}
              onChange={e => onChangeForm("business_host", e.target.value)}
              placeholder="주최을 입력하세요."
            />
          </div>
        </div>
        <div className={styles.formItem}>
          <div className={styles.label}>인력</div>
          <div className={styles.data}>
            <input
              type="text"
              value={form.business_staff || ""}
              onChange={e => onChangeForm("business_staff", e.target.value)}
              placeholder="인력을 입력하세요."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableForm;
