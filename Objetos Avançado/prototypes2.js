//new Object
const objA = {
  chaveA: "A",
  //__proto : Object.prototype
};

const objB = {
  chaveB: "B",
  //__proto : Object.prototype
};

const objC = new Object();
objC.chaveC = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);
