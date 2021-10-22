bool makesTen(int a, int b) {
	return a == 10 || b == 10 || a + b == 10;
}

Describe(makesTen_) {
	It(test1){Assert::That(makesTen(9, 10), Equals(true));}
	It(test2){Assert::That(makesTen(9, 9), Equals(false));}
	It(test3){Assert::That(makesTen(1, 9), Equals(true));}
	It(test4){Assert::That(makesTen(10, 1), Equals(true));}
	It(test5){Assert::That(makesTen(10, 10), Equals(true));}
	It(test6){Assert::That(makesTen(8, 2), Equals(true));}
	It(test7){Assert::That(makesTen(8, 3), Equals(false));}
	It(test8){Assert::That(makesTen(10, 42), Equals(true));}
	It(test9){Assert::That(makesTen(12, -2), Equals(true));}
};