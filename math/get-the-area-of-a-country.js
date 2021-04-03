function areaOfCountry(name, area) {
	return `${name} is ${(area / 148940000 * 100).toFixed(2)}% of the total world's landmass`
}

areaOfCountry("USA", 9372610) // "USA is 6.29% of the total world's landmass"
areaOfCountry("Russia", 17098242) // "Russia is 11.48% of the total world's landmass"
areaOfCountry("Iran", 1648195) // "Iran is 1.11% of the total world's landmass"
areaOfCountry("India", 3287590) // "India is 2.21% of the total world's landmass"
areaOfCountry("China", 9706961) // "China is 6.52% of the total world's landmass"
areaOfCountry("Yemen", 527968) // "Yemen is 0.35% of the total world's landmass"
areaOfCountry("Switzerland", 41284) // "Switzerland is 0.03% of the total world's landmass"
