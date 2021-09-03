def NOT(num):
	return not num

def AND(num, num2):
	return num and num2

def OR(num, num2):
	return num or num2

AND(1, 1) # 1
OR(1, 1) # 1
AND(0, 1) # 0
AND(0, 0) # 0
OR(0, 1) # 1
OR(1, 0) # 1
OR(0, 0) # 0
NOT(0) # 1
AND(1, 0) # 0
NOT(1) # 0