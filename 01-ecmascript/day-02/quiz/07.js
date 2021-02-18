const isUniqueChars = (x) =>{
    let y = x.split("");
    cek = true;
    for (let i = 0; i < y.length; i++) {
        for (let j = 0; j < y.length; j++) {
            if(i!==j){
                if(y[i]===y[j]){
                    return console.log(false)
                }
            }
        }
    }
    return console.log(true); 
}

isUniqueChars('abcdefg');//return true
isUniqueChars('abcdefga'); //return false