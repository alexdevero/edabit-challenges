def remove_numbers(string):
    return "".join(i for i in string if i.isalpha())
  
remove_numbers("foo1"), "foo"
remove_numbers("12ma23tt"), "matt"
remove_numbers("e1d2a3b4i5t6"), "edabit"
remove_numbers("czech007"), "czech"
remove_numbers("ai4653rf53or4235ce"), "airforce"