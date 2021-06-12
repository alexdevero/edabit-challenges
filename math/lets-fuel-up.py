def calculate_fuel(n):
	return max(n * 10, 100)

calculate_fuel(15) # 150
calculate_fuel(23) # 230
calculate_fuel(10) # 100
calculate_fuel(3) # 100
calculate_fuel(23.5) # 235
calculate_fuel(3.14) # 100
calculate_fuel(9.99999) # 100
calculate_fuel(822315322) # 8223153220
calculate_fuel(12345.6789) # 123456.789
calculate_fuel(31.41) # 314.1