function addUp(num) {
	return Array.from(new Array(num), (num, index) => index + 1).reduce((value, increment) => value + increment)
}

addUp(4) // 10
addUp(13) // 91
addUp(600) // 180300
addUp(392) // 77028
addUp(53) // 1431
addUp(897) // 402753
addUp(23) // 276
addUp(1000) // 500500
addUp(738) // 272691
addUp(100) // 5050
addUp(925) // 428275
addUp(1) // 1
addUp(999) // 499500
addUp(175) // 15400
addUp(111) // 6216
