function num_of_digits(num) {
	return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num)) + 1)
}

num_of_digits(13124) // 5
num_of_digits(0) // 1
num_of_digits(-12381428) // 8
num_of_digits(12) // 2
num_of_digits(42) // 2
num_of_digits(1000) // 4
num_of_digits(136) // 3
num_of_digits(1000000000) // 10
num_of_digits(2147483647) // 10
num_of_digits(-2147483647) // 10
