//안녕 입력 후 chat_txt 에 입력 후 send_btn을 클릭하면
// chat_list에 <li>태그로 chat_txt에 입력한 값 출력

const chat_list = document.querySelector('.chat_list');
const chat_txt = document.querySelector('#chat_txt');
const btn = document.querySelector('#send_btn');
console.log(chat_list, chat_txt, btn);
const add_chat = document.createElement('ul');
console.log(add_chat);

// 보내기 누르면 메세지 출력
btn.addEventListener('click',function(){
    add_chat.innerHTML += `<li>${chat_txt.value}</li>`;
    console.log(add_chat); //확인
    chat_list.appendChild(add_chat);
    console.log(chat_list); //확인
})


