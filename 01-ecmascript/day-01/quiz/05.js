const searchWord = (x,y) =>{
    return x.toString().includes(y)
}

console.log(searchWord("aku suka javascript", "k"));
console.log(searchWord("aku suka javascript", "z"));