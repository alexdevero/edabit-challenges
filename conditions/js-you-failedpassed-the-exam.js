function gradePercentage(userScore, passScore) {
	return `You ${userScore >= passScore ? 'PASSED' : 'FAILED'} the Exam`;
}

gradePercentage("85%", "85%") // "You PASSED the Exam"
gradePercentage("99%", "85%") // "You PASSED the Exam"
gradePercentage("65%", "90%") // "You FAILED the Exam"
gradePercentage("65%", "66%") // "You FAILED the Exam"
gradePercentage("5%", "8%") // "You FAILED the Exam"
gradePercentage("8%", "5%") // "You PASSED the Exam"
