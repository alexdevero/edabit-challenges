function correctSentences(str){
  return str.trim()
		.replace(/\s+/g, ' ')
		.replace(/\s([A-Z])/g,'. $1')
		.replace(/^[a-z]/,x => x.toUpperCase()) + '.'
}

correctSentences("  bob loves  code  Matt  loves  code  ") // "Bob loves code. Matt loves code.")
correctSentences("  he is an engineer He sleeps a lot") // "He is an engineer. He sleeps a lot.")
correctSentences(" his english is not good Help him     Thank you") // "His english is not good. Help him. Thank you.")
correctSentences(" he is ready to join   airforce  Waiting for the  final approval") // "He is ready to join airforce. Waiting for the final approval.")
