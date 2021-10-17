bool dividesEvenly(int a, int b) {
	return a % b == 0;
}

Describe(tests)
{
  It(test1){Assert::That(dividesEvenly(98, 7), Equals(true));}
	It(test2){Assert::That(dividesEvenly(87, 49), Equals(false));}
	It(test3){Assert::That(dividesEvenly(34, 14), Equals(false));}
	It(test4){Assert::That(dividesEvenly(78, 6), Equals(true));}
	It(test5){Assert::That(dividesEvenly(30, 4), Equals(false));}
	It(test6){Assert::That(dividesEvenly(87, 73), Equals(false));}
	It(test7){Assert::That(dividesEvenly(74, 7), Equals(false));}
	It(test8){Assert::That(dividesEvenly(87, 29), Equals(true));}
	It(test9){Assert::That(dividesEvenly(48, 24), Equals(true));}
	It(test10){Assert::That(dividesEvenly(99, 20), Equals(false));}
	It(test11){Assert::That(dividesEvenly(98, 49), Equals(true));}
	It(test12){Assert::That(dividesEvenly(100, 6), Equals(false));}
	It(test13){Assert::That(dividesEvenly(64, 4), Equals(true));}
	It(test14){Assert::That(dividesEvenly(70, 35), Equals(true));}
	It(test15){Assert::That(dividesEvenly(38, 38), Equals(true));}
	It(test16){Assert::That(dividesEvenly(29, 3), Equals(false));}
	It(test17){Assert::That(dividesEvenly(20, 8), Equals(false));}
	It(test18){Assert::That(dividesEvenly(66, 50), Equals(false));}
	It(test19){Assert::That(dividesEvenly(95, 1), Equals(true));}
	It(test20){Assert::That(dividesEvenly(58, 2), Equals(true));}
};