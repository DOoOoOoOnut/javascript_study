// 함수 매개변수와 리턴
// 매개변수 : 함수 내 변경데이터가 있을 경우 함수호출 시 변경 인수값을 매개변수에 전달하기 위해서 생성
// 리턴 : 실행 결과가 매번 다른 경우 데이터 값만 함수 외부로 반환할 때

const danView = document.querySelector('.dan99');
const plus = document.createElement('div')
console.log(danView)

let result = ''
function dan99(x){
    result += `${x} 곱하기 1은 ${x*1}<br>`
    result += `${x} 곱하기 2는 ${x*2}<br>`
    result += `${x} 곱하기 3은 ${x*3}<br>`
    result += `${x} 곱하기 4는 ${x*4}<br>`
    result += `${x} 곱하기 5는 ${x*5}<br>`
    result += `${x} 곱하기 6은 ${x*6}<br>`
    result += `${x} 곱하기 7은 ${x*7}<br>`
    result += `${x} 곱하기 8은 ${x*8}<br>`
    result += `${x} 곱하기 9는 ${x*9}<br>`
    result += `<hr>`
    return result
}
danView.innerHTML = dan99(2)
danView.innerHTML = dan99(3)
danView.innerHTML = dan99(4)
danView.innerHTML = dan99(5)
danView.innerHTML = dan99(6)
danView.innerHTML = dan99(7)
danView.innerHTML = dan99(8)
danView.innerHTML = dan99(9)

// 기존 잔액: 10000원 / 입금액 입력 후 버튼 클릭 시 deposit_func 함수가 호출되어 0000원 입금하셨습니다. 총 잔액은 0000원입니다 출력하기
let deposit_pay
const depositBtn = document.querySelector('#depositBtn')
let money = 10000;
// console.log(deposit_pay)
function deposit_func(){
    money += Number(deposit_pay)
    let comment = `${Number(deposit_pay).toLocaleString(`ko-kr`)}원 입금하셨습니다. 총 잔액은 ${money.toLocaleString('ko-kr')}원입니다.`
    return comment
}

// console.log(deposit_func())
depositBtn.addEventListener('click',function(){
    deposit_pay = prompt('입금 금액을 입력하세요')
    alert(deposit_func())
})

// 기존 잔액: 10000원 / 입금액 입력 후 버튼 클릭 시 deposit_func 함수가 호출되어 0000원 입금하셨습니다. 총 잔액은 0000원입니다 출력하기
/* 
/ 순서
1. 이벤트 생성 == 버튼 누르면 prompt 창이 나온다.
2. 이벤트 내에서 prompt 출력.
3. prompt의 값 == 입력 금액이므로 함수에서도 사용해야 한다.
=> 전역변수로 만들어 준다.
4. prompt의 값을 전체 금액에 더해야 한다. => 전체 금액 변수를 만들어 준다.
5. 함수를 만들고 전체 금액 변수와 입력 금액 변수를 더하는 식을 만든다. 단, 입력금액이 생길 때마다 전체금액이 누적되어야 하므로 복합대입연산자를 사용한다.
6. 
*/