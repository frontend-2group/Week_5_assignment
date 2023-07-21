const users = [
  {
    id: 1,
    name: '김사과',
    age: 20,
    height: 190,
  },
  {
    id: 2,
    name: '이수박',
    age: 32,
    height: 185,
  },
  {
    id: 3,
    name: '오렌지',
    age: 20,
    height: 180,
  },
  {
    id: 4,
    name: '이멜론',
    age: 28,
    height: 175,
  },
];

const $info = document.querySelector('#info');
$info.innerHTML = `
    <div>${users[0].name}</div>
    <div>${users[0].age}</div>
    <div>${users[0].height}</div>
`;

const $button1 = document.querySelectorAll('button')[0];
const $button2 = document.querySelectorAll('button')[1];

$button1.addEventListener('click', prev)

$button2.addEventListener('click', next)

function prev(e){
  e.preventDefault()

  const $info = document.querySelector('#info');
  const $infoDiv = document.querySelector('#info > div');
  const oneChild = $infoDiv.innerText;

  if(oneChild === '김사과'){
    $info.innerHTML = `
    <div>${users[3].name}</div>
    <div>${users[3].age}</div>
    <div>${users[3].height}</div>`
  }else if(oneChild === '이수박'){
    $info.innerHTML = `
    <div>${users[0].name}</div>
    <div>${users[0].age}</div>
    <div>${users[0].height}</div>`
  }else if(oneChild === '오렌지'){
    $info.innerHTML = `
    <div>${users[1].name}</div>
    <div>${users[1].age}</div>
    <div>${users[1].height}</div>`
  }else if(oneChild === '이멜론'){
    $info.innerHTML = `
    <div>${users[2].name}</div>
    <div>${users[2].age}</div>
    <div>${users[2].height}</div>`
  }
}

function next(e){

  e.preventDefault()

  const $info = document.querySelector('#info');
  const $infoDiv = document.querySelector('#info > div');
  const oneChild = $infoDiv.innerText;

  if(oneChild === '김사과'){
    $info.innerHTML = `
    <div>${users[1].name}</div>
    <div>${users[1].age}</div>
    <div>${users[1].height}</div>`
  }else if(oneChild === '이수박'){
    $info.innerHTML = `
    <div>${users[2].name}</div>
    <div>${users[2].age}</div>
    <div>${users[2].height}</div>`
  }else if(oneChild === '오렌지'){
    $info.innerHTML = `
    <div>${users[3].name}</div>
    <div>${users[3].age}</div>
    <div>${users[3].height}</div>`
  }else if(oneChild === '이멜론'){
    $info.innerHTML = `
    <div>${users[0].name}</div>
    <div>${users[0].age}</div>
    <div>${users[0].height}</div>`
  }

}




/* 
유저 목록 순서대로 보여주기
다음 버튼을 누르면 다음 유저가 보여져야합니다. 단, 마지막 유저일 시 다음은 다시 첫번째 유저가 되어야합니다.
이전 버튼을 누르면 이전 유저가 보여져야합니다. 단, 첫번째 유저일 시 이전은 마지막 유저가 되어야합니다.

또한 DOM API와 배열을 다뤄야할 때 인덱스가 필요한 시점이나 상황이 언제일지 고민해보세요 :)
*/
