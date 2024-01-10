// 4개 버튼 클릭 시 '접근불가' 공통 메세지 띄우기
// 로그인(콘솔) 구매하기(팝업) 장바구니(body) 관리자(팝업)

const loginBtn = document.querySelector('#loginBtn');
const buyBtn = document.querySelector('#buyBtn');
const cartBtn = document.querySelector('#cartBtn');
const adminBtn = document.querySelector('#adminBtn');
console.log(loginBtn,buyBtn,cartBtn,adminBtn);
function ban(page){
    return `${page} 접근불가`
}
loginBtn.addEventListener('click',function(){
    console.log(ban('로그인페이지'));
})
buyBtn.addEventListener('click',function(){
    alert(ban('구매페이지'));
})
cartBtn.addEventListener('click',function(){
    document.write(ban('장바구니 페이지'));
})
adminBtn.addEventListener('click',function(){
    alert(ban('관리자페이지'));
})
