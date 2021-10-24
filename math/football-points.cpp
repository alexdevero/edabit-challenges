int footballPoints(int wins, int draws, int losses) {
	return 3 * wins + 1 * draws + losses * 0;
}

Describe(tests)
{
  It(test1){Assert::That(footballPoints(1, 2, 3), Equals(5));}
	It(test2){Assert::That(footballPoints(5, 5, 5), Equals(20));}
	It(test3){Assert::That(footballPoints(1, 0, 0), Equals(3));}
	It(test4){Assert::That(footballPoints(0, 0, 15), Equals(0));}
	It(test5){Assert::That(footballPoints(0, 7, 0), Equals(7));}
};