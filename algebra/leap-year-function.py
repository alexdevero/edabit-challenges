def leap_year(year):
	return year % 4 == 0 and year % 100 != 0 or year % 400 == 0

leap_year(1850) # False
leap_year(1565) # False
leap_year(1920) # True
leap_year(1924) # True
leap_year(1928) # True
leap_year(1940) # True
leap_year(2021) # False
leap_year(1900) # False
leap_year(2000) # True