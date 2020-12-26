function elementSet(s) {
	return [...s][0]
}

const first = new Set()
first.add(1)
elementSet(first) // 1

const second = new Set()
second.add("apple")
elementSet(second) // "apple"

const third  = new Set()
third.add(false)
elementSet(third) // false
