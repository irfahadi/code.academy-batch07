let z = '';
const deretSatu = (x) =>{
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= i; j++) {
           z+=1 
        }
        if(i!==x){
        z+=','
        }
    }
    return z
}
console.log(deretSatu(5));