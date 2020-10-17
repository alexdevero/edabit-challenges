function zipIt(women, men) {
	if (women.length !== men.length) return "sizes don't match"

	return women.map((woman, i) => [woman, men[i]])
}

zipIt(["Elise", "Mary"], ["John", "Rick"]) // [["Elise", "John"], ["Mary", "Rick"]])
zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]) // "sizes don't match")
zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]) // [["Ana", "Bob"], ["Amy", "Josh"], ["Lisa", "Tim"]])
zipIt(["Ana", "Amy", "Lisa", "Katty"], ["Bob", "Josh", "Tim"]) // "sizes don't match")
zipIt(["Katty", "Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim", "Aaron"]) // [["Katty", "Bob"], ["Ana", "Josh"], ["Amy", "Tim"], ["Lisa", "Aaron"]])
