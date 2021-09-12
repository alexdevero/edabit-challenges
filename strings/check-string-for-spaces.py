def has_spaces(txt):
	return ' ' in txt

has_spaces("Foo") # False
has_spaces("Foo bar") # True
has_spaces("Foo ") # True
has_spaces(" Foo") # True
has_spaces(" ") # True
has_spaces("") # False
has_spaces(",./;'[]-=") # False