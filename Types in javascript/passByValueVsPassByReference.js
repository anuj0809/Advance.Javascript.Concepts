//primitives types are passed by value

var a = 5;
var b = a;

b++;


console.log(a)
console.log(b)


//the change in b doesnot affect change in a - because primitive types are passd by value

let obj1 = { name: 'Yao', password: 'Ragman*16' }
let obj2 = obj1;


obj2.name = "Utkarsh"

console.log(obj1)
console.log(obj2)

//the change in obj2 affects change in obj1 - beacause non primitive types are passd by reference 



var c = [1, 2, 3, 4, 5]
var d = c;
d.push(322)

console.log(c)
console.log(d)


//solve :

var c1 = [1, 2, 3, 4, 5]
var c2 = [].concat(c1)
c2.push(344)
console.log(c1)
console.log(c2)


//Solve for objects 


let obj11 = { name: 'Yao', password: 'Ragman*16' }
let obj21 = new Object(obj1);
//or 


obj21.name = "Utkarsh"

console.log(obj11)
console.log(obj21)



//Solve for objects 


let obj12 = { name: 'Yao', password: 'Ragman*16' }
let clone = Object.assign({}, obj12)
//or 
clone.name = "Utkarsh"
console.log(obj12)
console.log(clone)




//Solve for objects  using spread operator 


let obj13 = { name: 'Yao', password: 'Ragman*16' }
let clone1 = { ...obj13 }
//or 
clone1.name = "Utkarsh"
console.log(obj13)
console.log(clone1)




//whats the problem ?


let objct = { a, b, c: { deep: 'try and copy me' } }

let clone3 = { ...objct };

//clone3.c.deep = "ahhaha";

console.log(objct)
console.log(clone3)


//EACH OBJECT GETS PASSED BY REFERENCE 

/*
THIS IS CALLED SHALLOW CLONE :
*/


//Hwow to do deep cloning

//1)

let clone4 = { ...objct, c: { ...(objct.c) } }

clone4.c.deep = "papappa";

console.log(objct)
console.log(clone4)


//2)
let superClone = JSON.parse(JSON.stringify(objct))

superClone.c.deep = "rfrfr";

console.log(objct)
console.log(superClone)


/**
 deep cloning second mehtod is an expensice operation 

 */