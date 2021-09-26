int convert(int minutes) {
	return minutes * 60;
}

Describe(tests)
{
  It(test1){Assert::That(convert(6), Equals(360));}
	It(test2){Assert::That(convert(4), Equals(240));}
	It(test3){Assert::That(convert(8), Equals(480));}
	It(test4){Assert::That(convert(60), Equals(3600));}
};