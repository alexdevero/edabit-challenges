String.prototype.vreplace = function(vowel) {
	return this.replace(/[aeiou]/g, vowel)
}

"apples and bananas".vreplace("u") // "upplus und bununus"
"cheese casserole".vreplace("o") // "chooso cossorolo"
"stuffed jalapeno poppers".vreplace("e") // "steffed jelepene peppers"
"shrimp tempura".vreplace("a") // "shramp tampara"
"tuna sashimi".vreplace("i") // "tini sishimi"
"chocolate cake".vreplace("a") // "chacalata caka"
