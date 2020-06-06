const obj = {

  name: 'Billy',

  sing() {
    console.log('a', this);
    var anotherFunc = function () {
      console.log('b', this)
    }
    anotherFunc()
  }
}

obj.sing()


const obj1 = {

  name: 'Billy',

  sing() {
    console.log('a', this);
    var anotherFunc = () => {
      console.log('b', this)
    }
    anotherFunc()
  }
}

obj1.sing()


const obj2 = {

  name: 'Billy',

  sing() {
    console.log('a', this);
    var self = this;
    var anotherFunc = function () {
      console.log('b', self)
    }
    anotherFunc()
  }
}

obj2.sing()


