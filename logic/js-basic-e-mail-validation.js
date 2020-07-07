function validateEmail(str) {
	return /\S+@\S+\.\S+/.test(str)
}

validateEmail('@edabit.com') // false
validateEmail('@edabit') // false
validateEmail('matt@edabit.com') // true
validateEmail('') // false, "Don't forget about empty strings!"
validateEmail('hello.gmail@com') // false
validateEmail('bill.gates@microsoft.com') // true
validateEmail('hello@email') // false
validateEmail('%^%$#%^%') // false
validateEmail('www.email.com') // false
validateEmail('email') // false
