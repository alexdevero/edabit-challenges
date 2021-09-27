int addition(int a) {
	return a + 1;
}

Describe(basic_tests)
{
  It(test1){Assert::That(addition(2), Equals(3));}
  It(test2){Assert::That(addition(-9), Equals(-8));}
  It(test3){Assert::That(addition(0), Equals(1));}
	It(test4){Assert::That(addition(999), Equals(1000));}
  It(test5){Assert::That(addition(73), Equals(74));}
};