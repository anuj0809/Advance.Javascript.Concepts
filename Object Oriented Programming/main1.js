


const singHelper = {
  sing() {
    console.log(this.name + " is singing");
  }
}

//Factory functions: 

const createPerson = (name) => {
  let person1 = Object.create(singHelper);

  console.log(person1.__proto__);

  person1.name = name;
  return person1;
}


let person1 = createPerson("Utkarsh");
let person2 = createPerson("Rahul");

person1.sing();
person2.sing();