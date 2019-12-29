function indexOfCaps(str) {
	return str.split('').map((letter, index) => /[A-Z]/g.test(letter) ? index : null).filter(x => x !== null)
}

indexOfCaps("eDaBiT") // [1, 3, 5]
indexOfCaps("eQuINoX") // [1, 3, 4, 6]
indexOfCaps("determine") // []
indexOfCaps("STRIKE") // [0, 1, 2, 3, 4, 5]
indexOfCaps("sUn") // [1]
indexOfCaps("SpiDer") // [0, 3]
indexOfCaps("accOmpAnY") // [3, 6, 8]
indexOfCaps("@xCE#8S#i*$en") // [2, 3, 6]
indexOfCaps("1854036297") // []
indexOfCaps("Fo?.arg~{86tUx=|OqZ!") // [0, 12, 16, 18]
