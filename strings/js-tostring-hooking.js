String.prototype.toString = function() {
	return Object.values(this).split('').reverse().join('')
}

("Hello World!").toString() // "!dlroW olleH"
("My hooking function! :3").toString() // "3: !noitcnuf gnikooh yM"
("RaceCar").toString() // "raCecaR"
("Level").toString() // "leveL"
("live").toString() // "evil"
("penut butter").toString() // "rettub tunep"
