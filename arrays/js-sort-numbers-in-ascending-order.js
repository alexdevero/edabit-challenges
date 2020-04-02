function sortNumsAscending(arr) {
	return arr !== null ? arr.sort((x, y) => x > y ? 1 : -1) : []
}

sortNumsAscending([1, 2, 10, 50, 5]) // [1, 2, 5, 10, 50]
sortNumsAscending([80, 29, 4, -95, -24, 85]) // [-95, -24, 4, 29, 80, 85]
sortNumsAscending(null), []
sortNumsAscending([]) // []
sortNumsAscending([47, 51, -17, -16, 91, 47, -85, -8, -16, -27]) // [-85, -27, -17, -16, -16, -8, 47, 47, 51, 91]
sortNumsAscending([-51, -73, 65, 69, -76, 74, -14]) // [-76, -73, -51, -14, 65, 69, 74]
sortNumsAscending([45, 98, 35, 65, 97, 21, 33]) // [21, 33, 35, 45, 65, 97, 98]
sortNumsAscending([-23, -69, -54, -2, -32]) // [-69, -54, -32, -23, -2]
sortNumsAscending([-21, -9, -96]) // [-96, -21, -9]
sortNumsAscending([0]) // [0]
