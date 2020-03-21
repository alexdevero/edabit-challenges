function sweetestIcecream(arr) {
	const flavors = {
		Plain: 0,
		Vanilla: 5,
		ChocolateChip: 5,
		Strawberry:	10,
		Chocolate: 10
	}

	return arr.map(item => flavors[item.flavor] + item.numSprinkles).sort((x, y) => x > y ? -1 : 1)[0]
}

class IceCream {
	constructor(flavor, numSprinkles) {
		this.flavor = flavor
		this.numSprinkles = numSprinkles
	}
}

ice1 = new IceCream("Chocolate", 13)
ice2 = new IceCream("Vanilla", 0)
ice3 = new IceCream("Strawberry", 7)
ice4 = new IceCream("Plain", 18)
ice5 = new IceCream("ChocolateChip", 3)
ice6 = new IceCream("Chocolate", 23)
ice7 = new IceCream("Strawberry", 0)
ice8 = new IceCream("Plain", 34)
ice9 = new IceCream("Plain", 81)
ice10 = new IceCream("Vanilla", 12)

sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) // 23
sweetestIcecream([ice7, ice10, ice1, ice6, ice8, ice10, ice2, ice2]) // 34
sweetestIcecream([ice10, ice10, ice6, ice8, ice4]) // 34
sweetestIcecream([ice2, ice10, ice6, ice9, ice7]) // 81
sweetestIcecream([ice10, ice6, ice4, ice1, ice7, ice8, ice6]) // 34
sweetestIcecream([ice3, ice1]) // 23
sweetestIcecream([ice6, ice7, ice5, ice4, ice3]) // 33
sweetestIcecream([ice4, ice8, ice9]) // 81
sweetestIcecream([ice5, ice7]) // 10
sweetestIcecream([ice5, ice3, ice6, ice2, ice7, ice2, ice7, ice2]) // 33
sweetestIcecream([ice1, ice9, ice10, ice9, ice7, ice1, ice9]) // 81
sweetestIcecream([ice1, ice4]) // 23
sweetestIcecream([ice7, ice4]) // 18
sweetestIcecream([ice1, ice8, ice6, ice7, ice3, ice2, ice3, ice7]) // 34
sweetestIcecream([ice7, ice8, ice4, ice4, ice5, ice1]) // 34
sweetestIcecream([ice10, ice10, ice9, ice4, ice7, ice9]) // 81
sweetestIcecream([ice3, ice10, ice1]) // 23
sweetestIcecream([ice3, ice4, ice7, ice3, ice7, ice10, ice2]) // 18
sweetestIcecream([ice5, ice9, ice9, ice9, ice7, ice5, ice9, ice7]) // 81
sweetestIcecream([ice4, ice9, ice2]) // 81
sweetestIcecream([ice8, ice2, ice2, ice2, ice4, ice8]) // 34
sweetestIcecream([ice4, ice9, ice4, ice3, ice3, ice2, ice5, ice2]) // 81
sweetestIcecream([ice8, ice10, ice5]) // 34
sweetestIcecream([ice10, ice3, ice2, ice1, ice9]) // 81
sweetestIcecream([ice8, ice3, ice4, ice5]) // 34
sweetestIcecream([ice10, ice8, ice6, ice7, ice9, ice4]) // 81
sweetestIcecream([ice5, ice4, ice6, ice6, ice1]) // 33
sweetestIcecream([ice6, ice8, ice2, ice10, ice7, ice10]) // 34
sweetestIcecream([ice1, ice9, ice7, ice3]) // 81
sweetestIcecream([ice7, ice1, ice9, ice6, ice7, ice10, ice2, ice3]) // 81
sweetestIcecream([ice5, ice1, ice7, ice6, ice8, ice1, ice8]) // 34
sweetestIcecream([ice10, ice9, ice2, ice4, ice10]) // 81
sweetestIcecream([ice3, ice7, ice10]) // 17
sweetestIcecream([ice10, ice5, ice4]) // 18
sweetestIcecream([ice9, ice2, ice4, ice8, ice3, ice3]) // 81
sweetestIcecream([ice6, ice3, ice9, ice8, ice2, ice6]) // 81
sweetestIcecream([ice10, ice3]) // 17
sweetestIcecream([ice10, ice7, ice5, ice2, ice9]) // 81
sweetestIcecream([ice10, ice10, ice4, ice1, ice9]) // 81
sweetestIcecream([ice9, ice2, ice6, ice4, ice10, ice3]) // 81
sweetestIcecream([ice8, ice10, ice1, ice7, ice8, ice9, ice1]) // 81
sweetestIcecream([ice7, ice5, ice3, ice8, ice1, ice9]) // 81
sweetestIcecream([ice2, ice6, ice3]) // 33
sweetestIcecream([ice6, ice6]) // 33
sweetestIcecream([ice9, ice6, ice8, ice3, ice2, ice2]) // 81
sweetestIcecream([ice1, ice3, ice3, ice6]) // 33
sweetestIcecream([ice8, ice6]) // 34
sweetestIcecream([ice1, ice1]) // 23
sweetestIcecream([ice4, ice2, ice3, ice9, ice5, ice10, ice6]) // 81
sweetestIcecream([ice10, ice8, ice4, ice3, ice9, ice8, ice1, ice10]) // 81
sweetestIcecream([ice5, ice8, ice5]) // 34
