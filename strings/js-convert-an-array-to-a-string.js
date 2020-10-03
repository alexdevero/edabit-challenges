function arrayToString(arr) {
	return arr.join('')
}

arrayToString([1,2,3,4,5,6]) // "123456"
arrayToString(['a','b','c','d','e','f']) // "abcdef"
arrayToString([1,2,3,'a','s','d']) // "123asd"
arrayToString(['a','s','d','f','e','r',1,2,3,4,5,0]) // "asdfer123450"
arrayToString(['A','D','F','G','H','Y','TR','NNHJK']) // "ADFGHYTRNNHJK"
