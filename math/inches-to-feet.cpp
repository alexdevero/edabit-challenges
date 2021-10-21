int inchesToFeet(int inches) {
	return inches < 12 ? 0 : inches / 12;
}

Describe(inchesToFeet_) {
	It(test1){Assert::That(inchesToFeet(12), Equals(1));}
	It(test2){Assert::That(inchesToFeet(360), Equals(30));}
	It(test3){Assert::That(inchesToFeet(3612), Equals(301));}
	It(test4){Assert::That(inchesToFeet(324), Equals(27));}
	It(test5){Assert::That(inchesToFeet(3012), Equals(251));}
	It(test6){Assert::That(inchesToFeet(11), Equals(0));}
};