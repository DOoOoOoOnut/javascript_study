// 객체는 반드시 변수에 저장하고 진행해야 한다!!!!

let a = 10;
let b = '10';
let c = 1;

a = b+c // 101
a += a // 101101

b = c // 1
a += b // 1011011


b = a+b+c // 101101111

const array = [1,2,3,4,5]

c = c+array[2]

const x= 10;
const y = 5;

function ca(){
    console.log(c+array[4]+array[0])
}
ca()
function xy(){
    console.log(x+(y-1))
    ca()
} // 함수 생성
xy() // 함수 호출(생성 밖에서 호출해야 한다.)

const cart = {
    img:'./img/model.jpg',
    sale: '50% off',
    name: 'Crop Top',
    fit_size: 'Body Fit',
    color: ['Mineral Black', 'Chocolate Brown', 'Cobalt Blue/Iris Blue', 'Cobalt Blue/Iris Blue', 'Evening Blue','Jewel Green'],
    size:['xxs','xs','s', 'm', 'l', 'xl', 'xxl'],
    price:27.50,
    price_original:55,
    num:1,
}
console.log(cart);
console.log(cart.name);
console.log(cart.color[0])
console.log(cart.size[5])

/* 
자바스크립트에서 사용하는 괄호 개념
1. () : 메서드, 연산자 우선순위, 배열 빈공간, 배열선언, 함수
    메서드 : 객체.메서드()
    연산자 : 1+(1+2)
    배열 빈공간 : new array(1)
    배열 선언 : new array(1,2)
    함수 : function()
2. {} : 함수 실행값 객체선언
    함수실행값 : function(){실행}
    객체선언 : let object = { 속성:값, 속성:[값1,값2, 값3] }
3. [] : 배열생성, 배열인덱스호출, 불러온 DOM 객체가 2개 이상일 떄 인덱스 호출용
    배열 생성 : let 변수명 - [배열값, 배열값]
    배열 인덱스 호출 : 변수명[인덱스]
    DOM : (2개 이상의 DOM 선언 후) DOM변수명[인덱스]
*/