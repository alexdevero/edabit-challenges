def divisible(num):
	return (num / 100).is_integer()

divisible(1) # False
divisible(100) # True
divisible(1000) # True
divisible(111000) # True
divisible(-1) # False, "Don't forget negatives"
divisible(0) # True, "Cover the 0 cases"
divisible(-100) # True, "-100 is divisible by 100"