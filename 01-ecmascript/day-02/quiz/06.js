const cari = (number,target) =>{
    for (const i of number) {
        for (const j of number) {
            if(i+j === target){
                return console.log(`${i},${j}`)
            }
        }
    }
} 

cari ([1, 2, 3, 4, 5, 5],10)

