def odd_or_even(word):
	return len(word) % 2 == 0

odd_or_even("apples") # True
odd_or_even("banana") # True
odd_or_even("cherry") # True
odd_or_even("mango") # False
odd_or_even("peach") # False
odd_or_even("pears") # False