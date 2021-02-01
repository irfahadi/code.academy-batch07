let z = 0
const sum = (x)=>{
    const y = x.toString().split("")    
    y.forEach(element => {
        z += Number(element);
    });
    return z;
}

console.log(sum(3456));