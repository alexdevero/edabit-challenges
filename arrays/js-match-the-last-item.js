function matchLastItem(arr) {
	return arr.pop() === arr.join('')
}

matchLastItem(['rsq', '6hi', 'g', 'rsq6hig']) // true
matchLastItem([ 0, 1, 2, 3, 4, 5, '12345' ]) // false
matchLastItem([ 'for', 'mi', 'da', 'bel', 'formidable' ]) // false
matchLastItem([8, 'thunder', true, '8thundertrue']) // true
matchLastItem([ 1, 1, 1, '11' ]) // false
matchLastItem(['tocto','G8G','xtohkgc','3V8','ctyghrs',100.88,'fyuo','Q','toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ']) // true
