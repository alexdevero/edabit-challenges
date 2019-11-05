function hasValidPrice(product) {
	return (product !== undefined && product.price !== undefined && typeof product.price === 'number' ? (product.price >= 0 ? true : false) : false)
}

hasValidPrice({ 'product': 'Milk', price: 1.50 }) // true
hasValidPrice({ 'product': 'Cheese', price: -1 }) // false
hasValidPrice({ 'product': 'Eggs', price: 0 }) // true
hasValidPrice({ 'product': 'Flour' }) // false
hasValidPrice({ 'product': 'Cerials', price: '3.0' }) // false
hasValidPrice({ 'product': 'Beer', price: NaN }) // false
hasValidPrice() // false
