def should_serve_drinks(age, on_break):
	return age >= 18 and not on_break

should_serve_drinks(17, True) # False
should_serve_drinks(30, True) # False
should_serve_drinks(24, False) # True
should_serve_drinks(18, False) # True
should_serve_drinks(3, False) # False
should_serve_drinks(18, True) # False
should_serve_drinks(17, False) # False