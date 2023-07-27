import { Link } from "react-router-dom";
import DGButton from "../../styles/button";
import { HeaderDiv, LoginPart } from "./style";
import { aaaa } from "../Main";
import { useState } from "react";

function Header() {
  // const [UserName, setUserName] = useState("");

  return (
    <HeaderDiv>
      <div>
        <h1>Bulletin Board</h1>
      </div>
      {/* <LoginPart>
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
      </LoginPart> */}
      <LoginPart>
        <div>USER : </div>
        <br />
        <DGButton variant={"primary"} size={"large"} shape={"shape"}>
          게시물
        </DGButton>
      </LoginPart>
    </HeaderDiv>
  );
}

export default Header;
