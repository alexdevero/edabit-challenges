function eq(evaluate) {
	return eval(evaluate)
}

eq("1+2") // 3
eq("6/(9-7)") // 3
eq("3+2-4") // 1
eq("3*4+1") // 13
eq("5*8-4*9") // 4
eq("3**7") // 2187
eq("(6**3)+3") // 219
