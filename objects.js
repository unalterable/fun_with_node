function Object1(){
 console.log(this);
 this.variable = 5;
}

var obj1 = new Object1();
obj1.variable = 6;
var obj2 = new Object1();
console.log(obj1.variable);
console.log(obj2.variable);
