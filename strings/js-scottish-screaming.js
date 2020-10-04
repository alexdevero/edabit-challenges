function toScottishScreaming(str) {
	return str.replace(/[aiou]/gi, 'E').toUpperCase()
}

toScottishScreaming("lorem ipsum") // "LEREM EPSEM"
toScottishScreaming("Leeroy jenkins!") // "LEEREY JENKENS!"
toScottishScreaming("A, wonderful, day, don't, you, think?") // "E, WENDERFEL, DEY, DEN'T, YEE, THENK?"
toScottishScreaming("Hello world") // "HELLE WERLD"
toScottishScreaming("start queueing you oafs") // "STERT QEEEEENG YEE EEFS"
