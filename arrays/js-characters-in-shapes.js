function countCharacters(arr) {
	return arr.join('').length
}

countCharacters(['###', '###', '###']) // 9)
countCharacters(['22222222', '22222222',]) // 16)
countCharacters(['------------------' ]) // 18)
countCharacters([]) // 0)
countCharacters(['', '']) // 0)
