def print_list(n):
	result = []
	i = 1
	while i <= n:
		result += [i]
		i += 1

	return result

print_list(1) # [1]
print_list(2) # [1,2]
print_list(3) # [1,2,3]
print_list(4) # [1,2,3,4]
print_list(5) # [1,2,3,4,5]
print_list(6) # [1,2,3,4,5,6]
print_list(7) # [1,2,3,4,5,6,7]
print_list(8) # [1,2,3,4,5,6,7,8]
print_list(9) # [1,2,3,4,5,6,7,8,9]
print_list(10) # [1,2,3,4,5,6,7,8,9,10]