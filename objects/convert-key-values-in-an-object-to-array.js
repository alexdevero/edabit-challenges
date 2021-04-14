function objectToArray(obj) {
	return Object.entries(obj)
}

Test.assertSimilar(objectToArray({
	D: 1,
  B: 2,
  C: 3
}), [["D", 1], ["B", 2], ["C", 3]])

Test.assertSimilar(objectToArray({
	likes: 2,
  dislikes: 3,
  followers: 10
}), [["likes", 2], ["dislikes", 3], ["followers", 10]])
