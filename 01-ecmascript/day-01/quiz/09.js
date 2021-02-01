let z ='';
const randomPosition = (x)=> {
    for (let i = 100; i <= 200; i++){
        if(i.toString().includes(x.toString())){
            z+=`${i},`;
        }
    }
    z = z.slice(0, -1)
    return z;
}

console.log(randomPosition(7));