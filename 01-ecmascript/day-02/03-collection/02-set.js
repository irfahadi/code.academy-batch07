// intial set, hanya menampung value unique
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add("code");
mySet.add(1);

for (const my of mySet) {
    console.log(typeof my)
}