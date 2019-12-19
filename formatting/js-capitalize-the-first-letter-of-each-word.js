function makeTitle(str) {
	return str.split(' ').map(word => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`).join(' ')
}

makeTitle("I am a title") // "I Am A Title"
makeTitle("I AM A TITLE") // "I AM A TITLE"
makeTitle("i aM a tITLE") // "I AM A TITLE"
makeTitle("the first letter of every word is capitalized") // "The First Letter Of Every Word Is Capitalized"
makeTitle("I Like Pizza") // "I Like Pizza"
makeTitle("Don't count your ChiCKens BeFore They HatCh") // "Don't Count Your ChiCKens BeFore They HatCh"
makeTitle("All generalizations are false, including this one") // "All Generalizations Are False, Including This One"
makeTitle("Me and my wife lived happily for twenty years and then we met.") // "Me And My Wife Lived Happily For Twenty Years And Then We Met."
makeTitle("There are no stupid questions, just stupid people.") // "There Are No Stupid Questions, Just Stupid People."
makeTitle("1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d") // "1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d"
makeTitle("PIZZA PIZZA PIZZA") // "PIZZA PIZZA PIZZA"
