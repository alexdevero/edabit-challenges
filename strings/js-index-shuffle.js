function indexShuffle(str) {
	return [...str.split('').filter((x, ia) => ia % 2 === 0), ...str.split('').filter((y, ib) => ib % 2 !== 0)].join('')
}

indexShuffle("abcdef") // "acebdf"
indexShuffle("abababab") // "aaaabbbb"
indexShuffle("it was a beautiful day") // "i a  euiu atwsabatfldy"
indexShuffle("maybe") // "myeab"
indexShuffle("holiday") // "hldyoia"
