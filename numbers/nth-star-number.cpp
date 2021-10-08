int starNumber(int n) {
	return 6 * n * (n - 1) + 1;
}

Describe(starNumber_){
It(test1){Assert::That(starNumber(2), Equals(13));}
It(test2){Assert::That(starNumber(3), Equals(37));}
It(test3){Assert::That(starNumber(6), Equals(181));}
It(test4){Assert::That(starNumber(6), Equals(181));}
It(test5){Assert::That(starNumber(8), Equals(337));}
It(test6){Assert::That(starNumber(6), Equals(181));}
It(test7){Assert::That(starNumber(11), Equals(661));}
};