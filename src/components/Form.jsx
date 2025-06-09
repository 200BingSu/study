import { useState } from "react";
import CusInput from "./CusInput";

const Form = () => {
  const [tempForm, settempForm] = useState({});
  const [form, setForm] = useState({});

  // form 제출출
  const handleSubmit = e => {
    e.preventDefault();
    setForm(tempForm);
    settempForm({});
  };

  // text input 변경 반영
  const handleChangeTextInput = e => {
    const { name, value } = e.target;
    console.log("name", name);
    console.log("value", value);
    settempForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <CusInput
        label="Text"
        name="text"
        value={tempForm.text}
        onChange={handleChangeTextInput}
      />
      <button type="button" onClick={handleSubmit}>
        제출
      </button>
    </div>
  );
};
export default Form;
