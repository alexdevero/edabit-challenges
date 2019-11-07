function leftDigit(num) {
	return parseInt(num.substring(num.search(/\d/), num.search(/\d/) + 1))
}

leftDigit('TrAdE2W1n95!') // 2
leftDigit('V3r1ta$') // 3
leftDigit('U//DertHe1nflu3nC3') // 1
leftDigit('J@v@5cR1PT') // 5
leftDigit('0nSlaUgh7*d3atH') // 0
leftDigit('F8andD3st1nY') // 8
