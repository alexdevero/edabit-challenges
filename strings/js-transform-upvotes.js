function transformUpvotes(str) {
	return str.split(' ').map(num => num.indexOf('.') > -1 ? parseInt(num.replace('.', '').replace('k', '') + '00') : parseInt(num))
}

transformUpvotes('20.3k 3.8k 7.7k 992') // [20300, 3800, 7700, 992]
transformUpvotes('5.5k 8.9k 32') // [5500, 8900, 32]
transformUpvotes('6.8k 13.5k') // [6800, 13500]
