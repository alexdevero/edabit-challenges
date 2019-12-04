function sortDecending(num) {
	return parseInt(num.toString().split('').sort((x,y) => x > y ? -1 : 1).join(''))
}

sortDecending(123) // 321
sortDecending(670276097) // 977766200
sortDecending(2619805) // 9865210
sortDecending(81294) // 98421
sortDecending(0000000) // 0000000
sortDecending(321) // 321
sortDecending(628904) // 986420
sortDecending(289327560) // 987653220
sortDecending(6456) // 6654
sortDecending(444111888555333) // 888555444333111
