function wumbo(words) {
	return words.split('').map(char => char === 'M' ? 'W' : char).join('')
}

wumbo("WHAT DO YOU MEAN WE'RE OUT OF MONEY") // "WHAT DO YOU WEAN WE'RE OUT OF WONEY", "You do not Wumbo.")
wumbo("ABCDEFGHIJKLMNOPQRSTUVWXYZ") // "ABCDEFGHIJKLWNOPQRSTUVWXYZ", "You do not Wumbo.")
wumbo("1 WUMBO 2 WUMBO 3 WUMBO 4") // "1 WUWBO 2 WUWBO 3 WUWBO 4", "You do not Wumbo.")
