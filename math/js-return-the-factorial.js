function factorial(int) {
  return int === 2 ? int : int * factorial(int - 1)
}

factorial(2) // 2
factorial(6) // 720
factorial(3) // 6
factorial(12) // 479001600
factorial(5) // 120
