bool lessThan100(int a, int b) {
	return a + b < 100;
}

Describe(tests)
{
  It(test1){Assert::That(lessThan100(5, 57), Equals(true));}
	It(test2){Assert::That(lessThan100(77, 30), Equals(false));}
	It(test3){Assert::That(lessThan100(0, 59), Equals(true));}
	It(test4){Assert::That(lessThan100(78, 35), Equals(false));}
	It(test5){Assert::That(lessThan100(63, 11), Equals(true));}
	It(test6){Assert::That(lessThan100(37, 99), Equals(false));}
	It(test7){Assert::That(lessThan100(52, 11), Equals(true));}
	It(test8){Assert::That(lessThan100(82, 95), Equals(false));}
	It(test9){Assert::That(lessThan100(17, 44), Equals(true));}
	It(test10){Assert::That(lessThan100(74, 53), Equals(false));}
	It(test11){Assert::That(lessThan100(3, 77), Equals(true));}
	It(test12){Assert::That(lessThan100(25, 80), Equals(false));}
	It(test13){Assert::That(lessThan100(59, 28), Equals(true));}
	It(test14){Assert::That(lessThan100(69, 87), Equals(false));}
	It(test15){Assert::That(lessThan100(10, 45), Equals(true));}
	It(test16){Assert::That(lessThan100(43, 58), Equals(false));}
	It(test17){Assert::That(lessThan100(50, 44), Equals(true));}
	It(test18){Assert::That(lessThan100(74, 89), Equals(false));}
	It(test19){Assert::That(lessThan100(3, 27), Equals(true));}
	It(test20){Assert::That(lessThan100(21, 79), Equals(false));}
};