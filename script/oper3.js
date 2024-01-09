// 문자열 연산자(피연산자 중 하나라도 문자일 경우)
console.log('hello'+'world');
console.log('1'+ 2);
console.log(10+ 'Number()');
console.log('num'+(2+2)+'ber');
console.log('안녕하세요'.length)

// 문자열 + 삼항연산자
// textarea 영역에10자 이상 쓰고 리뷰 등록 버튼 클릭하면 '등록' 팝업출력
// textarea 영역에10자 미만 쓰고 리뷰 등록 버튼 클릭하면 '100자 이상 쓰세요' 팝업출력

const re = document.querySelector('#re')
const re_btn = document.querySelector('#review_btn');
console.log(re,re_btn);
//출력
re_btn.addEventListener('click',function(){
    let re_num = re.value.length;
    console.log(re_num); // 정상
    let upload = re_num >= 100 ? '리뷰가 등록되었습니다' : '100자 이상 입력하세요'; // 문자데이터를 담고 있는 변수
    window.alert(upload);
})
// 변수와 출력 구분 잘 해서 쓰기. 만들어둔 변수로 효율적으로 출력하기!!
