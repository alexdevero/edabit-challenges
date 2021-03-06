function toNumberArray(arr) {
	return arr.map(el => +el)
}

toNumberArray(["9.4", "4.2"]) // [9.4, 4.2]
toNumberArray(["1.4", "4.4", "5.7", "4.3", "9.8", "5.3", "8.7", "8.6", "9.8"]) // [1.4, 4.4, 5.7, 4.3, 9.8, 5.3, 8.7, 8.6, 9.8]
toNumberArray(["9.5", "8.8"]) // [9.5, 8.8]
toNumberArray(["3.4", "8.6"]) // [3.4, 8.6]
toNumberArray(["5.9", "1.5", "7.8", "4.9", "8.5", "8.4"]) // [5.9, 1.5, 7.8, 4.9, 8.5, 8.4]
toNumberArray(["8.7"]) // [8.7]
toNumberArray(["7.0", "4.7", "8.4"]) // [7, 4.7, 8.4]
toNumberArray(["7.2", "9.7", "4.0", "9.7", "6.5"]) // [7.2, 9.7, 4, 9.7, 6.5]
toNumberArray(["9.3", "3.9", "7.9", "4.7"]) // [9.3, 3.9, 7.9, 4.7]
toNumberArray(["4.1", "2.9", "1.7"]) // [4.1, 2.9, 1.7]
toNumberArray(["9.0", "3.8", "8.8"]) // [9, 3.8, 8.8]
toNumberArray(["6.0", "6.9", "3.7", "6.9", "8.3", "7.8", "1.5", "2.6"]) // [6, 6.9, 3.7, 6.9, 8.3, 7.8, 1.5, 2.6]
toNumberArray(["9.2", "5.8", "1.3", "3.4", "3.0", "8.5", "3.4", "6.8", "9.9"]) // [9.2, 5.8, 1.3, 3.4, 3, 8.5, 3.4, 6.8, 9.9]
toNumberArray(["8.3", "9.7", "8.0"]) // [8.3, 9.7, 8]
toNumberArray(["2.1", "1.7", "7.0", "4.7", "9.3", "6.8", "9.1", "9.1"]) // [2.1, 1.7, 7, 4.7, 9.3, 6.8, 9.1, 9.1]
toNumberArray(["9.8", "4.6", "7.3", "7.4", "1.9", "6.3", "8.7"]) // [9.8, 4.6, 7.3, 7.4, 1.9, 6.3, 8.7]
toNumberArray(["2.4"]) // [2.4]
