let promise = new Promise( (resolve) => {
	let animal = "cat"
  setTimeout(() => {
		if(animal === "dog") {
			resolve("It's a dog!")
		}
	  if(animal !== "dog") {
			reject('It\'s not a dog!')
		}
  }, 1000)
})

Test.assertEquals(promise, promise)

promise
  .then(res => Test.assertEquals(res, "Ignore this test","Do not change the animal variable." ))
  .catch(e => Test.assertEquals(e, "It's not a dog!"))
