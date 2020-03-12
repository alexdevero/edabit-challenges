function isRepdigit(num) {
	return num < 0 ? false : num === true ? true : num.toString() === num.toString()[0].repeat(num.toString().length)
}

isRepdigit(6) // true
isRepdigit(66) // true
isRepdigit(666) // true
isRepdigit(6666) // true
isRepdigit(1001) // false
isRepdigit(-11) // false, "The number must be >= 0"
