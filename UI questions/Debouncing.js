


var x = 1;

function onClick() {
  console.log("Hello from " + x);
  x++;
}


function onClickWithDebouncing(fn, delay) {

  let timer;


  return function () {
    let context = this;
    clearTimeout(timer);
    args = arguments;
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

const betterFun = onClickWithDebouncing(onClick, 2000);


//use case 1: button should be pressed only after the difference between 
//the previous button hit and current is more than 3000 ms;