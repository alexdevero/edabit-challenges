def repetition(txt, n):
	if n == 1:
		return txt
	else:
	 return txt + repetition(txt, n - 1)

repetition("soccer", 2) # "soccersoccer"
repetition("ab", 3) # "ababab"
repetition("bonita", 1) # "bonita"
repetition("ciao", 4) # "ciaociaociaociao"
repetition("amigo", 5) # "amigoamigoamigoamigoamigo"
repetition("torque", 2) # "torquetorque"