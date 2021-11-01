int area(int h, int w) {
	return h <= 0 || w <= 0 ? -1 : h * w;
}

Describe(area_) {
	It(test1){Assert::That(area(5, 3), Equals(15));}
	It(test2){Assert::That(area(8, 5), Equals(40));}
	It(test3){Assert::That(area(5, 4), Equals(20));}
	It(test4){Assert::That(area(2, 3), Equals(6));}
	It(test5){Assert::That(area(10000, 10000), Equals(100000000));}
	It(test6){Assert::That(area(-2, -5), Equals(-1));}
	It(test7){Assert::That(area(0, 3), Equals(-1));}
	It(test8){Assert::That(area(5, -3), Equals(-1));}
	It(test9){Assert::That(area(0, 1), Equals(-1));}
	It(test10){Assert::That(area(-1, 0), Equals(-1));}
};