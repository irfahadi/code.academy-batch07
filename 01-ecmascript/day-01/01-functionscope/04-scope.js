// global scope
test = "js fullstack";
console.log(test);

// funtion scope
function scope(){
    var top = "top";
    console.log(top);
}

// scope();

function scope2(print){
    var top = "atas";
    if(print){
        let insideIf = "print";
        console.log(insideIf);
    }
    // console.log(insideIf);
}

scope2(true);

const x ="hello JS";
//x="hello"
console.log(x);

let y ="js";
y="hello JS";
console.log(y);
// let y = "test"

var z="test";
var z="cool";
console.log(z);
