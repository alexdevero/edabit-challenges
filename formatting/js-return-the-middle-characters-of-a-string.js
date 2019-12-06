function getMiddle(str) {
	return str.length === 1 ? str : (str.length % 2 > 0 ? str.substring(str.length / 2, str.length / 2 + 1) : str.substring(str.length / 2 - 1, str.length / 2 + 1))
}

getMiddle('test') // 'es'
getMiddle('testing') // 't'
getMiddle('middle') // 'dd'
getMiddle('A') // 'A'
getMiddle('inhabitant') // 'bi'
getMiddle('brown') // 'o'
getMiddle('pawn') // 'aw'
getMiddle('cabinet') // 'i'
getMiddle('fresh') // 'e'
getMiddle('shorts') // 'or'
