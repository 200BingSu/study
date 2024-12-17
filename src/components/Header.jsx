import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

const Header = () => {
  const { isLogin, SetIsLogin } = useContext(LoginContext);
  return (
    <div>
      <Link to="/">🍪홈페이지 </Link>
      <Link to="/order">☕오더 </Link>
      <Link to="/login">🥨로그인 </Link>
      <div>{isLogin ? "로그인 O" : "로그인 X"}</div>
    </div>
  );
};
export default Header;
