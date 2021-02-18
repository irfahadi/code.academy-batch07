const isPermutation = (x,y) =>{
    const xi = x.split("");
    const yj = y.split("");
    let count = 0
    if(xi.length===yj.length){
        for (const i of xi) {
            for (const j of yj) {
                if(i===j){
                    count++
                    break;
                }
            }
        }
        if(count===x.length){
            return true
        }
    }
    return false;
}

console.log(isPermutation('aba', 'aab')); //true
console.log(isPermutation('aba', 'aaba ')); //false
console.log(isPermutation('aba', 'aa'));//false