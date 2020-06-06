var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    }());
  }
};
myObject.func();




(function () {
  console.log(1);
  setTimeout(function () { console.log(2) }, 1000);
  setTimeout(function () { console.log(3) }, 0);
  console.log(4);
})();


var a = b = 3;


var d = {};
['zebra', 'horse'].forEach(function (k) {
  d[k] = undefined;
});
console.log(d)

console.log(1 + "2" + "2");

console.log(1 + -"1" + "2");


console.log(+"1" + "1" + "2");

console.log("A" - "B" + "2");


console.log("A" - "B" + 2);


for (var i = 0; i < 5; i++) {
  setTimeout(function () { console.log(i); }, i * 1000);
}
