let dragon = {

  name: 'Tanya',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name} and breather of fire`;
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1;
  }
}

console.log(lizard.__proto__);

// console.log(lizard.sing());

lizard.__proto__ = dragon;

console.log(lizard.sing());
console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.isPrototypeOf(dragon));


//if the js engine doesnot find the property it goes up the prototype chain and finds it 

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop))
    console.log(prop);

}

function f() {

}

console.log(f.hasOwnProperty('name'));
console.log(f.hasOwnProperty('call'));
console.log(f.hasOwnProperty('bind'));
console.log(f.hasOwnProperty('apply'));
console.log(f.hasOwnProperty('hasOwnProperty'));


