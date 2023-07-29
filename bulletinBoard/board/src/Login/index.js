import { styled } from "styled-components";
import { InputBox, Login } from "./style";
import { FlexCenter } from "../styles/common";
import { User } from "../userInformation";
import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "../App";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {
  const { userName, setUserName } = useContext(UserContext);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  function login(e) {
    e.preventDefault();
    const resultIndex = User.findIndex((e) => e.id == id);

    if (resultIndex == -1) {
      return alert("아이디 오류");
    } else if (password == User[resultIndex].password) {
      setUserName(User[resultIndex].id);
      navigate("/");
    } else if (password != User[resultIndex].password) {
      return alert("비밀번호 오류");
    }
  }

  useEffect(() => {
    console.log(userName); // 업데이트된 userName 값을 확인
  }, [userName]);

  return (
    <Back>
      <Login onSubmit={login}>
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

        <button type="submit">Login</button>
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
