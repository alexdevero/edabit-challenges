function filterUnique(arr) {
	return arr.filter(item => new Set(item).size === item.length)
}

filterUnique(['abb', 'abc', 'abcdb', 'aea', 'bbb']) // ['abc'])
filterUnique(['88', '999', '989', '9988', '9898']) // [])
filterUnique(['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC']) // ['ABCDE', 'BED', 'BAC'])
filterUnique(['qrrs', 'srrq', 'qqrs', 'qq', 'ss', 'rs']) // ['rs'])
filterUnique(['abab', 'ba', 'ab', 'cc']) // ['ba', 'ab'])
