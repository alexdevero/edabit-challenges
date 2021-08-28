def how_many_walls(n, w, h):
	return n // (w * h)

how_many_walls(100, 4, 5) # 5
how_many_walls(10, 15, 12) # 0
how_many_walls(41, 3, 6) # 2
how_many_walls(50, 11, 5) # 0
how_many_walls(1, 1, 1) # 1