def area(h, w):
	return w * h if h > 0 and w > 0 else -1

area(5, 3) # 15
area(8, 5) # 40
area(5, 4) # 20
area(2, 3) # 6
area(10000, 10000) # 100000000
area(-2, -5) # -1
area(0, 3) # -1
area(5, -3) # -1
area(0, 1) # -1
area(-1, 0) # -1