def comp(txt1, txt2):
	return len(txt1) == len(txt2)

comp("AB", "CD") # True
comp("ABC", "DE") # False
comp("hello", "edabit") # False
comp("meow", "woof") # True
comp("jrnvjrnnt", "cvjknfjvmfvnfjn") # False
comp("jkvnjrt", "krnf") # False
comp("Facebook", "Snapchat") # True