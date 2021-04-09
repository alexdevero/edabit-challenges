function challenge1(s) {
	return s.slice(0, 5)
}

function challenge2(s) {
	return s.slice(-5)
}

function challenge3(s) {
	return s.split('').reverse().join('')
}

function challenge4(s) {
	return s.slice(0, 6).split('').reverse().join('')
}

function challenge5(s) {
	return s.slice(-7).split('').filter((x, i) => i % 2 === 0).join('')
}

var txt = 'abcdefghijklmnopqrstuvwxyz'
var nums = '0123456789'

Test.assertEquals(challenge1(txt), 'abcde')
Test.assertEquals(challenge2(txt), 'vwxyz')
Test.assertEquals(challenge3(txt), 'zyxwvutsrqponmlkjihgfedcba')
Test.assertEquals(challenge4(txt), 'fedcba')
Test.assertEquals(challenge5(txt), 'tvxz')

Test.assertEquals(challenge1(nums), '01234')
Test.assertEquals(challenge2(nums), '56789')
Test.assertEquals(challenge3(nums), '9876543210')
Test.assertEquals(challenge4(nums), '543210')
Test.assertEquals(challenge5(nums), '3579')
