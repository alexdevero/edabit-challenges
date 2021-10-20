float calculateFuel(float n) {
	return n * 10 >= 100 ? n * 10 : 100;
}

Describe(calculateFuel_) {
	It(test1){Assert::That(calculateFuel(15), Equals(150));}
	It(test2){Assert::That(calculateFuel(23), Equals(230));}
	It(test3){Assert::That(calculateFuel(10), Equals(100));}
	It(test4){Assert::That(calculateFuel(3), Equals(100));}
	It(test5){Assert::That(calculateFuel(23.5), Equals(235));}
	It(test6){Assert::That(calculateFuel(3.14), Equals(100));}
	It(test7){Assert::That(calculateFuel(9.99999), Equals(100));}
	It(test8){Assert::That(calculateFuel(822315322), Equals(8223153220));}
};
// Author: Joshua Señoron