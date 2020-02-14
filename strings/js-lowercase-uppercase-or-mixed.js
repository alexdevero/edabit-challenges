function getCase(str) {
	return str.toUpperCase() === str ? 'upper' : str.toLowerCase() === str ? 'lower' : 'mixed'
}

getCase("whisper...") // "lower"
getCase("SHOUT!") // "upper"
getCase("Indoor Voice") // "mixed"
getCase("324324Indoor66453546Voice434") // "mixed"
getCase("!!!!SHOUT!!!!") // "upper"
getCase("......313whisper2131232...") // "lower"
