// // const myNumber = '3';

// // (function (callback) {
// //   console.log(myNumber);
// //   var myText = 'hello';
// //   callback();
// // })(function () {
// //   console.log(myNumber);
// //   console.log(myText);
// // })


// // (function () {
// //   let myText = 'hello';
// // })()
// // console.log(myText);

// // 'use strict'

// // const myNumber = '3';
// // (function (callback) {
// //   console.log(myNumber);
// //   myText = 'hello';
// //   callback();
// // })(function () {
// //   console.log(myNumber);
// //   console.log(myText);
// // })


// // var b = 1;
// // function outer() {
// //   var b = 2
// //   function inner() {
// //     b++;
// //     let b = 5;
// //     console.log(b)
// //   }
// //   inner();
// // }
// // outer();

// // console.log(color);
// // let color = '#aaa';

// // function square(a = 4) {
// //   return a * a;
// // }

// // console.log(a);
// // console.log(square());

// // var a = 4;
// // function square(a = a) {
// //   return a * a;
// // }
// // console.log(square());
// // // console.log(square(2));



// // function test(someVal) {
// //   console.log(variable); // first question
// //   if (someVal) {
// //     let variable;
// //     //console.log(typeof variable); // second question
// //   }
// // }
// // test(true);


// // function foo() {
// //   'use strict';
// //   console.log("Simple function call")
// //   console.log(this === window);
// // }

// // let user = {
// //   count: 10,
// //   foo: foo,
// //   foo1: function () {
// //     console.log(this === window);
// //   }
// // }

// // user.foo()
// // let fun1 = user.foo1;
// // fun1()
// // user.foo1()




// //functions

// // function fun() {
// //   console.log("hello");
// // }


// // fun.data = 5;

// // console.log(fun.name)
// // console.log(fun.data)



// // //underneath the hood , js creates a special type of object : callable object

// // const fun={

// //   name:fun,
// //   data:5,
// //   ():{console.log("hello")}

// // }


// //functions are first class citizens in js ? 

// //functions in js are data that can be passed along like variables 


// const x = function () {
//   console.log("hello");
// }


// //passing functions as arguements 

// const y = function (fn) {
//   fn();
// }

// y(x);


// // returning functions from a functions

// // const a = function () {
// //   return function () {
// //     console.log("i was returned");
// //   }
// // }

// // a()()


// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo);
//     console.log("outer func:  self.foo = " + self.foo);
//     (function () {
//       console.log("inner func:  this.foo = " + this.foo);
//       console.log("inner func:  self.foo = " + self.foo);
//     }());
//   }
// };
// myObject.func();

// // // bar
// // // bar
// // // undefined
// // // bar




// var myObject = {
//   foo: "bar",
//   func: function () {
//     var self = this;
//     console.log("outer func:  this.foo = " + this.foo);
//     console.log("outer func:  self.foo = " + self.foo);
//     (function () {
//       console.log("inner func:  this.foo = " + this.foo);
//       console.log("inner func:  self.foo = " + self.foo);
//     }());
//   }
// };
// myObject.func();



// (function () {
//   console.log(1);
//   setTimeout(function () { console.log(2) }, 1000);
//   setTimeout(function () { console.log(3) }, 0);
//   console.log(4);
// })();


// var a = b = 3;
// console.log(a);
// console.log(b);
// console.log(a === b);

// var d = {};
// ['zebra', 'horse'].forEach(function (k) {
//   d[k] = undefined;
// });
// console.log(d)

// console.log(1 + "2" + "2");

// console.log(1 + -"1" + "2");


// console.log(+"1" + "1" + "2");

// console.log("A" - "B" + "2");


// console.log("A" - "B" + 2);


// for (var i = 0; i < 5; i++) {
//   setTimeout(function () { console.log(i); }, i * 1000);
// }

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () { console.log(i); }, i * 1000);
// }

// const arr = [10, 12, 15, 21, 34];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log('The index of this number is: ' + i);
//   }, 1000);
// }

// for (var i = 0; i < 5; i++) {

//   (function (x) {
//     setTimeout(function () { console.log(x); }, i * 1000);
//   })(i);
// }

// function func1() {
//   return {
//     name: "Akarshan"
//   };
// }
// function func2() {
//   return
//   {
//     name: "Akarshan"
//   };
// }
// console.log(func1())
// console.log(func2())




console.log(+ "***");
// var a = {},
//   b = { key: 'b' },
//   c = { key: 'c' };
// a[b] = 123;
// a[c] = 456;
// console.log(a[b]);


// answers:


// outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar
// 1
// 4
// { zebra: undefined, horse: undefined }
// 122
// 02

