bool divisibleByFive(int num) {
	return num % 5 == 0;
}

Describe(divisible_by_five)
{
  It(test1){Assert::That(divisibleByFive(7), Equals(false));}
  It(test2){Assert::That(divisibleByFive(5), Equals(true));}
  It(test3){Assert::That(divisibleByFive(15), Equals(true));}
  It(test4){Assert::That(divisibleByFive(33), Equals(false));}
  It(test5){Assert::That(divisibleByFive(-18), Equals(false));}
  It(test6){Assert::That(divisibleByFive(999), Equals(false));}
  It(test7){Assert::That(divisibleByFive(2), Equals(false));}
};