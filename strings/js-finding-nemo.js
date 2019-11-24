function findNemo(sentence) {
	return sentence.split(' ').indexOf('Nemo') > -1 ? `I found Nemo at ${sentence.split(' ').indexOf('Nemo') + 1}!` : 'I can\'t find Nemo :('
}

findNemo("I am Ne mo Nemo !") // "I found Nemo at 5!"
findNemo("N e m o is NEMO NeMo Nemo !") // "I found Nemo at 8!"
findNemo("I am Nemo's dad Nemo senior .") // "I found Nemo at 5!"
findNemo("Oh, hello !") // "I can't find Nemo :("
findNemo("Is it Nemos, Nemona, Nemoor or Garfield?") // "I can't find Nemo :("
findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!") // "I found Nemo at 1!"
