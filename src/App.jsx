import { useState } from "react";
import { ButtonDiv } from "./styles/login";

const App = () => {
  const [watch, setWatch] = useState("password");
  const [buttonState, setButtonState] = useState("disable");
  return (
    <div>
      {/* 버튼 클릭시 패스워드 보고 싶어요 */}
      <input type={watch} />
      <button
        type="button"
        onClick={() =>
          watch === "password" ? setWatch("text") : setWatch("password")
        }
      >
        보이게 해주세요
      </button>
    </div>
  );
};
export default App;
