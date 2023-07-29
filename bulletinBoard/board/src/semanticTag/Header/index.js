import { Link } from "react-router-dom";
import DGButton from "../../styles/button";
import { HeaderDiv, LoginPart } from "./style";
import { useState, useRef } from "react";

function Header(props) {
  return (
    <HeaderDiv>
      <div>
        <h1>Bulletin Board</h1>
      </div>

      {props.userName ? (
        <LoginPart>
          <div>{props.userName}😃</div>
          <br />
          <DGButton variant={"primary"} size={"large"} shape={"shape"}>
            게시물
          </DGButton>
        </LoginPart>
      ) : (
        <LoginPart>
          <Link to={"./login"}>
            <DGButton variant={"primary"} size={"large"} shape={"shape"}>
              로그인
            </DGButton>
          </Link>
          <br />
          <Link>
            <DGButton variant={"primary"} size={"large"} shape={"shape"}>
              회원가입
            </DGButton>
          </Link>
        </LoginPart>
      )}
    </HeaderDiv>
  );
}

export default Header;
