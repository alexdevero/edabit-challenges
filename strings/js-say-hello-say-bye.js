function sayHelloBye(name, num) {
	return num === 0 ? `Bye ${name[0].toUpperCase()}${name.substring(1)}` : `Hello ${name[0].toUpperCase()}${name.substring(1)}`
}

sayHelloBye('jose', 1) // 'Hello Jose'
sayHelloBye('barry', 1) // 'Hello Barry'
sayHelloBye('jon', 0) // 'Bye Jon'
sayHelloBye('khloy', 1) // 'Hello Khloy'
sayHelloBye('sara', 0) // 'Bye Sara'
sayHelloBye('Jon', 0) // 'Bye Jon'
sayHelloBye('Matt', 1) // 'Hello Matt'
