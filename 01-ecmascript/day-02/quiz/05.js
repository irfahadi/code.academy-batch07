const digitSum = (nilai) => nilai.toString().split("").reduce((x,y)=>Number(x)+Number(y)); 

console.log(digitSum(4242));