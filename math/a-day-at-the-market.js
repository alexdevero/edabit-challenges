function whoWinsTonight(coins, space, price, size) {
	const bill = Math.floor(coins / price)
  const will = Math.floor(space / size)

  return bill > will ? 'Bill' : bill < will ? 'Will' : 'Tie'
}

whoWinsTonight(20, 20, 5, 10) // 'Bill'
whoWinsTonight(30, 100, 1, 50) // 'Bill'
whoWinsTonight(90, 10, 2, 5) // 'Bill'

whoWinsTonight(10, 2, 20, 1) // 'Will'
whoWinsTonight(40, 100, 5, 10) // 'Will'
whoWinsTonight(5, 5, 5, 2) // 'Will'

whoWinsTonight(3, 7, 2, 5) // 'Tie'
whoWinsTonight(50, 50, 49, 26) // 'Tie'
whoWinsTonight(100000, 100000, 1, 1) // 'Tie'
