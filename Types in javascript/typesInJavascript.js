/*

There are 7 types in javascript


//Primitive types: contains the actula value directly

Number
Boolean
String
undefined
null
Symbol

//Non Primitive doesnot contains the actual value directly 

Objects 

{}
[]
function(){}

//Everything in javascript is an objects ? How ?

*/


typeof 5
typeof 'Hello'
typeof undefined
console.log(typeof null)     //this is a mistake (object)
console.log(typeof Symbol('just me'))
console.log(typeof {})
console.log(typeof [])
console.log(typeof function ac() { })    //


//Functions and arrays both are type of objects


function a() {
  return 5;
}

//another proof that functions are objects
a.hi = "hihihihihi"
console.log(a.hi)


//Everything in javascript is an objects ? How ?

const x = true.toString()
console.log(x)

/*

Javascript  silently creates a wrapper object of boolean , 

like Boolean(true).toString()

*/
console.log(Boolean(true).toString())

console.log(typeof Math)                     //object 
console.log(typeof Infinity)                //number  

