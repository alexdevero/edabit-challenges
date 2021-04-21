function justAnotherSumProblem(a, b) {
	const [min,max] = [Math.min(a, b), Math.max(a, b)]

	return (min + max) / 2 * (max - min + 1)
}

// Negative
justAnotherSumProblem(1,-10) // -54
justAnotherSumProblem(-20,5) // -195
justAnotherSumProblem(-40,20) // -610
justAnotherSumProblem(20,-100) // -4840
justAnotherSumProblem(-15,3) // -114
justAnotherSumProblem(-8,4) // -26

// Positive
justAnotherSumProblem(90,45) // 3105
justAnotherSumProblem(100,58) // 3397
justAnotherSumProblem(65,48) // 1017
justAnotherSumProblem(2,3) // 5
justAnotherSumProblem(89,256) // 28980
justAnotherSumProblem(302,56) // 44213
