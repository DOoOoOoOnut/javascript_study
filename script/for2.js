// 반복문 for
// for(초기값;조건식;증감식){조건이 참일 때 실행 반복결과} 조건 거짓일 때 종료되는 for문 위치

let data = [10,20,30,40,50]
let result = 0
for(let i=0; i<data.length ; i++){
    result += data[i]
}
console.log(`총 배열의 합은 ${result}`)

// continue, break
for(var j=1; j<=10; j++){
    continue
    console.log(`j:${j}`);
};
console.log(`for 조건식이 거짓으로 나오는 순간 결과는 ${j}`);

let total = 0
// 다중 반복문 for-for 2단 for문
for(let i=1; i<6; i++){ // 1~5 반복되는 1단 반복문
    console.log(`i=${i}`)
    console.log('------------')
    //2단 for 시작
    for(let m=1;m<4; m++){
        console.log(`m은 ${m}`)
        total += m
    }
    console.log(`total = ${total}`)
    console.log('------------')
}

// 연습 - 구구단
/* for(let i=1; i<=9; i++){
    for(let m=1; m<=9; m++){
        console.log(`${i} 곱하기 ${m}은 ${i*m}`)
    }
} */


