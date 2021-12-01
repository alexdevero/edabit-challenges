double absolute(double n) {
	return n > 0 ? n : n * -1;
}

Describe(absolute_tests)
{
  It(test1){Assert::That(absolute(0), Equals(0));}
  It(test2){Assert::That(absolute(20.5), Equals(20.5));}
  It(test3){Assert::That(absolute(-250), Equals(250));}
	It(test4){Assert::That(absolute(-5), Equals(5));}
	It(test5){Assert::That(absolute(-3.14), Equals(3.14));} 
};