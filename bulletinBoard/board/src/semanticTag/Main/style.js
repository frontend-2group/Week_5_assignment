import { styled } from "styled-components";
import COLOR from "../../styles/themeColor";
import { FlexCenter } from "../../styles/common";

export const MainDiv = styled.div`
  background-color: ${COLOR.theme[300]};
  color: ${COLOR.theme[100]};
  height: 80vh;
`;

export const Bulletins = styled.div`
  border: 2px solid ${COLOR.theme[200]};
  height: 120px;

  margin-left: 15vw;
  margin-right: 15vw;
  margin-bottom: 16px;
  padding: 8px;
`;

export const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 15vw;
  right: 15vw;
  bottom: 6vw;
`;
