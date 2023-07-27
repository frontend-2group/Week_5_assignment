import { styled } from "styled-components";
import { InputBox, Login } from "./style";
import { FlexCenter } from "../styles/common";
import { User } from "../userInformation";
import React, { useState } from "react";

function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function login() {
    const resultIndex = User.findIndex((e) => e.id == id);

    if (resultIndex == -1) {
      return alert("없는 아이디입니다");
    } else if (password == User[resultIndex].password) {
      return (window.location.href = "/");
    } else if (password != User[resultIndex].password) {
      return alert("잘못된 비밀번호입니다");
    }
  }

  return (
    <Back>
      <Login>
        <label>ID</label>
        <InputBox>
          <input
            placeholder="아이디를 입력해주세요"
            onChange={handleIdChange}
          />
        </InputBox>

        <label>Password</label>
        <InputBox>
          <input
            placeholder="비밀번호를 입력해주세요"
            onChange={handlePasswordChange}
          />
        </InputBox>

        <button onClick={login}>Login</button>
      </Login>
    </Back>
  );
}
export default LoginPage;

const Back = styled.body`
  background-color: #000;
  height: 100vh;

  & button {
    height: 48px;
    width: 480px;
    margin-left: 10px;
    position: absolute;
    bottom: 16px;
    border-radius: 5px;
    font-size: large;
    font-weight: 900;
    cursor: pointer;
  }
`;
