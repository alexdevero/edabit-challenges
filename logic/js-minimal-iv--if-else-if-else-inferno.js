function equilibrium (x) {
	return (x > 0) ? "positive" : (x < 0) ? "negative" : true
}

equilibrium(0.000) // true
equilibrium(0) // true

equilibrium(3) // "positive"
equilibrium(66) // "positive"
equilibrium(5425) // "positive"
equilibrium(1111.1) // "positive"
equilibrium(0.0001) // "positive"

equilibrium(-3) // "negative"
equilibrium(-66) // "negative"
equilibrium(-5425) // "negative"
equilibrium(-1111.1) // "negative"
equilibrium(-0.0001) // "negative"
