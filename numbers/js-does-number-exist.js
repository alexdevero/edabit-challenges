function validStrNumber(n) {
  // or !isNaN(n)
	return /^(\d+)?\.?\d+$/.test(n)
}

validStrNumber("3.2") // true
validStrNumber("324") // true
validStrNumber("54..4") // false
validStrNumber("number") // false
validStrNumber(".5") // true
validStrNumber("03") // true
validStrNumber("3.e") // false
validStrNumber("1234321") // true
validStrNumber(".42.3") // false
validStrNumber("0000000") // true
validStrNumber("000.000") // true
