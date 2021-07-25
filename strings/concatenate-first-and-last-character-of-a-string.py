def concat_name(first_name, last_name):
	return last_name + ', ' + first_name

concat_name("John", "Doe") # "Doe, John")
concat_name("First", "Last") # "Last, First")
concat_name("A", "B") # "B, A")

# In case someone is making odd assumptions about comma characters.
concat_name(",", ",") # ",, ,")