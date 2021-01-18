function reversePsychology(s) {
	return `Do not ${s ? s : 'do anything'}.`
}

reversePsychology("wash the dishes") // "Do not wash the dishes."
reversePsychology("eat your lunch") // "Do not eat your lunch."
reversePsychology("go to school") // "Do not go to school."
reversePsychology(), "Do not do anything."
reversePsychology("read") // "Do not read."
reversePsychology("learn Python") // "Do not learn Python."
reversePsychology("exercise") // "Do not exercise."
reversePsychology("buy PC parts") // "Do not buy PC parts."
reversePsychology("do your homework") // "Do not do your homework."
reversePsychology("drink water") // "Do not drink water."
reversePsychology("look around") // "Do not look around."
