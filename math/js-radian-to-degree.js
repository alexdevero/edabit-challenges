function toDegree(radian) {
	return Math.round(radian * (180 / Math.PI))
}

toDegree(2 * Math.PI) // 360
toDegree(Math.PI) // 180
toDegree(Math.PI / 2) // 90
toDegree(Math.PI / 4) // 45
toDegree(Math.PI / 3) // 60
