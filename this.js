
console.log("============");

function Person() {
  console.log(this);
};

console.log("============");

console.log(Person);

console.log("============");

var person = new Person();

console.log("============");

console.log(person);

console.log("============");

Person();

console.log("============");

var person2 = Person;
person2()

console.log("============");

person2.call(Person);
console.log("============");
