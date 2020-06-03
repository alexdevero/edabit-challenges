function redundant(str) {
	return function() {
		return str
	}
}

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

f1() // "apple"
f2() // "pear"
f3() // ""
