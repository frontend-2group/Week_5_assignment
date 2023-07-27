import { styled } from "styled-components";
import { FlexCenter } from "../styles/common";

export const Login = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #3c3c3c;
  width: 500px;
  height: 280px;
  border-radius: 5px;

  & label {
    color: #dcdcdc;
    height: 48px;
    font-size: x-large;
    font-weight: bold;
    margin-left: 12px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

export const InputBox = styled.div`
  width: 480px;
  height: 48px;
  margin-left: 10px;
  ${FlexCenter};
  position: relative;
  margin-bottom: 16px;

  & input {
    width: 100%;
    border: 1px solid #999;
    border-radius: 5px;
    height: 100%;
    text-align: center;
  }
`;
