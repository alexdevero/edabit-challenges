function nSidedShape(n) {
	return ['circle', 'semi-circle', 'triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon'].indexOf(n) + 1
}

nSidedShape(1) // "circle"
nSidedShape(2) // "semi-circle"
nSidedShape(3) // "triangle"
nSidedShape(4) // "square"
nSidedShape(5) // "pentagon"
nSidedShape(6) // "hexagon"
nSidedShape(7) // "heptagon"
nSidedShape(8) // "octagon"
nSidedShape(9) // "nonagon"
nSidedShape(10) // "decagon"
