function netPresentValue(pv, ir, years) {
	return years < 0 ? false : `$${Math.round((pv * (1 - (1 + ir) ** -years)) / ir)}`
}

netPresentValue(100, 0.10, 1) // '$91'
netPresentValue(100, 0.2, 1) // '$83'
netPresentValue(100, 0.1, 20) // '$851'
netPresentValue(10000, 0.05, 20) // '$124622'
netPresentValue(250, 0.01, 1) // '$248'
netPresentValue(250, 0.01, -1) // false
netPresentValue(15, 0.50, 100) // '$30'
