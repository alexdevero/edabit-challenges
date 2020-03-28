function convertBinary(str) {
	return str.replace(/[a-m]/ig, '0').replace(/[n-z]/ig, '1')
}

convertBinary("house") // "01110"
convertBinary("excLAIM") // "0100000"
convertBinary("moon") // "0111"
convertBinary("MOOn") // "0111"
convertBinary("topsyTurvy") // "1111111111"
