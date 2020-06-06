class Person {
  #age = 54;
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    console.log(this.name + " attacked " + this.weapon);
  }
}

const person1 = new Person("Utkarsh", "Fire");

person1.attack();

console.log(person1.age)



