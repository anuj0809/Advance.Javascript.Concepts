
/*

    What are call , apply and bind used for ?

    call , apply and bind are used to shrare methods of objects 
*/


const parent = {
  health: 50,
  addHealth(num1, num2) {
    this.health += num1 + num2;
  }
}

const child = {
  health: 70
}

console.log(child)

parent.addHealth.call(child, 10, 20)

console.log(child)

parent.addHealth.apply(child, [10, 20])

console.log(child)


/*

  bind always returns a function

*/



const addHealth = parent.addHealth.bind(child, 40, 50);

addHealth()

console.log(child)