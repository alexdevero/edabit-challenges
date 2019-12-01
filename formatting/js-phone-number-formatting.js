function formatPhoneNumber(numbers) {
	return `(${numbers.join('').substring(0, 3)}) ${numbers.join('').substring(3, 6)}-${numbers.join('').substring(6)}`
}

formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // '(123) 456-7890'
formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) // '(519) 555-4468'
formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) // '(345) 501-2527'
formatPhoneNumber([6, 6, 2, 5, 8, 8, 7, 0, 4, 3]) // '(662) 588-7043'
formatPhoneNumber([5, 1, 0, 2, 6, 6, 3, 5, 8, 3]) // '(510) 266-3583'
formatPhoneNumber([4, 9, 7, 8, 8, 9, 1, 0, 1, 5]) // '(497) 889-1015'
formatPhoneNumber([6, 1, 9, 4, 7, 2, 8, 0, 7, 4]) // '(619) 472-8074'
formatPhoneNumber([7, 7, 3, 7, 8, 3, 6, 0, 8, 7]) // '(773) 783-6087'
formatPhoneNumber([9, 5, 3, 1, 3, 7, 4, 0, 0, 1]) // '(953) 137-4001'
formatPhoneNumber([2, 2, 6, 4, 0, 4, 4, 2, 9, 2]) // '(226) 404-4292'
