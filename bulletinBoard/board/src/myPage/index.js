import { Page } from "./style";
import styled, { css } from "styled-components";

function MyPage() {
  return (
    <Page>
      <div>
        <h4>example-title</h4>
        <div>example-content</div>
        <div>
          푸른 하늘에 하얀 구름이 떠다니고, 바람은 부드럽게 속삭이며, 꽃들은
          미소 짓고 향기를 풍기며, 세상은 평화로운 순간을 맞이합니다. 푸른
          하늘에 하얀 구름이 떠다니고, 바람은 부드럽게 속삭이며, 꽃들은 미소
          짓고 향기를 풍기며, 세상은 평화로운 순간을 맞이합니다. 푸른 하늘에
          하얀 구름이 떠다니고, 바람은 부드럽게 속삭이며, 꽃들은 미소 짓고
          향기를 풍기며, 세상은 평화로운 순간을 맞이합니다.
        </div>
      </div>
      <div>
        <button>수정</button>
        <button>삭제</button>
      </div>
      <button>댓글 보기</button>
    </Page>
  );
}

export const MyButton = styled.button``;

export default MyPage;
