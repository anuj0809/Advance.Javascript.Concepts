


function onButtonPress() {
  console.log("Button is Pressed");
}


const onBetterButtonPress = function (fn, delay) {
  let flag = true;

  console.log(flag)
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay)
    }
  }
}


const buttonPress = onBetterButtonPress(onButtonPress, 2000);