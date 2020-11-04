function tempConversion(celsius) {
	let result = [+(celsius*9/5 +32).toFixed(2), +(celsius + 273.15).toFixed(2)]
	return result[1] < 0 ? 'Invalid' : result
}

tempConversion(0) // [32 , 273.15])
tempConversion(100) // [212 , 373.15])
tempConversion(42.8) // [109.04 , 315.95])
tempConversion(300.4) // [572.72 , 573.55])
tempConversion(-10.7) // [12.74 , 262.45])
tempConversion(-273.13) // [-459.63 , 0.02])
tempConversion(-273.16) // "Invalid", "Wow, is it realy that cold?")
