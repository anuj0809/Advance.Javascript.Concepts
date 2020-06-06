//Constructor functions 



//This is a construcor function 
function Person(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}


//adding a method in a protype of a constuctor function
Person.prototype.attack = function () {
  return this.name + " attacked with " + this.weapon;
}

//what does new keyword do ? 

const person1 = new Person("Utkarsh", "fire");
const person2 = new Person("Rahul", "water");

console.log(person1.attack())



console.log(Person.prototype)
console.log(person1.__proto__);