function normalize(str) {
	return str[1] === str[1].toUpperCase() ? str.charAt(0) + str.toLowerCase().slice(1) + '!' : str
}

normalize("CAPS LOCK DAY IS OVER") // "Caps lock day is over!", "\n convert the sentence to lowercase and add an exclamation mark(!)\n The first character should be an uppercase C.\n")
normalize("Today is not caps lock day.") // "Today is not caps lock day.", "\n This sentence is correct, no need to modify it.\n")
normalize("WE WANT THIS COVID THING TO BE OVER") // "We want this covid thing to be over!")
normalize("Let us stay calm, no need to panic.") // "Let us stay calm, no need to panic.")
normalize("DO NOT SHOUT") // "Do not shout!")
normalize("Civilized conversation.") // "Civilized conversation.")
