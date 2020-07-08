let errorLog = {}

let promise = new Promise((resolve, reject) => {
    throw new Error('Something failed');
})
	.catch(err => errorLog = err)

function promiseState(p) {
  const t = {};
  return Promise.race([p, t]).then(v => (v === t)? "pending" : "fulfilled", () => "rejected");
}

Test.assertSimilar(errorLog, {}, "You are only allowed to reassign 'errorLog' inside of the 'catch' method.")
promiseState(promise).then(state => Test.assertEquals(state, "pending", "ignore this test"))
promise.then(x => Test.assertEquals(x.message, "Something failed"))
promise.then(x => Test.assertEquals(errorLog.message, "Something failed"))
