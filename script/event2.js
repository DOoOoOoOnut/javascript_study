// 문자열 변환 메서드
// let price = 1000000 // 타입 변환은 데이터 자체에 할 수 없기 때문에 변수 만들어주기
// console.log(price.toLocaleString('ko-kr'));//1,000,000
// 계산을 모두 마친 후 마지막 출력 경우에만 사용
// 중간에 쓰면 문자 데이터로 변환되기 때문에 계산 불가.
//HTMLNode.value = price.toLocaleString('ko-kr');
// 변수 생성
const bank_input = document.querySelector('#bank_input');
const bank_price = document.querySelector('#bank_price');
const btn = document.querySelector('#bank_btn');
console.log(bank_input, bank_price, bank_btn);
let total = 10000;
bank_price.value = total.toLocaleString('ko-kr');
// 클릭 시 실행
btn.addEventListener('click',function(){
    console.log(Number(bank_input.value)+100);
    console.log(total+Number(bank_input.value)+100)
    let plus = Number(bank_input.value)+100
    total += plus
    //출력하기
    bank_price.value = total.toLocaleString('ko-kr');
    //초기화
    bank_input.value = "";
})