

var x = 5;


function third() {
  console.log("hello" + x)
}

function second() {
  third()
}

function first() {
  second()
}

first()


/*

How am i able to access the x from 3 ? 
third's parent is second , second's parent is first , first's parent is global 
to vo top most tak x dhundne jaega , aur jaise hi mil jaega vaha pe ruk jaega

//GLOBAL SCOPE is the outer most scope 

All this is possible because of scope chaining

a chain that given us access to variable defined in variable environment of parent's execution  context 

*/



function first() {
  var a = 5;

  return function second() {
    var b = 5;

    return function third() {
      var c = 6;

      console.log(a + b + c)
    }
  }
}


/*

  how is the above code working ? 

  The scope chain gives access to a,b in function third , because 
  that is its parent's execution context

  //GLOBAL SCOPE is the outer most scope 


*/


/*
Why cant we make everything global ? 

why do we need to pollute the global space
we have limited space
if we had multiple scripts , it could lead to variable collison 
*/