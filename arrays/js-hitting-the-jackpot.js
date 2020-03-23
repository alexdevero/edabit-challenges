function testJackpot(result) {
	return result.every(el => el === result[0])
}

testJackpot(['@', '@', '@', '@']) // true
testJackpot(['!', '!', '!', '!']) // true
testJackpot(['abc', 'abc', 'abc', 'abc']) // true
testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke']) // true
testJackpot(['SS', 'SS', 'SS', 'SS']) // true
testJackpot([':(', ':)', ':|', ':|']) // false
testJackpot(['&&', '&', '&&&', '&&&&']) // false
testJackpot(['hee', 'heh', 'heh', 'heh']) // false
testJackpot(['SS', 'SS', 'SS', 'Ss']) // false
testJackpot(['SS', 'SS', 'Ss', 'Ss']) // false
