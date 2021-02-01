// linear search
let s = "hello code.id";
for (let i=0; i<s.length; i++){
    if(s[i]==="."){
        console.log(i);
    }
}

// reverse s
let x = ""
for (let j = s.length-1; j >= 0; j--) {
    x += s[j]
}
console.log(x)