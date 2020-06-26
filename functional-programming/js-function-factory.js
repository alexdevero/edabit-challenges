function makePlusFunction(baseNum) {
	return function(nuwNum) {
		return baseNum + nuwNum
	}
}

const plusTwo = makePlusFunction(2)
const plusFive = makePlusFunction(5)
const plusSeven = makePlusFunction(plusTwo(plusFive(0)))
const plusTen = makePlusFunction(10)

plusTwo(0) // 2
plusTwo(18) // 20
plusTwo(-1) // 1
plusFive(0) // 5
plusFive(12) // 17
plusFive(-5) // 0
plusSeven(0) // 7
plusSeven(41) // 48
plusSeven(-117) // -110
plusTen(0) // 10
plusTen(1) // 11
plusTen(-1) // 9
plusTwo(plusFive(plusSeven(plusTen(1)))) // 25

makePlusFunction(8)(8) // 16
makePlusFunction(1)(100) // 101
makePlusFunction(-100)(0) // -100
makePlusFunction(0)(0) // 0
