function formatNum(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

formatNum(1000) // "1,000")
formatNum(1000000) // "1,000,000")
formatNum(20) // "20")
formatNum(0) // "0")
formatNum(12948) // "12,948")
