const titleCls = document.getElementsByClassName('title');
console.log(titleCls);
console.log(titleCls[0]);
console.log(titleCls[1]);
const listCls = document.getElementsByClassName('list');
console.log(listCls);
// list 클래스를 가지고 있는 li만 인식하는 변수
const ulT = document.getElementsByTagName('ul')[0];
const listT = ulT.getElementsByClassName('list');
console.log(listT);
// ul의 자식 li 중 클래스 list를 잡는 것이므로 ul태그를 먼저 변수에 담아주고 -> classname 호출 앞에 ul태그 선택 변수를 써주기.

//-------------------------------------------------------
//Q. gnb 1개 잡기
const gnbCls = document.getElementsByClassName('gnb')[0];
console.log(gnbCls);

//Q. gnb-li 2개 잡기
const liTag1 = gnbCls.getElementsByTagName('li')[0];
const liTag2 = gnbCls.getElementsByTagName('li')[3];
// HTMLCollection에 6개가 생김 -> 자바스크립트는 자식 자손 상관없이  위에서부터 인덱스 넘버가 붙는다. // 태그 같이 확인하며 맞는 인덱스 잘 확인하고 써 주기.
console.log(liTag1);
console.log(liTag2);

//Q. gnb-li-lnb 2개 잡기
const lnbCls = gnbCls.getElementsByClassName('lnb');
console.log(lnbCls[0]);
console.log(lnbCls[1]);
//lnb의 부모는 li지만 위에 만든 li 변수로 작성 시 하나씩밖에 안잡힘. gnb를 부모로 잡으면 둘 다 잡을 수 있다.

//Q. gnb-li-lnb 첫번째 lnb만 잡기
const lnbCls1 = gnbCls.getElementsByClassName('lnb')[0];
console.log(lnbCls1)

//Q. gnb-li-lnb 두번째 lnb만 잡기
const lnbCls2 = gnbCls.getElementsByClassName('lnb')[1];
console.log(lnbCls2)