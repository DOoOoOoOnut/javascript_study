/* const qa = prompt('이동 방향을 입력하세요','왼쪽,오른쪽,가운데 중 하나로 입력') */
// 논리연산자 활용 조건식 단축하기
// 비교 && 비교 = 둘 다 참이어야 참
// 비교 || 비교 = 둘 중 하나만 참이어도 참 

/* if(qa=='왼쪽'||'오른쪽'||'가운데'){
    alert(`${qa} 한 칸 이동`)
}else {
    alert('잘못 입력하셨습니다')
} */


// if ~ else if ~ else 다양한 조건식으로 구분하기

/* if (qa == '왼쪽'){
    alert('왼쪽 한 칸 이동')
}else if(qa == '오른쪽'){
    alert('오른쪽 한 칸 이동')
}else if(qa == '가운데'){
    alert('가운데 한 칸 이동')
}; */



// 케찹, 머스터드, 설탕 소스 중 하나 선택

/* const source = prompt('원하는 소스를 골라보세요','케찹, 머스터드, 설탕 중 선택') */
/* if (source == '케찹'){
    alert('핫도그에 케찹을 뿌렸습니다')
}else if(source == '머스터드'){
    alert('핫도그에 머스터드를 뿌렸습니다')
}else if(source == '설탕'){
    alert('핫도그에 설탕을 뿌렸습니다')
}else {
    alert('소스를 선택하지 않으셨습니다')
} */

/* if(source=='케찹'||'머스터드'||'설탕'){
    alert(`${source}을(를) 핫도그에 뿌렸습니다. 맛있게 드세요!`)
}else{
    alert('소스를 선택하지 않으셨습니다')
}; */

//
/* const score = Number(prompt('시험점수를 입력하세요','0~100점 사이'))
let score_result = '' */

// if 조건 안에 if를 추가 작성하는 경우 -> 추가 if문(조건에서 추가조건이 더 필요한 경우)
//  0~100을 참 조건으로 만든 후 그 사이 점수를 알고싶을 때
/* if(score >= 0 && score < 101){
    if(score>=90){
        score_result = 'A'
    }else if(score>=80){
        score_result = 'B'
    }else if(score>=70){
        score_result = 'C'
    }else if(score>=60){
        score_result = 'D'
    }else{
        score_result = 'F'
    };
    alert(`당신의 점수는 ${score_result}학점입니다`)
}else{
    alert('잘못 입력하셨습니다')
} */

const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손,양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억,즐거움',
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함',
    },{
        month:6,
        flower:'백합',
        content:'순결',
    },{
        month:7,
        flower:'미나리아제비',
        content:'아름다움, 인격',
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함',
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑',
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애',
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실',
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    },
]

// 당신의 생일은? 00월의 탄생화는 0000입니다. 꽃말은 0000입니다.

const birthdayQa = Number(prompt('당신의 생일은 몇월인가요?','1~12 사이 숫자만 작성'))
let userBirthday
let massage

if(birthdayQa>0 && birthdayQa<13){
    if(birthdayQa == 1||2||3||4||5||6||7||8||9||10||11||12){ 
        userBirthday = birthday_flower[birthdayQa-1]
        massage = `${userBirthday.month}월의 탄생화는 ${userBirthday.flower}이고 꽃말은 ${userBirthday.content}입니다.`
        alert(massage);
    }
}else{
    alert('1~12 사이 숫자만 입력해주세요')
};
// DOM이랑 연결하면 실제 꽃 사진이 보이게 하거나 해당 꽃 판매페이지로 이동하게 하는 등 응용할 수 있다.



