
function a(str) {
  return function b(name1) {
    return function c(name2) {
      return ` ${str} ${name1} ${name2} `
    }
  }
}


const welcome = a("heyooo")

//after 500 years 

const welcomePerson1 = welcome("Utkarsh");



//after 500 years

//welcome person1 and person2

const welcomePerson2 = welcomePerson1("Hardik")


console.log(welcomePerson2)


/*

now how does function a parameters are stored ? 


Its because of closures beacuse parameters of a function
 are treted just like local variables and stored in parent's local
 variable environment , which are then moved to the closures box , 
 which allows the child to use them even after the  parent is popped of the stack 
 
*/