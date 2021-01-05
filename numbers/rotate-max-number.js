function rotateMaxNumber(num){
  return +[...num + ''].sort((a, b) => b - a).join('')
}

rotateMaxNumber(123) // 321
rotateMaxNumber(1546) // 6541
rotateMaxNumber("001") // 100
rotateMaxNumber(999) // 999
rotateMaxNumber("12345") // 54321
rotateMaxNumber("00009") // 90000
