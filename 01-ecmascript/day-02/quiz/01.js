let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];

fruits.push("Anggur","Banana","Sirsak");
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.splice(2,1);
console.log(fruits);

fruits.splice(2,3);
console.log(fruits);

fruits.splice(2,0,"Rambutan","Bengkuang");
console.log(fruits);

fruits.splice(4,1,"Nangka");
console.log(fruits);

let vege = fruits.concat(sayur)
console.log(vege);

vege.reverse()
console.log(vege)

vege.reverse();

const tuker = (vege, X, Y)=>{
    let pos = 0
    let pos2 = 0
    for (let i = 0; i < vege.length; i++) {
        if(vege[i].toUpperCase()==X.toUpperCase()){
            pos=i
        }
        if(vege[i].toUpperCase()==Y.toUpperCase()){
            pos2=i
        }       
    }
    vege.splice(pos,1,Y)
    vege.splice(pos2,1,X)
    console.log(vege)
}

tuker(vege,'TOMAT','JERUK')    