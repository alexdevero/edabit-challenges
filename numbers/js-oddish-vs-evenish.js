function oddishOrEvenish(num) {
	return num.toString().split('').map(item => parseInt(item)).reduce((acc, curval) => acc + curval, 0) % 2 === 0 ? 'Evenish' : 'Oddish'
}

oddishOrEvenish(43) // "Oddish"
oddishOrEvenish(373) // "Oddish"
oddishOrEvenish(55551) // "Oddish"
oddishOrEvenish(694) // "Oddish"
oddishOrEvenish(4433) // "Evenish"
oddishOrEvenish(11) // "Evenish"
oddishOrEvenish(211112) // "Evenish"
