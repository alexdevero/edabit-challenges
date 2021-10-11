function greetPeople(names) {
	return names.length === 0 ? '' : names.map(name => `Hello ${name}`).join(', ')
}

greetPeople(['Kyrill']) //  'Hello Kyrill'
greetPeople(['Kyrill', 'Mom', 'Dad', 'Zuzu']) // 'Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu'
greetPeople([]) // ''
