function leapYear(year){
  return year % 4 === 0 && (year % 100 !== 0 && year % 400 !== 0)
}

leapYear(1850) // false
leapYear(1565) // false
leapYear(1920) // true
leapYear(1924) // true
leapYear(1928) // true
leapYear(1940) // true
leapYear(2021) // false
