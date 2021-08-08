def get_container(product):
	matches = {
		"Bread" : "bag",
		"Milk" : "bottle",
		"Beer" : "bottle",
		"Eggs" : "carton",
		"Cerials" : "box",
		"Candy" : "plastic",
		"Cheese" : None
	}

	return matches[product]

get_container("Bread") # "bag"
get_container("Milk") # "bottle"
get_container("Beer") # "bottle"
get_container("Eggs") # "carton"
get_container("Candy") # "plastic"
get_container("Cheese") # None