function formatBigInt(bigNumber, decimals) {
	const strNum = bigNumber.toString()
	return `${strNum.slice(0, strNum.length - decimals)}.${strNum.slice(-decimals)}`
}

formatBigInt(1938908490185852058934n, 18) // "1938.908490185852058934"
formatBigInt(987654321987654321n, 6) // "987654321987.654321"
formatBigInt(13902183984901849081284n, 12) // "13902183984.901849081284"
formatBigInt(923948293849023849082094892384024n, 18) // "923948293849023.849082094892384024"