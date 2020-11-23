function repetition(txt, n) {
	return n > 1 ? repetition(txt, n - 1) + txt : txt
}

repetition("soccer", 2) // "soccersoccer"
repetition("ab", 3) // "ababab"
repetition("bonita", 1) // "bonita"
repetition("ciao", 4) // "ciaociaociaociao"
repetition("amigo", 5) // "amigoamigoamigoamigoamigo"
repetition("torque", 2) // "torquetorque"
