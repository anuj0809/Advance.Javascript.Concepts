//define and invoke function 

function arr() {

}


arr()

const obj = {
  two() {
    return 2;
  }
}

obj.two()


//function constructor 

const four = new Function('return 4')

four()

/*
Functions are objects ? how ?

*/


function wooohoo() {
  console.log('wohoooo')
}

wooohoo.yell = "ahhhh"

console.log(wooohoo.yell)

wooohoo.

//how does the above this workks ? 

/*

Behind the scenes , it works like

const specialObj={
  yell:'ahahaha',
  namae:'woohoo,
  ():console.log(wohooo)
}
*/


//Functions are callable objects 


/*
Each functions is a piece of object which has some special properties :

Code()
Name (optional) because we can have ananomous functions
*/



/*

functions are  objects  , that is why we arr able to use call , apply and bind to them 


So if we are saying functions are just piece of objects , we can actually pass them around jus like a piece of data 



*/