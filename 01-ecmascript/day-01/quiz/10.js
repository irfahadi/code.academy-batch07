let z = ''
const  isPalindrome = (x) =>{
    const y = x.toString().toLowerCase()
    for (let i = y.length-1; i >= 0; i--) {
        z+=y[i];       
    }
    return y === z;
}

console.log(isPalindrome('Kasur ini ruSak'));
