function divingMinigame(arr) {
	return arr.reduce((a, c) => a > 0 ? (c >= 0 ? Math.min(a + 4, 10) : a - 2) : 0, 10) > 0
}

divingMinigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // true
divingMinigame([-5, -15, -4, 0, 5]) // true
divingMinigame([0, -4, 0, -4, -5, -2]) // true
divingMinigame([-4, -3, -4, -3, 5, 2, -5, -20, -42, -4, 5, 3, 5]) // true

divingMinigame([-3, -6, -2, -6, -2]) // false
divingMinigame([-4, -5, -2, -7, 2, -1000, -2000, -1]) // false
divingMinigame([1, 2, 1, 2, 1, 2, 1, 2, 1, -3, -4, -5, -3, -4]) // false
divingMinigame([-5, -5, -5, -5, -5, 2, 2, 2, 2, 2, 2, 2, 2]) // false
