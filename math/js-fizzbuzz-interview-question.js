function FizzBuzz(num) {
	return num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' : num % 5 === 0 ? 'Buzz' : num % 3 === 0 ? 'Fizz' : num.toString()
}

FizzBuzz(3) // "Fizz", "You gave " + FizzBuzz(3) + " and Fizz was needed"
FizzBuzz(5) // "Buzz", "You gave " + FizzBuzz(5) + " and Buzz was needed"
FizzBuzz(15) // "FizzBuzz", "You gave " + FizzBuzz(15) + " and FizzBuzz was needed"
FizzBuzz(10) // "Buzz", "You gave " + FizzBuzz(10) + " and Buzz was needed"
FizzBuzz(98) // "98", "You gave " + FizzBuzz(98) + " and 98 was needed"
