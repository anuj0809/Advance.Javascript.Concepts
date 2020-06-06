

const myNumber = '3';

(function (callback) {
  console.log(myNumber);
  const myText = 'hello';
  callback();
})


  (function () {
    console.log(myNumber);
    console.log(myText);
  })