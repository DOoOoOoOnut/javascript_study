/* 
아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다신 확인해주세요.
*/
// 로그인 버튼을 클릭 시 위 메세지가 form 안의 span.error 출력

const error = document.querySelector('#frm .error')
const loginBtn = document.querySelector('#frm #loginBtn')
console.log(error, loginBtn)

// 데이터를 쌓는 방법?

//1. 객체.innerHTML += '내용'
// 복합대입연산자 사용
//2. 객체.appendChild(삽입노드);
// 삽입노드 변수에 값을 추가대입하고 삽입노드 자리에 넣기
// 이 객체의 마지막 자식 위치로 삽입노드를 추가해라.

//form 마지막 자식 위치 createElement로 생성한 노드 추가
//객체.appendChild(삽입노드)
// == 이 객체의 마지막 자식 위치로 삽입노드를 추가해라.
// 삽입노드 변수에 값을 추가대입하고 삽입노드 자리에 넣기(appendChild는 메서드기 때문에 복합대입 연산자를 쓸 수 없기 때문에)

const error_create = document.createElement('ul');


loginBtn.addEventListener('click',function(){
    error_create.innerHTML += '<li>아이디 입력하세요</li>';
    error.appendChild(error_create);
    console.log(error);
    error.innerHTML = '<em>아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다신 확인해주세요.</em>';
    console.log(error);
})