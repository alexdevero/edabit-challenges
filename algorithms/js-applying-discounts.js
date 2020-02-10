function getDiscounts(nums, d) {
	return nums.map(num => (parseInt(d.split('%')[0]) / 100) * num)
}

getDiscounts([2, 4, 6, 11], "50%") // [1, 2, 3, 5.5]
getDiscounts([10, 20, 40, 80], "75%") // [7.5, 15, 30, 60]
getDiscounts([100], "45%") // [45]
