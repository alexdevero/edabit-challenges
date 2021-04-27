function mapping(letters) {
	return Object.fromEntries(letters.map((letter) => ([ letter.toLowerCase(), letter.toUpperCase() ])))
}

mapping(["a", "b", "c"]) // { a: "A", b: "B", c: "C" }
mapping(["p", "s", "t"]) // { p: "P", s: "S", t: "T" }
mapping(["a", "v", "y", "z"]) // { a: "A", v: "V", y: "Y", z: "Z" }
