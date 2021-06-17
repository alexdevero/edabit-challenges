def football_points(wins, draws, losses):
	return wins * 3 + draws * 1

football_points(1, 2, 3) # 5
football_points(5, 5, 5) # 20
football_points(1, 0, 0) # 3
football_points(0, 7, 0) # 7
football_points(0, 0, 15) # 0