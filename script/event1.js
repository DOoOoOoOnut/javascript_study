const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const c_text = document.querySelector('#certified_text')
const c_btn = document.querySelector('#certified_btn')
console.log(btn1, btn2, btn3, c_btn, c_text); // 변수 정상 등록 확인
// 마우스를 댔을 때 콘솔에 문구 출력
btn1.addEventListener('mouseover',function(){
    console.log('hello btn1');
})//익명함수 or 콜백함수
// 클릭 시 1+1 질문 출력, 답변이 팝업으로 출력
btn2.addEventListener('click',function(){
    let a = Number(window.prompt('1+1?'));//숫자데이터 변경
    window.alert(a+1);
})
//누를 시 구글 주소로 바로가기
btn3.addEventListener('mousedown',function(){
    window.location.href='https://google.com';
})
//인증확인 버튼 클릭 시 input에서 입력한 값이 팝업창으로 출력
c_btn.addEventListener('click',function(){
    let c = c_text.value;
    window.alert(`${c} 입력 확인 되었습니다.`);
})
// 변수 생성, 확인
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const answer = document.querySelector('#answer_btn');
console.log(result1, result2, answer)
// 총 수입 버튼 클릭 시 
answer.addEventListener('click',function(){
    /* let result1_a = Number(result1.value);
    let result2_a = Number(result2.value);
    let result_all = result1_a + result2_a; */
    let result_all = Number(result1.value) + Number(result2.value);
    window.alert(`총 수입은 ${result_all}원 입니다.`);
})
// 자바스크립트 은행
// 입금 전 잔액: 10000원
// 입금액 (자유) 입금시마다 100원이 더해져 총 잔액에 포함
// 입금 시 잔액 포함은 버튼 클릭 시 실행되는 구조
// 변수 생성, 확인
const money = document.querySelector('#bank_input')
const price = document.querySelector('#bank_price')
const bank_btn = document.querySelector('#bank_btn')
console.log(bank_btn, money, price);
let total = 10000
price.value = total
// 클릭 시
bank_btn.addEventListener('click',function(){
    console.log(Number(money.value) + 100)
    console.log(total + Number(money.value) + 100)
    let input_total = Number(money.value) + 100 // 입금액+이자
    total += input_total;
    price.value = total;
    // 입금액 입력값 초기화
    money.value = "";
})