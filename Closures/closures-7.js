const array = [1, 2, 3, 4];

for (var i = 0; i < 4; i++) {
  setTimeout(function () {
    console.log(i)
  }, 3000)
}


//here the output is 4,4,4,4


//Can i fix it to be such that it is 1,2,3 and 4 using closures


for (var i = 0; i < 4; i++) {
  const x = i;
  setTimeout(function () {
    console.log(x)
  }, 3000)
}




//Can i fix it to be such that it is 1,2,3 and 4 using closures

//use let

for (let i = 0; i < 4; i++) {
  const x = i;
  setTimeout(function () {
    console.log(x)
  }, 3000)
}



