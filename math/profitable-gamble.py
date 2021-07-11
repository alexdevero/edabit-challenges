def profitable_gamble(prob, prize, pay):
	return prob * prize > pay

profitable_gamble(0.2, 50, 9) # True
profitable_gamble(0.9, 1, 2) # False
profitable_gamble(0.9, 3, 2) # True
profitable_gamble(0.33, 10, 3.30) # True
profitable_gamble(0, 1000, 0.01) # False
profitable_gamble(0.1, 1000, 7) # True
profitable_gamble(0, 0, 0) # False