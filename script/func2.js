const user = [{
    name:'Lee',
    age:20,
},{
    name:'kim',
    age:30,
}]
// a호출시 이 나이+1 
function a(){
    let num_a = 1;
    user[0].age++
    console.log(`${user[0].name}의 나이는 ${user[0].age}살입니다.`)
    b()
}
function b(){
    let num_b = 1;
    user[1].age++
    console.log(`${user[1].name}의 나이는 ${user[1].age}살입니다.`)
}
a()
