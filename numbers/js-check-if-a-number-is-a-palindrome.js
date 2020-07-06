function isPalindrome(n) {
	let reminder = 0
  let finalNum = 0
  let num = n
  let origNum = num

  while (num > 0) {
    reminder = num % 10
    num = parseInt(num / 10)
    finalNum = finalNum * 10 + reminder
  }

  return finalNum === origNum
}

isPalindrome(838) // true
isPalindrome(77) // true
isPalindrome(95159) // true
isPalindrome(839) // false
isPalindrome(4234) // false
isPalindrome(13) // false
