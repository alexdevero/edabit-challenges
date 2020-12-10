function countUppercase(str) {
	return str.join('')
		.replace(/[^A-Z]/g, '')
		.length
}

countUppercase(["SOLO", "hello", "Tea", "wHat"]) // 6
countUppercase(["little", "lower", "down"]) // 0
countUppercase(["EDAbit", "Educate", "Coding"]) // 5
