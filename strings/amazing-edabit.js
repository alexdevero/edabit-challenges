function amazingEdabit(str) {
	return str.indexOf('edabit') === -1 ? str.replace(/amazing/g, 'not amazing') : str
}

amazingEdabit("edabit is amazing.") // "edabit is amazing."
amazingEdabit("Mubashir is amazing.") // "Mubashir is not amazing."
amazingEdabit("Trump is amazing.") // "Trump is not amazing."
amazingEdabit("Infinity is amazing.") // "Infinity is not amazing."
amazingEdabit("Mubashir and edabit are amazing.") // "Mubashir and edabit are amazing."
amazingEdabit("Matt is amazing.") // "Matt is not amazing."
amazingEdabit("Helen is amazing.") // "Helen is not amazing."
amazingEdabit("Python and edabit are amazing.") // "Python and edabit are amazing."
amazingEdabit("C++ is amazing.") // "C++ is not amazing."
amazingEdabit("javascript is amazing.") // "javascript is not amazing."
amazingEdabit("java is amazing.") // "java is not amazing."
amazingEdabit("ruby is amazing.") // "ruby is not amazing."
amazingEdabit("SQL is amazing.") // "SQL is not amazing."
amazingEdabit("CSS is amazing.") // "CSS is not amazing."
amazingEdabit("Pakistan is amazing. edabit") // "Pakistan is amazing. edabit"
amazingEdabit("You and edabit are amazing.") // "You and edabit are amazing."
amazingEdabit("Matt and edabit are amazing.") // "Matt and edabit are amazing."
amazingEdabit("Helen and edabit are amazing.") // "Helen and edabit are amazing."
amazingEdabit("Everyone is amazing.") // "Everyone is not amazing."
amazingEdabit("Swift and edabit are amazing.") // "Swift and edabit are amazing."
