let x = /^\d*[02468]$/

function validate(num) {
	return x.test(num);
}

!validate("2341") // "2341 is odd."
validate("132") // "132 is even."
!validate("29") // "29 is odd."
validate("5578") // "5578 is even."

for (let i = 0; i < 5; i++) {
  let x = Math.ceil(Math.random()*7000)*2;
  validate(x.toString()) // `${x} is even.`
}

for (let i = 0; i < 5; i++) {
  let x = Math.ceil(Math.random()*7000)*2 + 1;
  !validate(x.toString()) // `${x} is odd.`
}
