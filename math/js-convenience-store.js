function changeEnough(change, amountDue) {
	return (change[0] * 0.25 + change[1] * 0.10 + change[2] * 0.05 + change[3] * 0.01) >= amountDue
}

changeEnough([2, 100, 0, 0], 14.11) // false
changeEnough([0, 0, 20, 5], 0.75) // true
changeEnough([30, 40, 20, 5], 12.55) // true
changeEnough([10, 0, 0, 50], 13.85) // false
changeEnough([1, 0, 5, 219], 19.99) // false
changeEnough([1, 0, 2555, 219], 127.75) // true
changeEnough([1, 335, 0, 219], 35.21) // true
