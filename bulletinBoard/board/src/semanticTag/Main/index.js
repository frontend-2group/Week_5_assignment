import { User, content } from "../../userInformation";
import { Bulletins, MainDiv } from "./style";

function Main() {
  return (
    <MainDiv>
      <Bulletins>{User[0].content[2]}</Bulletins>
      <Bulletins>156</Bulletins>
      <Bulletins>156</Bulletins>
      <Bulletins>156</Bulletins>
    </MainDiv>
  );
}

export default Main;
