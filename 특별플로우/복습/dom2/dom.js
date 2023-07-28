import mockPost from './mock.json' assert { type: 'json' };
console.log(mockPost);

const $postDetail = document.querySelector('#post-detail');
const $repliesList = document.querySelector('#replies-list');
const $button = document.querySelector("button");
const $comment = document.querySelector("#comment")
const $user = document.querySelector("#user");
/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/

function mockList() {

    const ul = document.createElement("ul")
    

    const li = document.createElement("li")
    li.innerHTML=`title : ${mockPost.post.title}
    content : ${mockPost.post.content}
    User : ${mockPost.post.User.nickName}`

    ul.appendChild(li)
    $postDetail.appendChild(ul)

}

mockList()

function mockComment(){

    for(let i=0; i<mockPost.post.Replies.length; i++){
    const li = document.createElement("li")
    li.innerHTML=`글쓴이 : ${mockPost.post.Replies[i].User.nickName}
    내용 : ${mockPost.post.Replies[i].content}`
    $repliesList.appendChild(li)
    }

}

mockComment()

$button.addEventListener("click", addComment)

function addComment(){
    console.log($comment.value)

    const li = document.createElement("li")
    li.innerHTML=`글쓴이 : ${$user.value}
    내용 : ${$comment.value}
    `

    $repliesList.appendChild(li)
    $user.value=""
    $comment.value=""
}