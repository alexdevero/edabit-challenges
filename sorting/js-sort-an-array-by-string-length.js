function sortByLength(arr) {
	return arr.sort((x, y) => x.length - y.length)
}

sortByLength(['Google', 'Apple', 'Microsoft']) // ['Apple', 'Google', 'Microsoft']
sortByLength(['Leonardo', 'Michelangelo', 'Raphael', 'Donatello']) // ['Raphael', 'Leonardo', 'Donatello', 'Michelangelo']
sortByLength(['Turing', 'Einstein', 'Jung']) // ['Jung', 'Turing', 'Einstein']
sortByLength(['Tatooine', 'Hoth', 'Yavin', 'Dantooine']) // ['Hoth', 'Yavin', 'Tatooine', 'Dantooine']
sortByLength(['Mario', 'Bowser', 'Link']) // ['Link', 'Mario', 'Bowser']
