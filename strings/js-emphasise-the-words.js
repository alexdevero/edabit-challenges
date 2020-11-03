function emphasise(str) {
	return str.toLowerCase()
		.replace(/\b./g, m => m.toUpperCase())
}

emphasise("hello world") // "Hello World"
emphasise("GOOD MORNING") // "Good Morning"
emphasise("99 red balloons!") // "99 Red Balloons!"
emphasise("1 2 3 4 5 6 7 8 9") // "1 2 3 4 5 6 7 8 9"
emphasise("") // ""
emphasise("joshua senoron") // "Joshua Senoron"
