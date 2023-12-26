// 외부스크립트
let a = 'ABC';
console.log(`a => ${a}, a의 type은 ${typeof a}`);
let b = 'DEF';
console.log(`b => ${b}, b+a의 type은 ${typeof (b+a)}`)/* 피연산자가 2개 이상일 때 괄호 사용 */
const alpa = ['ABC','DEF']
console.log(`alpa 배열의 값은 ${alpa}`)
console.log(`배열은 0부터 시작하기 때문에 ABC를 출력하고 싶으면 ${alpa[0]}`)/* 중/대괄호 잘 구분하기! *///index
console.log(`배열의 개수 확인 => ${alpa.length}`) //총 갯수 length 속성

const yoil = new Array('월','화','수','목','금','토','일');
const weather = new Array('맑음','흐림','비','눈');
// 월(맑음)
console.log(`${yoil[0]}(${weather[0]})`)
// 화(눈)
console.log(`${yoil[1]}(${weather[3]})`)
// 수(비)
console.log(`${yoil[2]}(${weather[2]})`)
// 목(흐림)
console.log(`${yoil[3]}(${weather[1]})`)
// 금(맑음)
console.log(`${yoil[4]}(${weather[0]})`)
// 토(맑음)
console.log(`${yoil[5]}(${weather[0]})`)
// 일(눈)
console.log(`${yoil[6]}(${weather[3]})`)
//---------------------------------------------------------------
const nameArray = ['김','이','박','최'];
console.log(nameArray) // 배열 이름만 작성하면 배열의 정보가 나옴 (테스트용)
// 배열 값 추가, 삭제 메서드 (자주 사용하는 종류)
nameArray.push('수'); //메서드는 실행 먼저 하고 이후에 결과값 출력해주는 게 좋음.
console.log(nameArray); // push 배열의 마지막에 새로운 값 추가하는 속성
nameArray.unshift('방');
console.log(nameArray); // unshift 배열의 시작에 새로운 값 추가하는 속성
nameArray.pop(); // 제거하기 때문에 괄호 값 비워둬도 됨 
console.log(nameArray); // pop 배열의 끝 값 제거하는 속성
nameArray.shift(); 
console.log(nameArray); // shift 배열의 시작 값 제거하는 속성
nameArray.push('가','나','다','라');
console.log(nameArray);
nameArray.pop(); 
console.log(nameArray);
//----------------
const movie = new Array(8)
console.log(movie);
// movie.push('A1')
// console.log(movie);
// movie.unshift('A1_1')
// console.log(movie);
movie[0] = 'a1' // 비워둔 8개 값 중 첫번째에 넣기
console.log(movie);
movie[1] = 'B3';
console.log(movie);
console.log('---------------------------')
// 비워두고 추가하기
const megabox = new Array(); //값을 적지 않아도 배열로 인식 
console.log(megabox);
megabox.push('A1')
console.log(megabox);
megabox.push('B3')
console.log(megabox);
megabox.pop()
console.log(megabox);