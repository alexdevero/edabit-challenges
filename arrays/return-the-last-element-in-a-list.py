def get_last_item(lst):
  return lst[-1]

get_last_item(['Cat', 'Dog', 'Duck']) # 'Duck'
get_last_item([1, 2, 3]) # 3
get_last_item([True, False, False, True]) # True
get_last_item([7, 'String', False]) # False
get_last_item([False]) # False
get_last_item([1, 2, 3, 56, 87, 23, 65, 45]) # 45
get_last_item(['Apple', 'Orange']) # 'Orange'
get_last_item([True, False, 'Apple']) # 'Apple'
get_last_item([1]) # 1