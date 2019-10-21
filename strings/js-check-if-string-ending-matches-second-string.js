function checkEnding(str1, str2) {
	return str1.substring(str1.length - str2.length) === str2
}

checkEnding('abc', 'bc') // true
checkEnding('abc', 'd') // false
checkEnding('samurai', 'zi') // false
checkEnding('feminine', 'nine') // true
checkEnding('convention', 'tio') // false
checkEnding('cooperative', 'ooper') // false
checkEnding('extraterrestrial', 'xtraterrestrial') // true
checkEnding('access', 'ss') // true
checkEnding('motorist', 'is') // false
checkEnding('landowner', 'landowner') // true
