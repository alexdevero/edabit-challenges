function isPrefix(word, prefix) {
	return word.indexOf(prefix.split('-')[0]) === 0
}

function isSuffix(word, suffix) {
	return word.indexOf(suffix.split('-')[1]) > 0
}

isPrefix('automation', 'auto-') // true
isPrefix('superfluous', 'super-') // true
isPrefix('oration', 'mega-') // false
isPrefix('retrospect', 'sub-') // false
isSuffix('arachnophobia', '-phobia') // true
isSuffix('rhinoplasty', '-plasty') // true
isSuffix('movement', '-scope') // false
isSuffix('vocation', '-logy') // false
