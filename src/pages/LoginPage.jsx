import { FormDiv, InputDiv } from "../styles/login";

const LoginPage = () => {
  const [islogin, setIsLogin] = useState();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(0);

  return (
    <div>
      <h1>Login</h1>
      <div>
        <FormDiv>
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
          <button type="submit">로그인</button>
        </FormDiv>
      </div>
    </div>
  );
};
export default LoginPage;
