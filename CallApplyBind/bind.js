const intro = function (...args) {
  console.log(`${this.name} lives in city: ${args[0]} state:${args[1]} country:${args[2]} planet:${args[3]}`);
}


const obj = {
  name: "Utkarsh",
}

// normal bind :
const giveInro = intro.bind(obj, "Dehradun", "Uttrakhand", "India")
giveInro("Earth")


//our own bind :
Function.prototype.myBind = function (...args) {
  const obj = this;
  const params1 = args.slice(1);
  return function (...params2) {
    obj.apply(args[0], [...params1, ...params2]);
  }
}

const giveIntro2 = intro.myBind(obj, "Amritsar", "Punjab", "India");

giveIntro2("Earth")