function countUnique(s1, s2) {
	return new Set(s1.concat(s2)).size
}

countUnique("apple", "play") // 5
countUnique("sore", "zebra") // 7
countUnique("pip", "geeks") // 6
countUnique("a", "soup") // 5
countUnique("maniac", "maniac") // 5
