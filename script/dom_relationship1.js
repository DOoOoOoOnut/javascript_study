// DOM의 부모잡기 : parentNode, parentElement
const aNode = document.querySelectorAll('nav>a')
console.log(aNode,aNode[0],aNode[1]); 
console.log(aNode[0].parentNode); // nav
console.log(aNode[1].parentNode); // nav
console.log(aNode[0].parentElement); // nav
console.log(aNode[1].parentElement); // nav
console.log(aNode[1].parentElement.parentElement); // header
console.log(aNode[1].parentNode.parentNode); // header

aNode[0].addEventListener('mouseover',function(){
    // nav 배경색 노랑
    aNode[0].parentNode.style.backgroundColor = 'yellow';
    // header 배경색 하늘
    aNode[0].parentNode.parentNode.style.backgroundColor = 'skyblue';
});
// aNode 마우스 나갔을 때 배경색 제거
aNode[0].addEventListener('mouseout',function(){
    aNode[0].parentNode.style.background = 'none';
    aNode[0].parentNode.parentNode.style.background = 'none';
});

// ========javascript에서 css 동적 설정=============
// 객체 속성 이벤트 메서드
// aNode[0].parentNode.style = 'background-color:yellow; border: 1px solid red;';
// aNode[0].parentNode.style = 'transform:skewX(20deg)'
// 객체.객체.속성 = '속성:값; 속성:값; 속성:값;'
/* aNode[1].parentNode.style.backgroundColor = 'aqua';
aNode[1].parentNode.style.border = '1px solid blue';
aNode[1].parentNode.style.transform = 'rotate(5deg)'; */
// 객체.객체.속성.속성 = '값'
