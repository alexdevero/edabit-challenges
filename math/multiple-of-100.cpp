bool divisibleByHundred(int num) {
	return num % 100 == 0;
}

Describe(divisible_by_hundred)
{
  It(test1){Assert::That(divisibleByHundred(1), Equals(false));}
  It(test2){Assert::That(divisibleByHundred(100), Equals(true));}
  It(test3){Assert::That(divisibleByHundred(1000), Equals(true));}
  It(test4){Assert::That(divisibleByHundred(111000), Equals(true));}
  It(test5){Assert::That(divisibleByHundred(-1), Equals(false));}
  It(test6){Assert::That(divisibleByHundred(0), Equals(true));}
  It(test7){Assert::That(divisibleByHundred(-100), Equals(true));}
};