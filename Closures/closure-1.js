/*
Closures are nothing but a function with its lexical scope
*/


/*

Every variable which is being defined in a parent variable environment and
used in a child environment , JS engine sees it ,and when the parent pops off the stack it stores it in a closures block so 
when the child function gets called , it has access to those variables . 

Hence Closures are a feature of javascript 

now we can say:
A functions execution context depends on where it is defined 
not where it is executed 


Hence closures are nothing but 

functions along with their lexical enviroment are reffered to as closures

*/


function a() {
  let grandpa = "grandpa";

  return function b() {
    let father = "father"

    return function c() {
      let son = "son";

      return ` ${grandpa} > ${father} > ${son} `
    }
  }
}

//above function a and b are higher order functions

//Somehow b still has a acces to grandpa even ater a is popped from th stack

const one = a();

//now function a gets pops off the stack 

//after 5000 years 

const b = one()

const c = b()

console.log(c)

