import { Form } from "react-hook-form";
import CusInput from "./CusInput";
import { useEffect, useState } from "react";

const MakeForm = () => {
  const [form, setForm] = useState({});
  useEffect(() => {
    console.log("form", form);
  }, [form]);
  return (
    <div>
      <Form />
    </div>
  );
};
export default MakeForm;
