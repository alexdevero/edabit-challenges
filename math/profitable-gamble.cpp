bool profitableGamble(float prob, int prize, float pay) {
	return (prob * prize) > pay;
}

Describe(profitable_gamble)
{
  It(test1){Assert::That(profitableGamble(0.2, 50, 9), Equals(true));}
	It(test2){Assert::That(profitableGamble(0.9, 1, 2), Equals(false));}
	It(test3){Assert::That(profitableGamble(0.9, 3, 2), Equals(true));}
	It(test4){Assert::That(profitableGamble(0.33, 10, 3.30), Equals(true));}
	It(test5){Assert::That(profitableGamble(0, 1000, 0.01), Equals(false));}
	It(test6){Assert::That(profitableGamble(0.1, 1000, 7), Equals(true));}
	It(test7){Assert::That(profitableGamble(0, 0, 0), Equals(false));}
};