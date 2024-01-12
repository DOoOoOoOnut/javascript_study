const userId = document.querySelector('#userID')
console.log(userId);

userId.addEventListener('blur',()=>{
    // 아이디가 admin이면 관리자 화면 아니면 일반회원 환영
    if(userId.value == 'admin' ){
        console.log('관리자 환영')
    }else{
        console.log('일반회원 환영')
    }
})