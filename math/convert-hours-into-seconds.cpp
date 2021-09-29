int howManySeconds(int hours) {
	return hours * 3600;
}

Describe(basic_tests)
{
  It(test1){Assert::That(howManySeconds(2), Equals(7200));}
	It(test2){Assert::That(howManySeconds(10), Equals(36000));}
	It(test3){Assert::That(howManySeconds(24), Equals(86400));}
	It(test4){Assert::That(howManySeconds(36), Equals(129600));}
};