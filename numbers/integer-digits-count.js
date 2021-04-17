function count(n) {
	return n === 0 ? 1 : Math.floor(Math.log10(Math.abs(n)) + 1)
}

let [numVector, resVector] = [
  [0, 318, -92563, 4666, -314890, 654321, 638476, 12345, 1289396, -1232323, 12839393, -231273683],
  [1, 3, 5, 4, 6, 6, 6, 5, 7, 7, 8, 9]
]
for (let i in numVector) Test.assertEquals(count(numVector[i]), resVector[i])
