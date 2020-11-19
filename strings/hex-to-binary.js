function toBinary(num) {
	return num.toString(2)
}

Test.assertEquals(toBinary(0xFF), "11111111")
Test.assertEquals(toBinary(0xAA), "10101010")
Test.assertEquals(toBinary(0xFA), "11111010")
