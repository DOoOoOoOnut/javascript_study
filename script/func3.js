/* // 콜라만 나오는 자판기
function japangi(){
    console.log(`콜라`)
}
// 사이다만 나오는 자판기
function japangi2(){
    console.log(`사이다`)
} */
// 콜라와 사이다 필요한 음료수를 자유롭게 뽑을 수 있는 자판기
function japangi(drink){//drink 매개변수 생성 == let drink
    console.log(drink);
}

japangi("콜라") // 호출할 때 데이터 대입
japangi("사이다") // 호출할 때 데이터 대입
japangi("커피") // 호출할 때 데이터 대입
japangi("탄산수") // 호출할 때 데이터 대입

function japangi_v2(drink,num){
    console.log(drink+num+'개 나왔습니다')
}
japangi_v2('탄산수',2)
japangi_v2('콜라',10)

console.log('-------------------')

// 피연산자 두개가 항상 더해져서 나오는 함수
function calc1(x,y){
    console.log(`${x} + ${y} = ${x+y}`)
};
calc1(1,5)
calc1(3,5)
calc1(9999999,555555)
calc1(9999999342342,555555)

let result
function calc2(x,y,calc){
    result = calc=='*' ? x*y :null;
    console.log(result)
}
calc2(2,3,'*')
console.log('-------------')
// 함수의 데이터값 반환 return
let total = 0;
function func1(num){
    return total // == 해당 함수를 호출할 때 호출 위치로 반환하겠다 = return의 값은 아랫줄 무시하고 바로 바깥으로 호출됨.
    total = num + 1 //return에서 이미 값이 호출되었으므로 읽지 않음.
}
console.log(total); //0 => 
console.log(func1(5))
alert(func1(10))