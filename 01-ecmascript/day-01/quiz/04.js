z = 0
const howManyWord = (x) =>{
    const y = x.toString().split(" ")
    y.forEach(() => {
        z++;   
    });
    return z;
}

console.log(howManyWord("aku suka javasciprt fullstack"));