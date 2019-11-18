function doubleChar(str) {
	return str.split('').map(char => `${char}${char}`).join('')
}

doubleChar('String') // 'SSttrriinngg'
doubleChar('Hello World!') // 'HHeelllloo  WWoorrlldd!!'
doubleChar('1234!_ ') // '11223344!!__  '
doubleChar('##^&%%*&%%$#@@!') // '####^^&&%%%%**&&%%%%$$##@@@@!!'
doubleChar('scandal') // 'ssccaannddaall'
doubleChar('economics') // 'eeccoonnoommiiccss'
doubleChar(' ') // '  '
doubleChar('_______') // '______________'
doubleChar('equip gallon read') // 'eeqquuiipp  ggaalllloonn  rreeaadd'
doubleChar('baby increase') // 'bbaabbyy  iinnccrreeaassee'
