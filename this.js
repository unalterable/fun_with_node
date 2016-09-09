
console.log("============1");

function Person() {
  console.log(this);
};

console.log("============2");

console.log(Person);

console.log("============3");

var person = new Person();

console.log("============4");

console.log(person);

console.log("============5");

Person();

console.log("============6");

var person2 = Person;
person2()

console.log("============7");

person2.call(Person);
console.log("============8");


var clickEvent;

$(document).click(function(event) {
  clickEvent = event;
});

console.log("Mouse click event object:", clickEvent);
