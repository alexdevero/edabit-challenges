function profitMargin(costPrice, salesPrice) {
	return `${(100 - ((costPrice / salesPrice) * 100)).toFixed(1)}%`
}

profitMargin(10, 15) // "33.3%"
profitMargin(75, 40) // "-87.5%"
profitMargin(55, 55) // "0.0%"
profitMargin(30, 50) // "40.0%"
profitMargin(9999, 10001) // "0.0%"
profitMargin(33, 84) // "60.7%"
profitMargin(28, 39) // "28.2%"
