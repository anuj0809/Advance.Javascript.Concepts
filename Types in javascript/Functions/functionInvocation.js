

var marry1 = (person1, person2) => {
  console.log(arguments)

}


//Arguements is created with each execution context

//Each executon contest has its own this keyword, 
//own arguments object and its own variable environment


marry1("Utkarsh", "Rohan");

//function declaration
function marry(person1, person2) {
  console.log(arguments)
}

marry("Utkarsh", "hardik")