function rps(p1, p2) {
	let w = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock"
  }

  if (p1 === p2) return "It's a draw"

	return `The winner is ${w[p1] === p2 ? 'p1' : 'p2'}`
}

rps("Rock", "Paper") // "The winner is p2"
rps("Scissors", "Rock") // "The winner is p2"
rps("Scissors", "Paper") // "The winner is p1"
rps("Paper", "Rock") // "The winner is p1"
rps("Paper", "Paper") // "It's a draw"
rps("Rock", "Rock") // "It's a draw"
