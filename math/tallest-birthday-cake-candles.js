function birthdayCakeCandles(candles) {
	return candles.filter(x => x >= Math.max(...candles)).length
}

birthdayCakeCandles([4,4,1,3]) // 2
birthdayCakeCandles([3,2,1,3]) // 2
birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]) // 4
birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]) // 5
