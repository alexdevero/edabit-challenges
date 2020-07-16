function potatoes(str) {
	return str.match(/potato/g).length
}

potatoes("potato") // 1
potatoes("potatopotatocherry") // 2
potatoes("potatopotatopotatoorange") // 3
potatoes("potatopotatobananapotatopotato") // 4
potatoes("potatopotatomangopotatopotatopotato") // 5
potatoes("potatocucumberpotatopotatopotatopotatopotato") // 6
