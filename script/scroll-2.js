const btn = document.querySelector('#btn')
const top_btn = document.querySelector('#top')
const header = document.querySelector('header')

// 위로가기 버튼 초기값 설정
top_btn.style.display = 'none'
header.style.transition = 'top 0.5s'

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 300){
        header.style.top = '-50px'
    }else{
        header.style.top = '0'
    }
    // console.log('.')
    // console.log(window.pageYOffset)
    btn.innerHTML = Math.floor(window.pageYOffset) // or scrollY
    if(window.pageYOffset > 200){
        top_btn.style.display = 'block'
    }else{
        top_btn.style.display = 'none'
    }
})

top_btn.addEventListener('click',()=>{
    window.scrollTo({left:0,top:0})
})



