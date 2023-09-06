import { Link } from "react-router-dom";
import DGButton from "../../styles/button";
import { HeaderDiv, LoginPart } from "./style";
import { useUser } from "../../context/ctx";

function Header(props) {
  const { userName } = useUser();

  return (
    <HeaderDiv>
      <div>
        <h1>Bulletin Board</h1>
      </div>

      {userName ? (
        <LoginPart>
          <div>{userName}😃</div>
          <br />
          <DGButton variant={"primary"} size={"large"} shape={"shape"}>
            내 게시물
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
