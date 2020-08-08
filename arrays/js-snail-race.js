const mauriceWins= (mS, sS) => mS[1] > sS[0] && mS[2] > sS[1]

mauriceWins([3, 5, 10], [4, 7, 11]) // true
mauriceWins([6, 8, 9], [7, 12, 14]) // false
mauriceWins([1, 8, 20], [2, 9, 100]) // true
mauriceWins([1, 2, 3], [2, 3, 4]) // false
mauriceWins([2, 4, 10], [3, 9, 11]) // true
mauriceWins([3, 8, 13], [5, 11, 15]) // true
