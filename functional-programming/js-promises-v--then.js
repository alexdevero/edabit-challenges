var result = ""

let promise = new Promise((resolve, reject) => {
	resolve('success!')
})

promise.then(res => result = res)

function promiseState(p) {
  const t = {};
  return Promise.race([p, t]).then(v => (v === t)? "pending" : "fulfilled", () => "rejected");
}

Test.assertEquals(result, "", "You are only allowed to reassign 'result' inside of the 'onFulfilled' callback.")
promiseState(promise).then(state => Test.assertEquals(state, "fulfilled", "Did pass in the resolve callback to your promise?"))
promise.then(x => Test.assertEquals(result, "success!"))
