function removeEntry(obj, itemName) {
	const newObj = { ...obj }
 	delete newObj[itemName]
	return newObj
}

const random = Math.random()
const obj = {piano: random, tv: 100}
const obj2 = {piano: random, tv: 100, skate: 50}
const res = Object.is(removeEntry(obj, "tv"), obj)

Test.assertEquals(res, false)
Test.assertSimilar(removeEntry(obj, "tv"), {piano: random})
Test.assertSimilar(removeEntry(obj2, "tv"), {piano: random, skate:50})
