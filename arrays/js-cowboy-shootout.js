function rogerShots(arr) {
	return arr.filter(x => x === 'Bang!' || x === 'BangBang!').length * 0.5
}

rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) // 3
rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) // 2.5
rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]) // 2
rogerShots(["BangBang!", "BangBang!", "BangBang!"]) // 1.5
rogerShots(["Bang!", "BadaBing!", "Badaboom!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) // 3
rogerShots(["BangBang!", "BangBang!", "Bag!", "Ban!", "Tang!", "Bang!", "Bang!"]) // 2
