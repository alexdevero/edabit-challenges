function coneVolume(h, r) {
	return parseFloat(((Math.PI * Math.pow(r, 2) * h) / 3).toFixed(2))
}

coneVolume(3, 2) // 12.57
coneVolume(15, 6) // 565.49
coneVolume(18, 0) // 0
coneVolume(100, 2) // 418.88
coneVolume(1, 1) // 1.05
coneVolume(0, 30) // 0
