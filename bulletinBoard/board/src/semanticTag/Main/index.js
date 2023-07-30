import { useState } from "react";
import DGButton from "../../styles/button";
import PageNumberArr, { User, content } from "../../userInformation";
import { Bulletins, MainDiv, PageNumber } from "./style";

function Main() {
  const [user, setUser] = useState(0);

  const pageButton = (e) => {
    const index = e.target.textContent - 1;
    setUser(index * 4);
  };

  return (
    <MainDiv>
      {User[user] && (
        <Bulletins>
          <div>{User[user]?.id}</div>
          <hr />
          {User[user]?.content[0]}
        </Bulletins>
      )}

      {User[user + 1] && (
        <Bulletins>
          <div>{User[user + 1]?.id}</div>
          <hr />
          {User[user + 1]?.content[0]}
        </Bulletins>
      )}

      {User[user + 2] && (
        <Bulletins>
          <div>{User[user + 2]?.id}</div>
          <hr />
          {User[user + 2]?.content[0]}
        </Bulletins>
      )}

      {User[user + 3] && (
        <Bulletins>
          <div>{User[user + 3]?.id}</div>
          <hr />
          {User[user + 3]?.content[0]}
        </Bulletins>
      )}

      <PageNumber>
        {PageNumberArr.map((e) => (
          <DGButton onClick={pageButton}>{e}</DGButton>
        ))}
      </PageNumber>
    </MainDiv>
  );
}

export default Main;
