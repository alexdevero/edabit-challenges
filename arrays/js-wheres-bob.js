function findBob(names) {
	return names.indexOf('Bob')
}

findBob(["Jimmy", "Layla", "Mandy"]) // -1
findBob(["Bob", "Nathan", "Hayden"]) // 0
findBob(["Paul", "Layla", "Bob"]) // 2
findBob(["Garry", "Maria", "Bethany", "Bob", "Pauline"]) // 3
