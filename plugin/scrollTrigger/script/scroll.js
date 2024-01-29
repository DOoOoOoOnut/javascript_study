const bg = document.querySelectorAll('.bg')
const bg_h2 = document.querySelectorAll('.comment h2')
const bg_p = document.querySelectorAll('.comment p')
const bg1_h2 = document.querySelector('.bg1 h2')
console.log(bg,bg_h2)

// 화면이 내려갈 때 
// 1. bg가 1초정도 작아짐
// 2. h1[0]이 같이 작아짐

for(let i of bg){
    ScrollTrigger.create({
        trigger: i,
        duration:1,
        onEnter:()=> i.classList.add('design1'),
    })
}

/* for(let i of bg){
    gsap.fromTo(i,{
        scale:1.3,
    },{
        scrollTrigger:i,
        duration:2,
        scale: 1.2,
    })
}  */
gsap.fromTo(bg1_h2,{
    opacity:0,
    scale:1
},{
    scrollTrigger:bg1_h2,
    duration:2,
    scale:0.8,
    opacity:1,
})

for(let i of bg_h2){
    gsap.fromTo(i,{
        opacity:0,
        translateY:100,
    },{
        scrollTrigger:i.parentNode,
        duration:0.5,
        translateY:0,
        opacity:1,
    })
}

for(let i of bg_p){
    gsap.fromTo(i,{
        opacity:0,
        translateY:100,
    },{
        scrollTrigger:i.parentNode,
        duration:1,
        delay:0.5,
        translateY:0,
        opacity:1,
    })
}

// 애니메이션 키프레임으로 하면 더 깔끔함


