function numbersSum(arr) {
	return arr.reduce((acc, cur) => acc + (typeof cur === 'number' ? cur : 0), 0)
}

numbersSum([1, 2, "13", "4", "645"]) // 3
numbersSum([true, false, "123", "75"]) // 0
numbersSum([1, 2, 3, 4, 5, true]) // 15
numbersSum(["abcd", 1234, false, true, 564, "hii"]) // 1798
numbersSum(["abcd", "abc45", "assssd", true]) // 0
numbersSum([]) // 0
numbersSum(["cghyki", "cd", 12114, 786, true, "me", "bey"]) // 12900
