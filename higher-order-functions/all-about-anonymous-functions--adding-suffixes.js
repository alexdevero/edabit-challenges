function add_suffix(suffix) {
	return function(word) {
		return word + suffix
	}
}

add_ly = add_suffix("ly")
add_less = add_suffix("less")
add_ing = add_suffix("ing")


add_ly("hopeless") // "hopelessly"
add_ly("total") // "totally"

add_less("fear") // "fearless"
add_less("ruth") // "ruthless"

add_ing("cheer") // "cheering"
add_ing("book") // "booking"
