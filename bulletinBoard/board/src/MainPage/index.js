import { useContext, useState } from "react";
import Footer from "../semanticTag/Footer";
import Header from "../semanticTag/Header";
import Main from "../semanticTag/Main";
import LoginPage from "../Login";
import { UserContext } from "../App";

function MainPage() {
  const { userName, setUserName } = useContext(UserContext);
  console.log("랜더링");
  return (
    <>
      <Header userName={userName} />
      <Main />
      <Footer />
    </>
  );
}
export default MainPage;
