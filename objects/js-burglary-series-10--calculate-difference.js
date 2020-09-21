function calculateDifference(obj, limit) {
	return Object.values(obj).reduce((acc, curVal) => acc + curVal, 0) - limit
}

const random = Test.randomNumber()
const obj = { skate: 20000, painting: 30000, shoes: 1 }
const obj2 = { "baseball bat": 31}
const obj3 = {stereo: 110, pillow: random}

Test.assertEquals(calculateDifference(obj, 50000),1)
Test.assertEquals(calculateDifference(obj2, 10),21)
Test.assertEquals(calculateDifference(obj3, 100), obj3.stereo + obj3.pillow - 100)
