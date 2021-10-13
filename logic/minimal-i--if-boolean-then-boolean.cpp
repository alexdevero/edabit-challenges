bool isEven(int n) {
	return n % 2 == 0;
}

Describe(Boolean_Boolean)
{
  It(test1){Assert::That(isEven(int(2)), Equals(true));}
  It(test2){Assert::That(isEven(int(3)), Equals(false));}
  It(test3){Assert::That(isEven(int(10)), Equals(true));}
  It(test4){Assert::That(isEven(int(31)), Equals(false));}
  It(test5){Assert::That(isEven(int(666)), Equals(true));}
  It(test6){Assert::That(isEven(int(777)), Equals(false));}
  It(test7){Assert::That(isEven(int(3482034)), Equals(true));}
  It(test8){Assert::That(isEven(int(3482035)), Equals(false));}
};