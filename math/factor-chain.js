function factorChain(arr) {
	return arr.every((v, i, a) => i === 0 || v % a[i - 1] === 0)
}

factorChain([1, 2, 4, 8, 16, 32]) // true
factorChain([1, 1, 1, 1, 1, 1]) // true
factorChain([2, 4, 6, 7, 12]) // false
factorChain([10, 1]) // false
factorChain([10, 20, 30, 40]) // false
factorChain([10, 20, 40]) // true
factorChain([1, 1, 1, 1, 7, 49]) // true
