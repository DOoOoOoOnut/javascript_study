const h1Tag = document.getElementsByTagName('h1')
console.log(h1Tag[0]);
/* 
    getElementsByTagName
    * HTML에 TagNode가 2개 이상일 때 그 중 1개만 동적인 기능이 적용되어 DOM으로 등록이 필요한 상황이라면 변수 지정 시 [index] 설정하고 대입
    * HTML에 TagNode가 2개 이상일 때 그 중 여러 개에 동적인 기능이 적용되어 DOM이 된다면 변수 지정 시는 [index] 없이 대입하고 해당 DOM 변수 호출 시 필요한 경우 [index] 사용하기
*/

// 상황1. ul에 동적인 기능이 필요한 경우
const ulTag = document.getElementsByTagName('ul')[0];
console.log(ulTag);
// [0] 붙이지 않으면 HTMLCollection으로 출력. 정확히 원하는 태그를 잡으려면 태그가 하나여도 인덱스를 붙여줘야 함.
// 상황2. ul-li 3개 모두에 동적인 기능이 필요한 경우
let liTag = ulTag.getElementsByTagName('li');
console.log(liTag[0]);
console.log(liTag[1]);
console.log(liTag[2]);
// 상황3. ul-li 중 두번째 a만 동적인 기능이 필요한 경우
let a2Tag = liTag[1].getElementsByTagName('a');
console.log(a2Tag);
// 상황4. ul-li 3개의 a에 동적인 기능이 필요한 경우
let aTagAll = document.getElementsByTagName('a')
console.log(aTagAll[0]);
console.log(aTagAll[1]);
console.log(aTagAll[2]);
/* DOM Node 변수 지정 시
HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고 실제로 DOM Node 변수를 이용한 동적인 결과를 만들어야 할 때는 직접적인 접근으로 대상을 하나씩 개별 인식하게 만들어야 한다. [index] */