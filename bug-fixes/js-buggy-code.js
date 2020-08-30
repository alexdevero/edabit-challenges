function has_bugs(buggyCode) {
	return buggyCode ? 'sad days' : 'it\'s a good day'
}

has_bugs(true) // "sad days"
has_bugs(false) // "it's a good day"
