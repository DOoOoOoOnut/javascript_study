const header = document.querySelector('header');
const headerChild = header.childNodes;
console.log(headerChild);
// childNode 텍스트노드가 필요할 때 children 요소 노드가 필요할 때 주로 사용
console.log(headerChild[1]);
console.log(headerChild[3]);
console.log(headerChild[1].innerText); // logo
console.log(headerChild[1].innerHTML); // <a href="#">logo</a>
console.log(headerChild[3].innerText); // menu1 menu2
console.log(headerChild[3].innerHTML); //   <a href="#">menu1</a> <a href="#">menu2</a>
console.log(headerChild[3].childElementCount); //   <a href="#">menu1</a> <a href="#">menu2</a>

/* headerChild[1].innerText = "로고"; */ // innerText로 읽을 때는 텍스트만 읽지만, 대입연산자를 사용하면 h1안의 모든 자식 자손을 통째로 바꿔버림 == <h1><a>logo</a></h1> -> <h1>로고</h1>

headerChild[1].childNodes[0].innerText = '로고'
headerChild[1].children[0].innerText = '로고로고'

const menu = document.querySelectorAll('nav a')
let m1 = menu[0];
let m2 = menu[1];
console.log(menu, m1, m2)

m1.addEventListener('mouseover',function(){
    m1.innerText = '메뉴1'
})
m1.addEventListener('mouseout',function(){
    m1.innerText = 'menu1'
})
m2.addEventListener('mouseover',function(){
    m2.innerText = '메뉴2'
})
m2.addEventListener('mouseout',function(){
    m2.innerText = 'menu2'
})

// 장바구니 갯수 만들기

const cart = document.querySelector('.cart');
console.log(cart); // 확인
console.log(cart.childElementCount); // 확인
const all = document.querySelector('.all');
console.log(all.innerText)//확인
all.innerText = cart.childElementCount // 출력

// 첫번째 자식, 마지막 자식 노드 잡기
// firstChild, lastElementChild
const items = document.querySelectorAll('.item');
console.log(items);
console.log(items[0]);
console.log(items[0].firstChild);
console.log(items[0].firstElementChild);
console.log(items[0].lastChild);
console.log(items[0].lastElementChild);

console.log('---------------------')
// ---------------형제노드잡기
// 이전 형제 previousSibling, previousElementalSibling
// 다음 형제 nextSibling, nextElementalSibling
const item_h2 = items[0].querySelector('h2');
console.log(item_h2)
console.log(item_h2.nextSibling)// 첫 번째 item의 h2 상품 이름 정상확인
console.log(item_h2.nextSibling.nextSibling)//공백포함 다음형제
console.log(item_h2.nextElementSibling)
console.log(item_h2.previousSibling)
