import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">🍪홈페이지 </Link>
      <Link to="/order">☕오더 </Link>
      <Link to="/login">🥨로그인 </Link>
    </div>
  );
};
export default Header;
