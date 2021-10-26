bool isEqual(int num1, int num2) {
	return num1 == num2;
}

Describe(tests)
{
  It(test1){Assert::That(isEqual(2, 2), Equals(true));}
	It(test2){Assert::That(isEqual(88, 88), Equals(true));}
	It(test3){Assert::That(isEqual(36, 35), Equals(false));}
	It(test4){Assert::That(isEqual(1, 1), Equals(true));}
	It(test5){Assert::That(isEqual(5, 6), Equals(false));}
};