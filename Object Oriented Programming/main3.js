function Person(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}


Person.prototype.build = function () {
  function building() {
    console.log(this.name + " is building the house")
  }

  building();
}

const person1 = new Person("Utkarsh", "fire");

person1.build()


function Person(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Person.prototype.attack = function () {
  return this.name + " attacked with " + this.weapon;
}

Person.prototype.build = function () {

  const self = this;

  function building() {
    console.log(self.name + " is building the house")
  }

  building();
}

const person1 = new Person("Utkarsh", "fire");

person1.build()


// function Person(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// Person.prototype.attack = function () {
//   return this.name + " attacked with " + this.weapon;
// }

// Person.prototype.build = function () {
//   function building() {
//     console.log(this.name + " is building the house")
//   }

//   return building.bind(this);
// }

// const person1 = new Person("Utkarsh", "fire");

// person1.build()()