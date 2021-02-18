let employees = ["Raiz","Alif","Fahmi","Ahmad","Dafa","Ale","Amar","Andi","Rizki"];

// arrow function filter  
const filter     = (emp,prefix) => emp.filter(emp=>emp.startsWith(prefix));

// old ways 

function filterEmp(emp, prefix) {
    let result = []
    for (let i = 0; i < emp.length; i++) {
        if(emp[i].startsWith(prefix)){
            result.push(emp[i])
        }
        
    }
    return result;
}

console.log(filterEmp(employees,"A"));
console.log(filterEmp2(employees,"A"));

