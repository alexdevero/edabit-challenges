function mirror(arr) {
	return arr.concat(arr.slice(0, arr.length - 1).reverse())
}

mirror([1,2,3,4,5]) // [1,2,3,4,5,4,3,2,1]
mirror([0,2,4,6]) // [0,2,4,6,4,2,0]
mirror([1,2,2,3,3,4]) // [1,2,2,3,3,4,3,3,2,2,1]
