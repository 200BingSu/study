import styled from "@emotion/styled";
import { WrapDiv } from "../common";
export const HeaderDiv = styled.header`
  padding: 10px 20px;
  height: 68px;
  background-color: #fff;
  color: #333;
  border-bottom: 1px solid #eee;
  > div {
    display: flex;
    justify-content: center;
    background-color: red;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    > a.logo {
      display: block;
      border: 1px solid #bbb;
      background-color: #eee;
      width: 120px;
      text-align: center;
    }
  }
  .right {
    border: 1px solid #333;
  }
`;

export const GnbUl = styled.ul`
  /* border: 1px solid #14beb0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  .menu {
    text-align: center;
    /* border: 1px solid #333; */

    > a {
      display: block;
      padding: 0 10px;
      min-width: 100px;
    }
  }
`;

export const BtnStyle = styled.button``;
