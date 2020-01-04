function identicalFilter(arr) {
	return arr.map(item => item.length === 1 ? item : item.split('').every(char => char === item[0]) ? item : null).filter(x => x !== null ? 1 : 0)
}

identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']) // ['aaaaaa', 'd', 'eeee'])
identicalFilter(['88', '999', '22', '545', '133']) // ['88', '999', '22'])
identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo']) // [])
identicalFilter(['aa', 'bb', 'cc', 'dd', 'ee']) // ['aa', 'bb', 'cc', 'dd', 'ee'])
identicalFilter(['aba', 'bcb', 'abb', 'bcc', 'eee']) // ['eee'])
identicalFilter(['1', '2', '3']) // ['1', '2', '3'])
