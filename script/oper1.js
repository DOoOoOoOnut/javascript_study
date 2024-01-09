// 이항연산자
let x = 5;
let y = x+10 
console.log(`x=${x} y=${y}`);

// 목표) 이항연산 피연산자를 2개 적고 '=' 버튼을 클릭하면 결과값 출력하기
// 1. 변수 선언
// 2. 버튼 클릭
// 2-1. val1, val2의 값 가져오기
// 2-2. 위 값 더하기
// 2-3. result 잡기
// 2-4. 위 대상 결과 출력

const val1 = document.querySelector('#val1');
const val2 = document.querySelector('#val2');
const calc1Btn = document.querySelector('#calc1Btn');
const result = document.querySelector('.result');
let total = 0;
console.log(val1,val2,calc1Btn,result);

calc1Btn.addEventListener('click',function(){
    total = Number(val1.value) + Number(val2.value)
    result.innerHTML = total.toLocaleString('ko-kr');
});
console.log('---------------')
console.log(6/2); //3
console.log(6%2); //0

const num1 = 10;
let num2 = 5;
let total1 = num1 % num2 // 나머지 연산의 결과는 주로 0, 1 // 이를 이용해 홀,수 구분 혹은 참, 거짓 구분
console.log(total1);

/* let a = 5;
let b = a++; */ // a의 값을 먼저 b로 보냄 = 5 -> a에 1을 더함 = 6 => a=6 b=5
// let b = ++a; // a에 1을 더함 = 6 -> b에 a값을 보냄 = 6  => a=6 b=6 

// console.log(`a=${a} b=${b}`)

let a = 10
let b = 20
let c = 30
let d = 40
console.log(a,b,c,d) // 결과
a++ // 11
b-- // 19
c++ // 31
d-- // 39
console.log(a,b,c,d); 
a = ++b  
b = a++ 
console.log(a,b,c,d); // a=21 b=20 c=31 d=39
c = a+b
d = ++c
console.log(a,b,c,d); // a=21 b=20 c=42 d=42
a = ++c + 10 
b = --d + 1 
console.log(a,b,c,d); // a=53 b=42 c=43 d=41

// a = b++ -> a랑 b가 가까우니까 b값을 먼저 주고 이후에 b가 알아서 계산
// a = ++b -> a랑 b가 머니까 b가 먼저 계산 끝내고 한번에 a로 가기
