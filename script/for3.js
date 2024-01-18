const target = document.querySelector('.target');
const ul = document.createElement('ul') // 태그생성
let li = document.createElement('li') // 태그생성
console.log(target,ul)

for(let i = 0; i<3; i++){
    li = document.createElement('li')
    for(let j=0; j<2; j++){ // 만약 span안에 다른 태그 넣을 계획이라면 span도 create 변수로 만들어줘야 함.
        li.innerHTML += `<span>상품${j+1}</span> `
    }
    console.log(li)
    ul.appendChild(li)
}
target.appendChild(ul)

//----

const target2 = document.querySelector('.target2')
console.log(target2)
let dt = document.createElement('dt')
let dd = document.createElement('dd')
// console.log(dt,dd)

/* target2.appendChild(dt)
dt.innerHTML = '제목'
for(let i=0; i<2; i++){
    dd = document.createElement('dd')
    dd.innerHTML = '내용'
    target2.appendChild(dd)
}
console.log(target2) */

for(let i=0;i<2;i++){
    dt = document.createElement('dt')
    dt.innerHTML = '제목'
    target2.appendChild(dt)
    for(let j=0;j<2;j++){
        dd = document.createElement('dd')
        dd.innerHTML = `내용${j+1}`
        target2.appendChild(dd)
    }
}
console.log(target2)