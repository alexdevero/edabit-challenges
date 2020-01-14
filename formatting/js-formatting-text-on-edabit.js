function mdFormat(word, style) {
	return (style === 'b' ? '**' : style === 'i' ? '_' : style === 's' ? '~~' : '\`') + word + (style === 'b' ? '**' : style === 'i' ? '_' : style === 's' ? '~~' : '\`')
}

mdFormat("Bold", "b") // "**Bold**"
mdFormat("Italics", "i") // "_Italics_"
mdFormat("Code", "c") // "`Code`"
mdFormat("Ruby", "s") // "~~Ruby~~"
mdFormat("JavaScript", "b") // "**JavaScript**"
mdFormat("Python", "i") // "_Python_"
mdFormat("C++", "c") // "`C++`"
mdFormat("Strikethrough", "s") // "~~Strikethrough~~"
