let view;

function initialise() {
  console.log("the view has been set");
}

initialise()
initialise()
initialise()


console.log()


//i dont want someone to initialise more than once 
//Initialisation should not be done more than one time


//how can we solve it using closures 


function initialise1() {
  var called = 0;

  return function () {
    if (called === 0) {
      console.log("The view has been set")
      called++;
    }
  }
}

const mainInitialise = initialise1();


mainInitialise()
mainInitialise()
mainInitialise()
mainInitialise()