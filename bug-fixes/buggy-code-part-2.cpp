int maxNum(int n1, int n2) {
	if (n1 < n2) {
	  return n2;
	} else {
		return n1;
  }
}

Describe(basic_tests) {
	It(test1){Assert::That(maxNum(3, 7), Equals(7));}
	It(test2){Assert::That(maxNum(-1, 0), Equals(0));}
	It(test3){Assert::That(maxNum(1000, 400), Equals(1000));}
	It(test4){Assert::That(maxNum(-3, -9), Equals(-3));}
	It(test5){Assert::That(maxNum(88, 90), Equals(90));}
};
//Mubashir