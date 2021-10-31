int howManyWalls(int n, int w, int h) {
	return n / (w * h);
}

Describe(howManyWalls_) {
	It(test1){Assert::That(howManyWalls(100, 4, 5), Equals(5));}
	It(test2){Assert::That(howManyWalls(10, 15, 12), Equals(0));}
	It(test3){Assert::That(howManyWalls(41, 3, 6), Equals(2));}
	It(test4){Assert::That(howManyWalls(50, 11, 5), Equals(0));}
	It(test5){Assert::That(howManyWalls(1, 1, 1), Equals(1));}
};
