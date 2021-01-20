function frontThree(str) {
	return str.substr(0, 3).repeat(3)
}

frontThree('Python') // 'PytPytPyt', 'Simple string#1'
frontThree('Chocolate') // 'ChoChoCho', 'Simple strin#2'
frontThree('duh') // 'duhduhduh', '3 characters string'
frontThree('Sportsmanship') // 'SpoSpoSpo', 'Generic string'
frontThree('ab') // 'ababab', '2 characters string'
frontThree('a') // 'aaa', '1 characters string'
frontThree('') // '', 'Empty string'
