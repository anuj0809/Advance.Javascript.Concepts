

function add() {

  let x = arguments[0];

  return function () {
    console.log(arguments)
    if (arguments[0] == undefined)
      return x;

    return x + arguments[0];
  }
}

console.log(add(1)))