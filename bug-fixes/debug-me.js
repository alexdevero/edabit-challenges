// Before:
function-debugMe():{
	return true?"True":false;
}

// After:
function debugMe() {
	return true
}

debugMe() // true
