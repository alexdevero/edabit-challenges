int points(int twoPointers, int threePointers) {
	return twoPointers * 2 + threePointers * 3;
}

Describe(points_) {
	It(test1){Assert::That(points(1, 1), Equals(5));}
	It(test2){Assert::That(points(1, 2), Equals(8));}
	It(test3){Assert::That(points(2, 1), Equals(7));}
	It(test4){Assert::That(points(2, 2), Equals(10));}
	It(test5){Assert::That(points(69, 420), Equals(1398));}
};