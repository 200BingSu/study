import { useContext, useState } from "react";
import { FormDiv, InputDiv } from "../styles/login";
import { LoginContext } from "../contexts/LoginContext";

const LoginPage = () => {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(0);
  const [formData, setFormData] = useState({});
  return (
    <div>
      <h1>Login</h1>
      <div>
        <FormDiv onClick={() => {}}>
          <InputDiv>
            <div>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="pw">비밀번호</label>
              <input type="text" id="pw" />
            </div>
          </InputDiv>
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            로그인
          </button>
        </FormDiv>
      </div>
    </div>
  );
};
export default LoginPage;
