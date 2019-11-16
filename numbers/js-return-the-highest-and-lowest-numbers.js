function highLow(str) {
	return `${Math.max(...str.split(' '))} ${Math.min(...str.split(' '))}`
}

highLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6') // '542 -214'
highLow('1 -1') // '1 -1'
highLow('1 1') // '1 1'
highLow('-1 -1') // '-1 -1'
highLow('1 -1 0') // '1 -1'
highLow('1 1 0') // '1 0'
highLow('-1 -1 0') // '0 -1'
highLow('42') // '42 42'
