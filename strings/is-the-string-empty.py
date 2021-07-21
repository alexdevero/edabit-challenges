def is_empty(s):
	return len(s) == 0

is_empty("") # True
is_empty(" ") # False
is_empty("            ") # False
is_empty("38215") # False
is_empty("afjabsdf") # False
is_empty("!?@&") # False