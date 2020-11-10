class User {
	static userCount = 0

	constructor(username) {
		this.username = username
		User.userCount += 1
	}
}

Test.assertEquals(User.userCount, 0)

const u1 = new User("johnsmith10")
Test.assertEquals(User.userCount, 1)
Test.assertEquals(u1.username, "johnsmith10")


const u2 = new User("marysue1989")
Test.assertEquals(User.userCount, 2)
Test.assertEquals(u2.username, "marysue1989")

const u3 = new User("milan_rodrick")
Test.assertEquals(User.userCount, 3)
Test.assertEquals(u3.username, "milan_rodrick")

const user4 = new User("joshua_senoron")
Test.assertEquals(User.userCount, 4)
Test.assertEquals(user4.username, "joshua_senoron")

const user10 = new User("LuckyLootCrate123")
Test.assertEquals(User.userCount, 5)
Test.assertEquals(user10.username, "LuckyLootCrate123")
