// 객체 object
// 데이터 저장소 = 변수(한번에 한가지 값), 배열(2개 이상의 값)
// 객체 -> 특정 값에 해당되는 '속성을 추가해서' 데이터 관리를 용이하게 함
const cat = {
    color:'black',
    age:1, // 마지막 값에도 콤마 써주기. 나중에 값 추가될 때 실수로 콤마 없이 작성해 에러 나는 것 막을 수 있음.
}
console.log(cat)
// console.log(cat.length) // undefined
// 객체에는 index,length가 없음.
// 여러 개의 데이터가 들어가는 복잡한 부분에는 객체를 많이 사용.
// 객체의 값을 따로 뺴기 -> 변수 이름.속성

console.log(cat.age);
console.log(`${cat.age}살 ${cat.color} 고양이 분양합니다.`);
const cat2 = {
    color:['흰색','노란색','검정색'],
    age:2,
}
console.log(cat2); // {color: Array(3), age: 2}
console.log(`고양이의 털 색깔은 ${cat2.color[1]}, ${cat2.color[0]}, ${cat2.color[2]}으로 이루어져 있습니다.`);
const cat3 = {
    'cat type':'코리안 숏헤어',
    color:['흰색','검은색'],
    age:1,
    gender:'암컷',
    adoptment:'입양 전',
    neautered:'중성화 전',
    healthy:'양호',
}
console.log(cat3);
// console.log(cat3.'cat type');
console.log(cat3['cat type']);
cat3.adoptment = '입양 완료';
console.log(cat3.adoptment);
cat3.neautered = '입양 완료';
cat3.age += 1 ;
console.log(cat3);
