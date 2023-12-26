// 예약 시스템
const reservation = {
    room:1,
    adult:2,
    children:1,
    option:'금연',
}
console.log(reservation);
reservation.room += 1;
console.log(reservation);
// 속성 제거하기
delete reservation.option;
console.log(reservation);
// 지운 속성을 다시 추가하기
reservation.option = '금연'
console.log(reservation);
// --------------------------------
// x 50, y 100, z 0
// 변수로 도형의 x,y,z값 담기
let x = 50;
let y = 100;
let z = 0;
console.log(x,y,z);
// 객체로 도형의 x,y,z값 담기
const xyz = {
    x:50,
    y:100,
    z:0,
}
console.log(xyz);
//---------------------------------
const user = {
    name:'박',
    age:2,
    birthday:function(){
        console.log('생일ㅊㅋ')
    },
}
console.log(user.birthday())