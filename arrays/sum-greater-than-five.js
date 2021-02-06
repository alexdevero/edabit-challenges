function sumFive(arr) {
	return arr.reduce((acc, cur) => acc + (cur > 5 ? cur : 0), 0)
}

sumFive([1, 5, 20, 30, 4, 9, 18]) // 77
sumFive([1, 2, 3, 4]) // 0
sumFive([10, 12, 28, 47, 55, 100]) // 252
sumFive([25, 44, 6, 4, 3, 36]) // 111
sumFive([5, 2, 150, 187, 254, 0]) // 591
sumFive([1000, 2500, 2, 4, 500, 400]) // 4400
sumFive([125.5, 147.2, 548.6, 2.3, 1.5]) // 821.3
