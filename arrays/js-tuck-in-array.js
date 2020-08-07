function tuckIn(arr1, arr2) {
	return [arr1[0], ...arr2 ,arr1[1]]
}

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
tuckIn([15, 150], [45, 75, 35]) // [15, 45, 75, 35, 150])
tuckIn(["bottom", "topping"], ["tomatosauce", "vegetables", "cheese"]) // ["bottom", "tomatosauce", "vegetables", "cheese", "topping"])
tuckIn([[1, 2], [5, 6]], [[3, 4]]) // [[1, 2], [3, 4], [5, 6]])
tuckIn([true, false], [false, true, null, undefined]) // [true, false, true, null, undefined, false])
