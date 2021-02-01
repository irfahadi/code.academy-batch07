let z = ''
const deretRam = (x) =>{
    for (let i = 0; i <= x; i++) {
        let y = Math.pow(2,i)
        if(i===x){
            z+=`${y}`
        }else{
            z+=`${y},`
        }
    }
    
    return z
}

console.log(deretRam(7));
