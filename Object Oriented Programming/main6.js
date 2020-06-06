class Person {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return this.name + " attacked with " + this.weapon;
  }
}

const person1 = new Person('Utkarsh', 'Fire');

console.log(person1);
console.log(person1.attack());


const person2 = { ...person1 };

console.log(person2);
console.log(person2.attack());



console.log(person1.__proto__);
console.log(person2.__proto__);