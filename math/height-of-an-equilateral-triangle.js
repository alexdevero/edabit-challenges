function height(side) {
	return (((side * 10) * Math.sqrt(3)) / 2).toFixed(1) + ' mm'
}

height(2) // "17.3 mm"
height(5) // "43.3 mm"
height(6.2) // "53.7 mm"
height(8.7) // "75.3 mm"
height(10) // "86.6 mm"
height(13) // "112.6 mm"
height(18.5) // "160.2 mm"
