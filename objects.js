function Object1(){
 console.log(this);
 this.variable = 5;
}

var obj1 = new Object1();
console.log(obj1.variable)
