function sayWhat(obj) {
	return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`
}

const random = Test.randomToken()
const obj = { 1: "Mommy", 2: "please", 3: "help" }
const obj2 = { 1: random, 2: "innocent", 3: "is" }
Test.assertEquals(sayWhat(obj), "Mommy please help please")
Test.assertEquals(sayWhat(obj2), `${obj2[1]} innocent is innocent`)
