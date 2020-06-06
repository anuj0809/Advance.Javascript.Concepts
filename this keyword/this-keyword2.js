const a = function () {
  console.log('a', this)

  const b = function () {
    console.log('b', this)

    const c = {
      h1: function () {
        console.log('c', this)
      }
    }

    c.h1()
  }
  b()
}


a()

/*
a: window/global object
b: window/global
c: c

*/