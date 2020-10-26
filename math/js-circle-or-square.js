function circle_or_square(rad, area) {
  return (rad * 2 * 3.14) > area**(1 / 2) * 4
}

circle_or_square(16, 625) // true
circle_or_square(8, 144) // true
circle_or_square(15, 400) // true
circle_or_square(5, 100) // false
circle_or_square(18, 900) // false
circle_or_square(1, 4) // false
