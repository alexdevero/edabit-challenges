function timeToFinish(full, part) {
	return (full.replace(/ /g, '').length - part.replace(/ /g, '').length) * 0.5
}

Test.assertEquals(timeToFinish(
	"And so brings my conclusion to its conclusion.",
	"And so brings my conclusion to its conclus"
), 2)

Test.assertEquals(timeToFinish(
	"As a result, my point is still valid.",
	"As a result, my"
), 9)

Test.assertEquals(timeToFinish(
	"Thank you for reading my essay.",
	"T"
), 12.5)

Test.assertEquals(timeToFinish(
	"Therefore, there was over there their only answer.",
	"Therefore, there w"
), 13.5)

Test.assertEquals(timeToFinish(
	"And there, I end this thesis with a rock solid conclusion.",
	"And there, I end this thesis with a rock solid conclusion."
), 0)

Test.assertEquals(timeToFinish(
	"",
	""
), 0)

Test.assertEquals(timeToFinish(
	"What? Who? Where? Why? I pondered these things upon reading the first question.",
	""
), 33.5)