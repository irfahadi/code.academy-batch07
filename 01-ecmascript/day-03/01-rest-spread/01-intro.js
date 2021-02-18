// kasus sum
const sum = (a,b)=>{
    return a+b;
}

console.log(sum(1,2));

const sumRest=(...Values)=>{
    let sum = 0;
    Values.forEach(element => {
        sum += element; // sum = sum+element
    }); 
    return sum   
}

console.log(sumRest(1,2,3,4,5));

const firstName = 'code';
const lasrName = 'id';
const gelar = 'Sarjana';

const greet = (...names)=>{
    return names.join(" ")
}

console.log(greet(firstName,lasrName,gelar));
