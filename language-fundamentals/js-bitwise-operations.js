function bitwiseAND(n1, n2) {
	return n1 & n2
}

function bitwiseOR(n1, n2) {
	return n1 | n2
}

function bitwiseXOR(n1, n2) {
	return n1 ^ n2
}

bitwiseAND(7, 12) // 4
bitwiseOR(7, 12) // 15
bitwiseXOR(7, 12) // 11

bitwiseAND(32, 17) // 0
bitwiseOR(32, 17) // 49
bitwiseXOR(32, 17) // 49

bitwiseAND(13, 19) // 1
bitwiseOR(13, 19) // 31
bitwiseXOR(13, 19) // 30
