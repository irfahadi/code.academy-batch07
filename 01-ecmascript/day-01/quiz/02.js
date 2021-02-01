let z = ''
const reverse = (x) =>{
    const y = x.toString().split("")
    for (let i = y.length-1 ; i >= 0; i--) {
        z+=y[i]
    }
    return z;
}

console.log(reverse(1234));
