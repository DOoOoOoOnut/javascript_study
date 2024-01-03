/* 
DOM 관계속성 
1. parentNode 부모 노드, parentElement 부모 요소
    - parentNode.parentNode 연속 사용 (부모의 부모 잡기)
    - 자식 또는 자손노드.parentElement (특정 자식의 부모 잡기)
2. javascript에서 css 제어하기 -> style속성
    - DOM.관계.style = "속성:값; 속성:값; 속성:값;"
        * (위) style 2번 이상 생성 시 이전 속성:값 제거됨
    - DOM.관계.관계.style.속성 = "값";
        * (위) style 2번 이상 생성 시 기존 속성값에 이어서 추가됨
    - DOM.style.속성 = "값";
    - 위 관계는 필요에 따라 선택 속성
*/
// 24/1/3 자식노드 제어하기
// childNodes, children, childElementCount
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
console.log(header, main, footer); // 변수 정상 작동 확인
// 빨간 error 메세지, undefined, null 출력 없이 올바른 Node 출력 되는지 확인!!!!!
// > 이후 문제 일으킬 수 있으므로 확인하고 수정 후 넘어가야 함!!!

const h_text = header.childNodes
const m_text = main.childNodes
const f_text = footer.childNodes

console.log(header.childNodes); // 텍스트 노드 인덱스 출력
console.log(h_text[0]); // 텍스트 노드 출력 / "header"
console.log(h_text[0].data); // 데이터 출력 / header
console.log(h_text[0].length); // 글자수 출력 / 6
console.log(h_text[0].baseURI); // ip주소 출력
// 반복되는 부분은 변수로 만들어주기

// main, footer
console.log(m_text);
console.log(m_text[0]);
console.log(m_text[0].data);
console.log(m_text[0].length);
console.log(m_text[0].baseURI);
console.log(f_text);

