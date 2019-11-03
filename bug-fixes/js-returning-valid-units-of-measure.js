function hasValidUnitOfMeasure(product = {}) {
	const { unitOfMeasure, comment } = product
	return (comment !== undefined || unitOfMeasure === 'L' || unitOfMeasure === 'PCE')
}

hasValidUnitOfMeasure({ 'product': 'Milk', unitOfMeasure: 'L' }) // true
hasValidUnitOfMeasure({ 'product': 'Cheese', unitOfMeasure: 'PCE' }) // true
hasValidUnitOfMeasure({ 'product': 'Eggs', comment: 'Eggs are too different in size' }) // true
hasValidUnitOfMeasure({ 'product': 'Cerials', unitOfMeasure: '' }) // false
hasValidUnitOfMeasure({ 'product': 'Flour' }) // false
hasValidUnitOfMeasure({ 'product': 'Beer', unitOfMeasure: false }) // false
hasValidUnitOfMeasure({ 'product': 'Beef', unitOfMeasure: 'Cow' }) // false
hasValidUnitOfMeasure() // false
