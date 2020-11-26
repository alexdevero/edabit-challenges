function calculator(str) {
	return eval(str)
}

calculator("23+4") // 27
calculator("45-15") // 30
calculator("13+2-5*2") // 5
calculator("49/7*2-3") // 11
calculator("2+2*2") // 6
calculator("5/2") // 2.5
calculator("-34/4") // -8.5
calculator("0+43-0+56*0") // 43
calculator("-14*2-37-0") // -65
calculator("0*0") // 0
calculator("4+2+3-5*2-8/4-12-0+3-14") // -26
calculator("9/2+9/4") // 6.75
calculator("56*27*18*12/2*0") // 0
calculator("34/4*0*45*7") // 0
