// initial array
var array = new Array(3); 
array[0]=3
array[1]=2
array[2]='CODE'
console.log(array);

// initila array with dynamic element
array = ["code",["js","react"],"bootcamp",2021];
console.log(array);

// add new element in last index
var list = ["a","b","c","d"];
list.push("j","r");
console.log(list);

// remobe element
list.pop()
console.log(list);

// add element di index pertama
list.unshift("x");
console.log(list);

// remove first element
list.shift();
console.log(list);

// access index tertentu
console.log(list[2]);

// looping for aaray
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(element)
}

// for of
for (const key of list) {
    console.log(key);
}

list.forEach(element => {
    console.log(element)
});