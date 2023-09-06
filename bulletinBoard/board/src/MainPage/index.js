import { useContext, useState } from "react";
import Footer from "../semanticTag/Footer";
import Header from "../semanticTag/Header";
import Main from "../semanticTag/Main";
import LoginPage from "../Login";

function MainPage() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default MainPage;
