function Object1(){
 console.log(this);
 this.variable = 5;
}

new Object1();
console.log(this.variable)
