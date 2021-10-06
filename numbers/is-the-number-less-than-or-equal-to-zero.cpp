bool lessThanOrEqualToZero(int num) {
	return num <= 0;
}

Describe(less_than_or_equal_to_zero)
{
  It(test1){Assert::That(lessThanOrEqualToZero(5), Equals(false));}
  It(test2){Assert::That(lessThanOrEqualToZero(0), Equals(true));}
  It(test3){Assert::That(lessThanOrEqualToZero(-5), Equals(true));}
  It(test4){Assert::That(lessThanOrEqualToZero(1), Equals(false));}
  It(test5){Assert::That(lessThanOrEqualToZero(2), Equals(false));}
  It(test6){Assert::That(lessThanOrEqualToZero(10000), Equals(false));}
  It(test7){Assert::That(lessThanOrEqualToZero(1), Equals(false));}
};