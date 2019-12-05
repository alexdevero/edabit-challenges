function cardHide(card) {
	return `${'*'.repeat(card.length - 4)}${card.substring(card.length - 4)}`
}

cardHide('1234123456785678') // '************5678'
cardHide('8754456321113213') // '************3213'
cardHide('35123413355523') // '**********5523'
