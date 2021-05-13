function dis(price, discount) {
	return (100 - discount) / 100 * price
}

dis(100, 75) // 25
dis(211, 50) // 105.5
dis(593, 61) // 231.27
dis(1693, 80) // 338.6
dis(700, 10) // 630
