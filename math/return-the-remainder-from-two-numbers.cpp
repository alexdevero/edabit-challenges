int remainder(int x, int y) {
	return x % y;
}

Describe(remainder_after_dividing)
{
  It(test1){Assert::That(remainder(7, 2), Equals(1));}
  It(test2){Assert::That(remainder(3, 4), Equals(3));}
	It(test3){Assert::That(remainder(-9, -45), Equals(-9));}
	It(test4){Assert::That(remainder(5, 5), Equals(0));}
};