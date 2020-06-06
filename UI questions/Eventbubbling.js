

const grandParent = document.getElementById("gparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");



// grandParent.addEventListener("click", () => {
//   console.log("GrandParent is killed");
// }, true)

// parent.addEventListener("click", () => {
//   console.log("Parent is killed");
// }, true)

// child.addEventListener("click", () => {
//   console.log("Child is killed");
// }, true)




grandParent.addEventListener("click", () => {
  console.log("GrandParent is killed");
}, false)

parent.addEventListener("click", () => {
  console.log("Parent is killed");
}, true)

child.addEventListener("click", () => {
  console.log("Child is killed");
}, true)