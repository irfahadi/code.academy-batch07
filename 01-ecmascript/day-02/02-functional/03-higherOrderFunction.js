let employees = ["Raiz","Alif","Fahmi","Ahmad","Dafa","Ale","Amar","Andi","Rizki"];
// output : ["ziaR4","lifa4"]
const passwordFor = value =>{
    return value.split("").reverse().join("")+value.length;
}

// 1. metode push manual
let passwordList = [];
passwordList.push(passwordFor(employees[0]));
console.log(passwordList);

// 2. functional method
const passwordEmps = employees.map(passwordFor);
console.log(passwordEmps)