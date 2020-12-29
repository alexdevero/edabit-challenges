function stringCycling(a, b) {
	return a.repeat(b.length).substring(0, b.length)
}

let [actualParam, expectedParam] = [
  [
    ["abc", "hello"],
    ["programming", "edabit"],
    ["ha", "good morning"],
    [" ", "python"],
    ["the quick brown fox jumps over the lazy dog", "abcde"],
    ["the world in me evolves in hers", "i love Tesh, so much so"],
    ["a thing of beauty is a joy forever", "indulge me surely"],
    ["to", "hide"],
    ["such a feeling coming over me", "top of the world"]
  ], [
    "abcab",
    "progra",
    "hahahahahaha",
    "      ",
    "the q",
    "the world in me evolves",
    "a thing of beauty",
    "toto",
    "such a feeling c"
  ]
]

for (let i in actualParam) Test.assertEquals(stringCycling(...actualParam[i]), expectedParam[i])
