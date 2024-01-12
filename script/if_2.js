// 1. admin이라는 아이디만 접근할 수 있는 페이지
let userID = "admin"
if(userID == "admin"){
    console.log('관리자님 어서오세요')
}
// 2. admin 아이디 1234 비밀번호인 관리자만 접근할 수 있는 페이지
let userPw = '1234'
if(userID=='admin' && userPw=='1234'){
    console.log('관리자님 어서오세요')
}
// 3. 사용자의 아이디를 입력받고 admin이 아니면 일반회원입니다 출력
/* const userIdInput = prompt('아이디를 입력하세요');
if(userIdInput != 'admin'){
    console.log('일반회원입니다')
} */
// 4. userNum = prompt('숫자를 써주시면 짝수인지 홀수인지 맞춰볼게요!')
/* const userNum = prompt('숫자를 써주시면 짝수인지 홀수인지 맞춰볼게요!')
if(userNum%2 == 0){
    console.log('짝수')
}
if(userNum%2){
    console.log('홀수')
} */
// if(1) {} = if(true) {}
// 5. 10살 이상만 탈 수 있는 놀이기구, 나이를 물어보고 10살 이하면 탑승불가
/* const age = prompt('몇 살이세요?')
if(age <= 10){
    alert('10살 이하 탑승불가')
}
if(age > 10){
    alert('즐거운 시간 되세요!')
} */
// 6. 10살 이상이면서 키가 120 이상인 아이만 탈 수 있는 놀이기구
/* const age = prompt('나이를 입력하세요')
const height = prompt('키를 입력하세요')
if(age>=10 && height>=120){
    alert('즐거운 시간 되세요!')
} */
const printBtn = document.querySelector('#printBtn')
printBtn.addEventListener('click',()=>{
    let ask = confirm('인쇄할까요?')
    if(ask){print()}
})
// 최소 구매수량 1, 최대 구매수량 10
// 10개 이상 구매하려 하면 최대 구매수량입니다
const numInput = document.querySelector('#num');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
console.log(numInput,plus,minus);
let num = 1;
numInput.value = num
// 버튼 작동하게 하기
const priceView = document.querySelector('.price')
const price = 1000
let total = 0
const totalPrice = () => {
    total = price * num
    return priceView.innerHTML = total.toLocaleString('ko-kr')+'원'
}

plus.addEventListener('click',()=>{
    if(num < 10){
        num++
        numInput.value = num
        totalPrice()
    }
    if(num === 10){
        alert('최대 구매수량입니다')
    }
})
minus.addEventListener('click',()=>{
    if(num > 1){
        num--
        numInput.value = num
        totalPrice()
    }
    if(num === 1){
        alert('최소 구매수량입니다')
    }
})