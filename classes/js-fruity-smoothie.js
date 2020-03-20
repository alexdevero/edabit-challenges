const prices = {
  Strawberries: "$1.50", Banana: "$0.50", Mango: "$2.50",
  Blueberries: "$1.00", Raspberries: "$1.00", Apple: "$1.75",
  Pineapple: "$3.50"
}

class Smoothie {
  constructor(ingredients) {
    this.ingredients = ingredients
    this.cost = 0
    this.price = 0

    this.ingredients.forEach((ing) => {
      switch (ing) {
        case 'Strawberries':
          this.cost +=1.50
          break
        case 'Banana':
          this.cost += 0.50
          break
        case 'Mango':
          this.cost += 2.50
          break
        case 'Blueberries':
          this.cost += 1.00
          break
        case 'Raspberries':
          this.cost += 1.00
          break
        case 'Apple':
          this.cost += 1.75
          break
        case 'Pineapple':
          this.cost += 3.50
          break
      }
    })
  }

  getCost() {
    return `$${(this.cost).toFixed(2)}`
  }

  getPrice() {
    return `$${(this.cost + (this.cost * 1.5)).toFixed(2)}`
  }

  getName() {
    return this.ingredients.length === 1 ? `${this.ingredients[0].replace(/rries/g, 'rry')} Smoothie` : `${this.ingredients.sort((x, y) => x > y ? 1 : -1).join(' ').replace(/rries/g, 'rry')} Fusion`
  }
}


let s1 = new Smoothie(["Banana"]),
		s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"]),
		s3 = new Smoothie(["Mango", "Apple", "Pineapple"]),
		s4 = new Smoothie(["Pineapple", "Strawberries", "Blueberries", "Mango"]),
		s5 = new Smoothie(["Blueberries"])

s1.ingredients // ["Banana"]
s1.getCost() // "$0.50"
s1.getPrice() // "$1.25"
s1.getName() // "Banana Smoothie"
s2.ingredients // ["Raspberries", "Strawberries", "Blueberries"]
s2.getCost() // "$3.50"
s2.getPrice() // "$8.75"
s2.getName() // "Blueberry Raspberry Strawberry Fusion"
s3.ingredients // ["Mango", "Apple", "Pineapple"]
s3.getCost() // "$7.75"
s3.getPrice() // "$19.38"
s3.getName() // "Apple Mango Pineapple Fusion"
s4.ingredients // ["Pineapple", "Strawberries", "Blueberries", "Mango"]
s4.getCost() // "$8.50"
s4.getPrice() // "$21.25"
s4.getName() // "Blueberry Mango Pineapple Strawberry Fusion"
s5.ingredients // ["Blueberries"]
s5.getCost() // "$1.00"
s5.getPrice() // "$2.50"
s5.getName() // "Blueberry Smoothie"
