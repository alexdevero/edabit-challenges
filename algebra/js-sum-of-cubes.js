function sumOfCubes(nums) {
	return nums.length === 0 ? 0 : nums.map(num => Math.pow(num, 3)).reduce((accumulator, currentValue) => currentValue + accumulator)
}

sumOfCubes([1, 5, 9]) // 855
sumOfCubes([3, 4, 5]) // 216
sumOfCubes([1, 1, 1]) // 3
sumOfCubes([2]) // 8
sumOfCubes([5, 1, 2]) // 134
sumOfCubes([32]) // 32768
sumOfCubes([5, 9, 4, 4, 9]) // 1711
sumOfCubes([0, 1, 2]) // 9
sumOfCubes([]) // 0
