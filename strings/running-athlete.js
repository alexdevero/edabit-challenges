function runningAthlete(act, txt) {
	return act.map((part, i) => part === 'jump' ? txt[i] === '|' ? '|' : 'x' : txt[i] === '_' ? '_' : '/')
		.join('')
}

runningAthlete(["run","jump","run","jump","run"],"_|_|_") // "_|_|_"
runningAthlete(["run","jump","run","run","run"],"_|_|_") // "_|_/_"
runningAthlete(["run","run","run","run","run"],"_|_|_") // "_/_/_"
runningAthlete(["jump","jump","jump","jump","jump"],"_|_|_") // "x|x|x"
runningAthlete(["jump","run","jump","run","jump"],"_|_|_") // "x/x/x"
runningAthlete(["run","run","run","run","run","run","run","run","run","run"],"||||||||||") // "//////////"
runningAthlete(["jump","jump","jump","jump","jump","jump","jump","jump","jump","jump"],"__________") // "xxxxxxxxxx"
