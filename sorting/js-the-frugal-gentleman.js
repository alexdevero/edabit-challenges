function chosenWine(wines) {
	return wines.length === 0 ? null : wines.length === 1 ? wines[0].name : wines.sort((x, y) => x.price > y.price ? 1 : -1)[1].name
}

chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine 32", price: 13.99}, {name: "Wine 9", price: 10.99}]) // "Wine 9"
chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine B", price: 9.99}]) // "Wine B"
chosenWine([{name: "Wine A", price: 8.99}]) // "Wine A"
chosenWine([]), null
chosenWine([{name: "Wine A", price: 8.99}, {name: "Wine 389", price: 109.99}, {name: "Wine 44", price: 38.44}, {name: "Wine 72", price: 22.77}]) // "Wine 72"
