function checkTitle(title) {
	return title
    .split(' ')
    .map(el => el[0] === el[0].toUpperCase())
    .every(el => el)
}

checkTitle("A Mind Boggling Achievement") // true
checkTitle("A Simple Java Script Program!") // true
checkTitle("Water is transparent") // false
