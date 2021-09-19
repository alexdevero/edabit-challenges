def is_safe_bridge(s):
	return ' ' not in s

is_safe_bridge("####") # True
is_safe_bridge("## ####") # False
is_safe_bridge("#") # True
is_safe_bridge("# #") # False