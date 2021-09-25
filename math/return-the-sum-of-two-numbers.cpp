int addition(int a, int b) {
	return a + b;
}

Describe(number_addition)
{
  It(test1){Assert::That(addition(2, 3), Equals(5));}
  It(test2){Assert::That(addition(-3, -6), Equals(-9));}
  It(test3){Assert::That(addition(7, 3), Equals(10));}
};