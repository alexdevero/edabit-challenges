def weight_allowed(car, p, max_weight):
	return (car + sum(p)) * 0.453592 < max_weight

weight_allowed(3000, [150, 201, 75, 88, 195], 1700) # True
weight_allowed(3200, [220, 101, 115, 228, 15], 1700) # False
weight_allowed(2900, [225, 171, 300, 274, 191], 1850) # True
weight_allowed(3550, [180, 201, 140, 99, 204], 1980) # False
weight_allowed(4500, [157, 154, 75, 88, 190], 2400) # True
weight_allowed(4000, [150, 200, 79, 80, 159], 2000) # False