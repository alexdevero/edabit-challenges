function hashPlusCount(str) {
	return [str.split('').filter(x => x === '#').length, str.split('').filter(x => x === '+').length]
}

hashPlusCount("####") // [4, 0]
hashPlusCount("#") // [1, 0]
hashPlusCount("+++++++") // [0, 7]
hashPlusCount("++") // [0, 2]
hashPlusCount("#+#+") // [2, 2]
hashPlusCount("###+") // [3, 1]
hashPlusCount("##+++#") // [3, 3]
hashPlusCount("#+++#+#++#") // [4, 6]
hashPlusCount("") // [0, 0]
