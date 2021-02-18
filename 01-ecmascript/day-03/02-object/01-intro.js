//object type
const product = {
    id:1,
    names: "Laptop Dell",
    price: 1500,
    variant:{
        type: "gamer",
        core: "i7 Core"
    }
}

const infoProduct = info =>{
    return `info product : ${info.names},${info.price}`
}

console.log(infoProduct(product))

//destructing object with parameter 
const {id, ...info} = product;
console.log(id);
console.log(info);

const {variant:{core}} = product;
console.log(core);
