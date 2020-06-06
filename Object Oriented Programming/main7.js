class Person {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return this.name + " attacked with " + this.weapon;
  }
}

class Boy extends Person {
  constructor(name, weapon, type) {
    super(name, weapon);
    // console.log(this)
  }
}

const person1 = new Boy('Utkarsh', 'Fire', "Male");


console.log(person1.__proto__);
console.log(person1.__proto__.__proto__);
console.log(person1.__proto__.__proto__.__proto__);
console.log(person1.__proto__.__proto__.__proto__.__proto__);

