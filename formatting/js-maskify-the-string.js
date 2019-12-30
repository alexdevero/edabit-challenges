function maskify(str) {
	return str.length <= 4 ? str : str.split('').map((c, i) => i < str.length - 4 ? '#' : c).join('')
}

maskify("4556364607935616") // "############5616"
maskify("64607935616") // "#######5616"
maskify("1") // "1"
maskify("") // ""
maskify("tBy>L/cMe+?<j:6n;C~H") // "################;C~H"
maskify("12") // "12"
maskify("8Ikhlf6yoxPOwi5cB014eWbRumj7vJ") // "##########################j7vJ"
maskify("123") // "123"
maskify(")E$aCU=e\"_") // "######=e\"_"
maskify("2673951408") // "######1408"
maskify("1234") // "1234"
