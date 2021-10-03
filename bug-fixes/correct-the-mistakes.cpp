int squared(int a) {
	return a * a;
}

Describe(basic_tests) {
	It(test1){Assert::That(squared(10), Equals(100));}
	It(test2){Assert::That(squared(69), Equals(4761));}
	It(test3){Assert::That(squared(666), Equals(443556));}
	It(test4){Assert::That(squared(-21), Equals(441));}
	It(test5){Assert::That(squared(21), Equals(441));}
};