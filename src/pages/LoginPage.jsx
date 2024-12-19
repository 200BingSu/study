import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { FormDiv, InputDiv } from "../styles/login";

const LoginPage = () => {
  const { isLogin, setIsLogin } = useContext(LoginContext);

  return (
    <div>
      <h1>Login</h1>
      <div>
        <FormDiv onClick={() => {}}>
          <InputDiv color={"red"}>
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
