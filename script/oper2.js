let number1 =10;
let number2 =20;
let result;
number1--;
console.log(number1); //9
number1++;
console.log(number1); //10
result=number2++; //r=20 n2=21
console.log(result);//20
result=++number2;//r=22 n2=22
console.log(result)//22
result = result++ // 대입연산자 우선
console.log(result) // r= 22 n1=10 n2=22
number2 = number1 + result++ 
console.log(number2) // r=23 n1=10 n2=32
// 복합대입연산자
let number = 10;
number += 5; // number = number + 5
console.log(number); //15
number -= 5; // number = number - 5
console.log(number); //10
number *= 5; // number = number * 5
console.log(number); //50
number /= 5; // number = number / 5
console.log(number); //10
number %= 2 // number = number % 5
console.log(number) //0
console.log('--------------')
// 삼항연산자
// 조건 ? 조건값이 참일 때 실행 결과 : 조건값이 거짓일 때 실행 결과
// 조건에 따라 참과 거짓을 구분하는 데 사용하는 연산자
// = 대입연산자
// == 비교연산자 (데이터가 같다)

let x =5;
let y = x+10;
y = x;
let result_xy = x==y ? 'x와 y는 같다' : 'x와 y는 다르다';
console.log(result_xy);
console.log('--------------');
let age = window.prompt('몇살이세요?');
let result_age = age>17 ? '성인' : '미성년자';
console.log(result_age);
// 객체 + 삼항연산자
let user = [
    {
        name:'Lee',
        score:80,
    },{
        name:'Kim',
        score:70,
    }
]
// 최고 점수 받은 학생의 이름 저장 변수 
const max_score_name = user[0].score > user[1].score ? user[0].name : user[1].name;
console.log(`이번 달 1등 학생은 ${max_score_name}님입니다`);