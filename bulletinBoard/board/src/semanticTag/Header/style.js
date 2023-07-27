import { styled } from "styled-components";
import { FlexCenter } from "../../styles/common";
import COLOR from "../../styles/themeColor";

export const HeaderDiv = styled.div`
  background-color: #505050;
  color: #dcdcdc;
  ${FlexCenter}
  height: 10vh;
`;

export const LoginPart = styled.div`
  position: absolute;
  right: 0;
  color: ${COLOR.font};
`;
