function hackerSpeak(str) {
	return str.replace(/a/ig, '4').replace(/e/ig, '3').replace(/i/ig, '1').replace(/o/ig, '0').replace(/s/ig, '5')
}

hackerSpeak("javascript is cool") // "j4v45cr1pt 15 c00l"
hackerSpeak("become a coder") // "b3c0m3 4 c0d3r"
hackerSpeak("hi there") // "h1 th3r3"
hackerSpeak("programming is fun") // "pr0gr4mm1ng 15 fun"
hackerSpeak("keep on practicing") // "k33p 0n pr4ct1c1ng"
