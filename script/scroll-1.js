// 스크롤 javascript
// 1. window.scrollTo(x,y) 지정된 x,y 좌표로 스크롤 이동 함수
// window.scrollTo(0,200)

// window.onload : body 리소스를 모두 읽고 onload 함수 실행

/* window.onload = () => {
    console.log('.')
    window.scrollTo(0,200)
} */

// 리소스 로드를 기다리지 않고 바로 함수 실행
document.addEventListener('DOMContentLoaded',()=>{
    console.log('.')
    setTimeout(()=>{
        window.scrollTo(0,300)
    },0)
})

// 변수들
const btn = document.querySelector('#btn')
const prev_btn = document.querySelector('#prev')
const next_btn = document.querySelector('#next')
const bg = document.querySelectorAll('.bg')
console.log(prev_btn,next_btn)
console.log(btn)

btn.addEventListener('click',()=>{
    // window.scrollTo({left:0, top:1000})
    // window.scrollBy(0,400)
    window.scrollTo({left:0,top:bg[2].offsetTop})
})


// bg1.style = 'scroll-behavior:smooth' // 스크롤 애니메이션

next_btn.addEventListener('click',()=>{
    bg[0].scrollBy(1400,0)
})

prev_btn.addEventListener('click',()=>{
    bg[0].scrollBy(-1400,0)
})