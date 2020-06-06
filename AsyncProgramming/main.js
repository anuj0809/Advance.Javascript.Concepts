const promise = new Promise((resolve, reject) => {

  //here you can perform any asynchronous work you want to 

  setTimeout(() => {
    if (true)
      resolve("promise is resolved");
    else
      resolve("Promise is rejected");
  }, 3000);
})


promise.then((result) => console.log(result)).
  catch(err => console.log(err))





//What is promise.all , explain with example ?

const promise1 = new Promise(((resolve, rejecte) => {

  setTimeout(resolve, 2000, "first promise resolved");

}))

const promise2 = new Promise((resolve, reject) => {

  setTimeout(resolve, 1000, "second promise resolved");


})

const promise3 = new Promise((resolve, reject) => {

  setTimeout(resolve, 0, "third promise resolved");

})

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values))