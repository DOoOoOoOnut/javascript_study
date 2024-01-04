//아이디 찾기 - 인증번호 받기
/* 
    Q. 인증번호 받기 클릭 시 버튼 다음 형제 위치에 "인증번호가 발송되었습니다" 출력하기
    Q. 인증번호 입력칸 authentivation_input 값을 입력하면 form의 이전 형제 위치에 "인증번호가 틀렸습니다" 출력하기
*/

const btn = document.querySelector('#authentivation_btn');
const search = document.querySelector('#id_search');
console.log(btn, search); // 확인
const send = document.createElement('span');
send.innerText = '인증번호가 발송되었습니다';
console.log(send); // 확인

btn.addEventListener('click',function(){
    search.querySelector('form').appendChild(send);
    // search.insertBefore(send, search.firstElementChild);
})

console.log('----------------')
// 객체.appendChild(삽입노드) 마지막 자식 노드 추가
// 객체.insertBefore(삽입노드, 기존 시작 자식노드) 첫번째 자식 노드 추가 / 혹은
// 부모.insertBefore(삽입노드, 부모.firstChild) 첫번째 자식 노드 추가
// = 이 방법이 더 편함

const error = document.createElement('p');
const num_input = document.querySelector('#authentivation_input');
const frm = document.querySelector('#id_search');
error.innerText = '인증번호가 틀렸습니다';
console.log(error, num_input, frm);

// 실행
num_input.addEventListener('blur',function(){
    frm.insertBefore(error, frm.firstChild);
})

// input 입력했을 때
// blur 해당 input을 벗어났을 때


