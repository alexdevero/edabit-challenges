function isTrue(relation) {
	return eval(relation.replace('=', '=='))
}

isTrue("8<7") // false
isTrue("15>4") // true
isTrue("6>6") // false
isTrue("10<10") // false
isTrue("10<9") // false
isTrue("5>6") // false
isTrue("2=2") // true
isTrue("5=13") // false
isTrue("15=137") // false
isTrue("101=101") // true
