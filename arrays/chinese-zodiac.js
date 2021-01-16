function chineseZodiac(birthYear) {
	const signs = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep']
	return signs[birthYear % 12]
}

chineseZodiac(2021) // "Ox"
chineseZodiac(2020) // "Rat"
chineseZodiac(1938) // "Tiger"
chineseZodiac(1951) // "Rabbit"
chineseZodiac(1964) // "Dragon"
chineseZodiac(1977) // "Snake"
chineseZodiac(1990) // "Horse"
chineseZodiac(2003) // "Sheep"
chineseZodiac(2016) // "Monkey"
chineseZodiac(1969) // "Rooster"
chineseZodiac(1982) // "Dog"
chineseZodiac(1995) // "Pig"
