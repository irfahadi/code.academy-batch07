//slice mulai dari parameter index pertama s/d index pertama to len
var list = ["a","b","c","d"];
var b = list.slice(1,3);
// console.log(list.slice(1,2));
console.log(b);

//splice 
// list.splice(2,0,"e")
console.log(list)

//copy array, memiliki reference yg sama
var list1 = list;
console.log(list1);
// jika list1 diubah, maka variable sournya ikut berubah (non imutable)
list1.splice(2,1,"z");
console.log(list)

// alternatif copy array.
var list2 = Array.from(list);

// concat array
var listX = [1,2,3];
var listY = [3,4,5];
var listZ = listX.concat(listY);
console.log(listZ);