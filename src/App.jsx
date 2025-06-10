import { useEffect, useState } from "react";
import TableForm from "./components/TableForm";
import { set } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = () => {
  const initForm = {
    business_name: "",
    business_start_date: "",
    business_end_date: "",
    business_oranizer: "",
    business_host: "",
    business_staff: "",
    hospital: [],
  };
  const [form, setForm] = useState(initForm);
  useEffect(() => {
    console.log("form", form);
  }, [form]);
  const handleOnChangeForm = (key, value) => {
    setForm(prevForm => ({
      ...prevForm,
      [key]: value,
    }));
  };
  return (
    <div style={{ height: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <TableForm form={form} onChangeForm={handleOnChangeForm} />
      </LocalizationProvider>
    </div>
  );
};
export default App;
