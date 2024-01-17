// 반복문 for
// for(초기값 선언; 조건식; 증감식){괄호 안 조건식이 참일 때 반복 실행되는 결과}
// 1~10 반복되는 반복문
// for 지역함수 안에서 작성되는 변수명 = i, j, m, n
for(let i=1; i<=10; i++){
    console.log(`i=${i}`)
}

for(let i=5; i<=10; i++){
    console.log(`i=${i}`)
}

for(let i=5; i>=0; i--){
    console.log(`반복문${i}`)
}

// 1,3,5,7,9가 반복

for(let i=1; i<10; i++){
    if(i%2){
        console.log(`${i}(은)는 홀수입니다`)
    }else{
        console.log(`${i}(은)는 짝수입니다`)
    }
}

// ---------------

const study = ['illustrator','photoshop','figma','html','css','javascript','jquery']

// 반복문 활용 study 배열 값 한번에 출력하기
// 1. illusyrator 공부

/* for(let i=0;i<study.length; i++){
    console.log(`${i+1}. ${study[i]} 공부`);
}; */

for(let i=study.length-1; i>=0; i--){
    console.log(`${i+1}. ${study[i]} 공부`);
};

const menuAll = document.querySelectorAll('nav a')

for(let i=0; i<menuAll.length; i++){
    i%2 ? menuAll[i].classList.add('bg2') : menuAll[i].classList.add('bg1')
}

