function censorString(str, arr, char) {
	return str.split(' ').map(word => arr.includes(word) ? char.repeat(word.length) : word).join(' ')
}

censorString("The cow jumped over the moon.", ["cow", "over"], "*") // "The *** jumped **** the moon."
censorString("Why do my cats keep eating grass?", ["Why", "keep", "eating"], "!") // "!!! do my cats !!!! !!!!!! grass?"
censorString("How do I stop myself from using python!?", ["do", "stop", "using"], "-") // "How -- I ---- myself from ----- python!?"
censorString("If statements are pretty fun to use.", ["statements", "pretty", "to"], "~~") // "If ~~~~~~~~~~~~~~~~~~~~ are ~~~~~~~~~~~~ fun ~~~~ use."
censorString("I'm dyslexic, but that deos'tn matter!", ["that", "matter!"], "?") // "I'm dyslexic, but ???? deos'tn ???????"
censorString("I should be doing work but I am doing this instead.", ["should", "but", "this"], "*") // "I ****** be doing work *** I am doing **** instead."
