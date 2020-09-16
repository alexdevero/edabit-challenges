function makeCopy(obj) {
	return {...obj}
}

const obj = {piano: 100}
const obj2 = {stereo: 200}
const obj3 = {tv: Math.random()}

Test.assertNotEquals(makeCopy(obj), obj, "Return a copy of the obj, not the obj itself")
Test.assertSimilar(makeCopy(obj), obj)
Test.assertNotEquals(makeCopy(obj2), obj2, "Return a copy of the obj, not the obj itself")
Test.assertSimilar(makeCopy(obj2), obj2)
Test.assertNotEquals(makeCopy(obj3), obj3)
Test.assertSimilar(makeCopy(obj3), obj3)
