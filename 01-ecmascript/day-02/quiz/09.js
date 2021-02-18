const replaceSpace = (x) =>{
     y= x.split("")
    for (let i = 0; i < y.length; i++) {
        if (y[i]===" "){
            y[i]= '%20'
        }
    }
    return y.join("")
}

console.log(replaceSpace('Mr Code Id'))