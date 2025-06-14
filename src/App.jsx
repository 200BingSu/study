import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import TableForm from "./components/TableForm";
import CustomBtn from "./components/CustomBtn";
import InsertFile from "./components/InsertFile";
import SignPad from "./components/SignPad";

const App = () => {
  return (
    <div style={{ height: "100%" }}>
      <InsertFile />
      <SignPad />
    </div>
  );
};
export default App;
