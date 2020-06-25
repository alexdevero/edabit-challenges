function anotherFunc(callback) {
	let str = "bye"
	setTimeout(() => {
		callback(str)
	}, 100)
}

var doc = "hello"

function callback(str) {
	doc = str
}

Test.assertEquals(doc, "hello", "Do not change the doc variable")

anotherFunc(callback)

setTimeout(()=> {
	Test.assertEquals(doc, "bye")
}, 1000)
