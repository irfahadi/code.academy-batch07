//function declaration
function foo(){
    return foo
}

// console.log(foo());

//function expression
const fnc_exp = function(value){
    return value

}

// console.log(fnc_exp)

//function expression with name
const fnc_exp2 = function foo(value){
    return value;
}

//arrow function 
const arrow = () =>{

}

const fn_arrow = (value) =>{
    "hello"+value
}

console.log(arrow("js"))