function letAdminLogin() {

  let arr = [];

  for (let i = 0; i < 10000000; i++) {
    arr.push(i);
  }
  return 'Acess Granted to  Adam'
}

function letEvalLogin() {

  let arr = [];

  for (let i = 0; i < 100000; i++) {
    arr.push(i);
  }
  return 'Access granted to Eva'
}

letAdminLogin()
letEvalLogin()


/*

The above code violetes dry principle 
We will do the same work for thousand of employees
*/



//=>2

//function with parameters

function letUserLogin(user) {
  let arr = [];

  for (let i = 0; i < 1000000; i++) {
    arr.push(i);
  }

  return 'Access granted to ' + user;
}

console.log(letUserLogin("Eva"))
console.log(letUserLogin("Adam"))



//=3

const giveAccessTo = (name) =>
  'Access Granted to ' + name;


// function letUserLogin(user) {
//   let arr = [];

//   for (let i = 0; i < 1000000; i++) {
//     arr.push(i);
//   }

//   return giveAccessTo(user)
// }

// console.log(letUserLogin("Eva"))
// console.log(letUserLogin("Adam"))




function authenticate(verify) {
  let array = []

  for (let i = 0; i < verify; i++)
    array.push(i)
}

function letPerson(person, fn) {
  if (person.level === 'admin')
    fn(500000)
  else if (person.level === 'user') {
    fn(100000)
  }

  return giveAccessTo(person.name)
}

letPerson({ level: 'admin', name: 'sally' }, authenticate)

