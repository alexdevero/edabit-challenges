function kineticEnergy(m, v) {
	return Math.round(1/2 * m * Math.pow(v, 2))
}

kineticEnergy(60, 3) // 270
kineticEnergy(45, 10) // 2250
kineticEnergy(63.5, 7.35) // 1715
kineticEnergy(0, 7.35) // 0
kineticEnergy(88.4, 0) // 0
kineticEnergy(3.333, 5.4) // 49
