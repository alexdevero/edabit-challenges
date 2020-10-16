function modifyLast(str, n) {
	return str + str[str.length - 1].repeat(n - 1)
}

modifyLast("Hello", 3) // "Hellooo"
modifyLast("hey", 6) // "heyyyyyy"
modifyLast("plsssss!1!", 5) // "plsssss!1!!!!!"
modifyLast("gr", 2) // "grr"
modifyLast("excuse me what?", 5) // "excuse me what?????"
modifyLast("123", 5) // "1233333"
modifyLast("a", 3) // "aaa"
modifyLast("STOP", 3) // "STOPPP"
