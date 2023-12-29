const x = 2;
const y = 4;
let num = 1;
let all = [x, y, num, 0]

function func1(){
    console.log(`x=${x}, y=${y}, num=${num}, all[0]=${all[0]}, all[1]=${all[1]}, all[2]=${all[2]}, all[3]=${all[3]}`);
    console.log(`모든 변수를 더한 값 =>
    ${x + y + num + all[0] + all[1] + all[2] + all[3]}
    `)
}
func1()