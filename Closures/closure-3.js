function callMeMaybe() {
  const callMe = "Hi! I am now here !"

  setTimeout(function () {
    console.log(callMe);
  }, 4000)
}

callMeMaybe();

/*

So , How is this working ? 

so as  Set timeout is sent to the web api's , the function gets pops of the stack ? 
then , when the function comes back to the stack , 


how does callMe is stored ?
It is done because of closures.


*/



//The order of callMe doesnot matter ? why ? 


function callMeMaybeOne() {
  setTimeout(function () {
    console.log(callMe);
  }, 4000)

  const callMe = "Hi! I am now here !"
}


callMeMaybeOne();