function flickSwitch(arr) {
	let bool = true;

  return arr.map(x => x === 'flick' ? bool = !bool : bool);
}

flickSwitch(['edabit', 'flick', 'eda', 'bit']) // [true, false, false, false]
flickSwitch(['flick', 11037, 3.14, 53]) // [false, false, false, false]
flickSwitch([false, false, 'flick', 'sheep', 'flick']) // [true, true, false, false, true]
flickSwitch([flickSwitch]) // [true]
flickSwitch([('john', 'smith', 'susan'), 'flick']) // [true, false]
flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick']) // [false, true, false, true, false]
flickSwitch([]) // []
