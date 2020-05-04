function longBurp(num) {
	return `Bu${'r'.repeat(num)}p`
}

longBurp(3) // "Burrrp"
longBurp(5) // "Burrrrrp"
longBurp(9) // "Burrrrrrrrrp"
longBurp(10) // "Burrrrrrrrrrp"
longBurp(13) // "Burrrrrrrrrrrrrp"
longBurp(18) // "Burrrrrrrrrrrrrrrrrrp"
longBurp(1) // "Burp"
