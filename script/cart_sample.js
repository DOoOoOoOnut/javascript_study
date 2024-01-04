// 왼쪽 썸네일 이미지 JS
// 1. small_thumnail - a에 마우스를 올리면 // small2 에 마유스 올라면
// 2. big_thumnail - img(src) 값이 변경  // big2로 변경

const detail = document.querySelector('.item_detail');
const small_thum = detail.querySelectorAll('.small_thumnail a');
const big_thum = detail.querySelector('.big_thumnail img');
console.log(detail, small_thum, big_thum);

small_thum[0].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big1.jpg";
})
small_thum[1].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big2.jpg";
})
small_thum[2].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big1.jpg";
})
small_thum[3].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big2.jpg";
})
small_thum[4].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big1.jpg";
})
small_thum[5].addEventListener('mouseover',function(){
    big_thum.src = "./dog_images/big2.jpg";
})