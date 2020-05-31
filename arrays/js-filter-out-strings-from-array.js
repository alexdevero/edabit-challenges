function filterArray(arr){
	return arr.filter(x => Number.isInteger(x))
}

filterArray([1, 2, 3, "a", "b", 4]) // [1, 2, 3, 4]
filterArray(["A", 1, "&amp", 0, -9, "JavaScript"]) // [1, 0, -9]
filterArray(["Nothing", "here"]) //[]
filterArray([1, 2, 3, 3.5 , "a", "b", 4 , 5.8 , 6]) // [1, 2, 3, 4 , 6]
