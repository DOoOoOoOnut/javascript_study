/* // 함수 스코프
// 지역변수와 전역변수
let b = 20;
let c = 30;
let a = ''
scope1(); // 함수 호출 위치는 생성위치와 상관없음~!!
function scope1(){
    a = 10;
    console.log(a,b,c);
}
console.log(a+b+c); 
scope1(); // 함수는 꼭 호출해줘야 값을 인식할 수 있음!!! */

// 함수 스코프 연습
let x = 1
let y
function func1(){
    y = 5
    console.log(x+y)
}
function func2(){
    func1() // 함수 안에서 함수 출력하는 방법도 많이 사용
    let z = 10
    console.log(x+y+z)
}
func2()
console.log('------------------')
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
console.log(btn);

/* btn.addEventListener('click',function(){
    console.log('결과 테스트');
}) */

function testFunc(){
    console.log('결과 테스트')
}
// 실행
btn.addEventListener('click',testFunc)
// 이벤트 내에서 쓸 때는 괄호 생략 
btn2.addEventListener('click',testFunc)
// 각각 다른 이벤트에 같은 함수 호출 // 재사용에 용이함!! 많이 사용

// 전역 변수 생성
const view = document.querySelector('.num_view');
const minus = view.querySelector('#minus');
const plus = view.querySelector('#plus');
const num_view = view.querySelector('#num');
const priceView = document.querySelector('.price');
const price = 4000
let num = 1
let total = 0
const totalNum = Number(num.value);
const addp = document.createElement('p')
console.log(view, minus, plus, num, price);
// -1 최소구매 10 최대수량 팝업

function add(){ // 갯수가 1개 추가된다.
    num >= 10 ? alert('최대 구매 수량입니다') :
    ++num
    num_view.value = num
    total = price*num
    priceView.innerHTML = `${total.toLocaleString('ko-kr')}원`
}
function del(){ // 갯수가 1개 제거된다.
    num <= 1 ? alert('최소 구매 수량입니다') :
    --num
    num_view.value = num
    total = price*num
    priceView.innerHTML = `${total.toLocaleString('ko-kr')}원`
}
plus.addEventListener('click',add)
minus.addEventListener('click',del)

// 쌤 방법
/* function add(){ // 갯수가 1개 추가된다.
    num < 10 ? number++ : alert('최대 구매 수량입니다')
    ++num
    num_view.value = num
    total = price*num
    priceView.innerHTML = `${total.toLocaleString('ko-kr')}원`
} */
// 10 이하인가? 맞을 시: 숫자 1 추가 / 아닐 시: alert





