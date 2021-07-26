def sum_lst(lst):
	total = 0

	for i in range(0, len(lst)):
		total += lst[i]
	return total

sum_lst([1, 2, 3, 4, 5]) # 15
sum_lst([-1, 0, 1]) # 0
sum_lst([0, 4, 8, 12]) # 24