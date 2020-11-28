function shiftToLeft(x, y) {
	return x * (2 ** y)
}

const opCheck = f => !`${f}`.match(RegExp('<<', 'gm'))
Test.assertNotEquals(opCheck(shiftToLeft), false,
    "The use of left shift operator (<<) is prohibited!")

let [numVector, resVector] = [
  [[5, 2], [10, 3], [-32, 2], [-6, 5], [12, 4], [46, 6], [57, 0], [79, 1]],
  [20, 80, -128, -192, 192, 2944, 57, 158]
]
for (let i in numVector) Test.assertEquals(shiftToLeft(...numVector[i]), resVector[i])
