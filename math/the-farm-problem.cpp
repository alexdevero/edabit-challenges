int animals(int chickens, int cows, int pigs) {
	return ((chickens * 2) + ((cows + pigs) * 4));
}

Describe(farm_animal_tests)
{
	It(test1){Assert::That(animals(5, 2, 8), Equals(50));}
	It(test2){Assert::That(animals(3, 4, 7), Equals(50));}
	It(test3){Assert::That(animals(1, 2, 3), Equals(22));}
	It(test4){Assert::That(animals(3, 5, 2), Equals(34));}
};