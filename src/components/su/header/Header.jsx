import { Link, useNavigate } from "react-router-dom";
import { WrapDiv } from "../common";
import { GnbUl, HeaderDiv } from "./headerStyle";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderDiv>
      <WrapDiv className="wrap">
        <div className="left">
          <Link to={"/"} className="logo">
            로고
          </Link>
          <GnbUl>
            <li className="menu">
              <Link to={"/about"}>다녀ALL</Link>
            </li>
            <li className="menu">
              <Link to={"/guide"}>이용방법</Link>
            </li>
            <li className="menu">
              <Link to={"/planning"}>일정만들기</Link>
            </li>
            <li className="menu">
              <Link to={"/board"}>여행로그</Link>
            </li>
          </GnbUl>
        </div>
        <div className="right">
          <div className="logout">
            <Link to={"/board"}>회원가입</Link>
            <button
              onClick={() => {
                navigate("/auth");
              }}
            >
              로그인
            </button>
          </div>
          <div className="login">
            <a href="">마이페이지</a>
            <ul>
              <li>
                <Link to={"/myinfo"}>내일정</Link>
              </li>
              <li>
                <Link to={"/myinfo/editprofile"}>내정보</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/auth");
                  }}
                >
                  로그아웃
                </button>
              </li>
            </ul>
          </div>
        </div>
      </WrapDiv>
    </HeaderDiv>
  );
};

export default Header;
