class Player {
	constructor(name, age, height, weight) {
		this.name = name
		this.age = age
		this.height = height
		this.weight = weight
	}

	getAge() {
		return `${this.name} is age ${this.age}`
	}

	getHeight() {
		return `${this.name} is ${this.height}cm`
	}

	getWeight() {
		return `${this.name} weighs ${this.weight}kg`
	}
}

player1 = new Player('Patrick Mahomes', 24, 188, 104)
player2 = new Player('Jimmy Garoppolo', 28, 188, 102)
player3 = new Player('Julio Jones', 31, 191, 100)

Test.assertEquals(player1.getAge(), 'Patrick Mahomes is age 24')
Test.assertEquals(player1.getHeight(), 'Patrick Mahomes is 188cm')
Test.assertEquals(player1.getWeight(), 'Patrick Mahomes weighs 104kg')

Test.assertEquals(player2.getAge(), 'Jimmy Garoppolo is age 28')
Test.assertEquals(player2.getHeight(), 'Jimmy Garoppolo is 188cm')
Test.assertEquals(player2.getWeight(), 'Jimmy Garoppolo weighs 102kg')

Test.assertEquals(player3.getAge(), 'Julio Jones is age 31')
Test.assertEquals(player3.getHeight(), 'Julio Jones is 191cm')
Test.assertEquals(player3.getWeight(), 'Julio Jones weighs 100kg')
