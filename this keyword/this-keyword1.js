

//this is a object , that which function is a property of 

function a() {
  console.log(this)
}

a()


//=>


const obj = {
  name: "Uktarsh Malik",

  sing() {
    return this.name;
  }
  , singAgain() {
    return this.sing() + "!"
  }
}

console.log(obj.singAgain())



//this refers to the what is at the left of the block

/*

Why this ?

=>it gives methods acess to the object 
=>it can execute the same code for multiple objects

*/

//elaborating use-2

function importantPerson() {
  console.log(this.name)
}

name = "Sunny"



const obj1 = {
  name: "Cassy",
  importantPerson
}

const obj2 = {
  name: "Jacob",
  importantPerson
}

importantPerson()
obj1.importantPerson()
obj2.importantPerson()


//this points to left of functionName
//this point to which object called me
