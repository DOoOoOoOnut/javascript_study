let num = document.querySelector('#num');
let btn = document.querySelector('#numBtn');
console.log(num, btn);
function func11(){
    let result1 = Number(num.value);
    num.value = result1 + 1;
    // console.log(result1 += 1);//콘솔로 확인
}
// num.value = Number(num.value)+1 
// 개별적으로 적용했을 때/ 중간중간 절차 확인하며 쓰기
// 순서도 생각하면서 하기~! -> 각 단계에서 어떻게 변하는지 생각/ 헷갈리면 주석작성 必