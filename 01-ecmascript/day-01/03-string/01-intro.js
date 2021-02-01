var s = "code".charAt(2);
console.log(s);

var s = "codeid".substr(2,3);
console.log(s);

// compare ad & b
var a = "add"
var b = "bb"
console.log(a < b );

// index of, return posisi index yang dicari
console.log("code ecma".indexOf("code"))//return 0 
console.log("code ecma".indexOf("ecma"))//return 5

// decomposition -> diubah menjadi array
var s = "java, javasript, python"
console.log(s.split(","));

var s = "javasript"
console.log(s.split(""));

// function replace,
var s = "hello word".replace("word","js");
console.log(s);