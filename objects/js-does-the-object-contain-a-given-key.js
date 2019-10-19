function hasKey(obj, key) {
	return Object.keys(obj).some(el => el === key)
}

hasKey({ pot: 1, tot: 2, not: 3 }, 'not') // true
hasKey({ craves: true, midnight: true, snack: true }, 'morning') // false
hasKey({ a: 44, b: 45, c: 46 }, 'd') // false
hasKey({ a: 'z', b: 'y', c: 'x' }, 'c') // true
