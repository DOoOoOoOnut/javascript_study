/* let price = 1000
let num = Number(window.prompt('구입수량은?',''));
console.log(`구입수량은 ${num}개입니다.`);
console.log(`구입수량에 +1 이벤트 행사중! 총 수량은 ${num+1}개입니다.`);
console.log(`총 가격은 ${price*num}원 입니다.`) */

// 변수 만들기
const textInput = document.querySelector('#text');
const numInput = document.querySelector('#number');
const resultBtn = document.querySelector('button');
console.log(textInput, numInput, resultBtn);
// (호출용) 함수 만들기
function func1(){
    // console.log('test');
    console.log(textInput.value);
    console.log(numInput.value); // 메서드(객체.속성)

    console.log(typeof textInput);
    console.log(typeof textInput.value);
    // console.log(typeof numInput.value);
    let result = Number(numInput.value)
    console.log(result+1);
}