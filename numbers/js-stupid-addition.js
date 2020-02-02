function stupidAddition(a, b) {
	return (typeof(a) === 'string' && typeof(b) === 'string') ? parseInt(a) + parseInt(b) : (typeof(a) === 'number' && typeof(b) === 'number') ? a + '' + b : null
}

stupidAddition(1, 2) // "12", "Both parameters are integers, therefore they should be concatenated"
stupidAddition("1", "2") // 3, "Both parameters are strings, therefore they should be added"
stupidAddition(1, "2") // null, "The parameters are different data types, therefore None should be returned"
stupidAddition("1", 2) // null, "The parameters are different data types, therefore None should be returned"
