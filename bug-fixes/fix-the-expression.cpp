bool isSeven(int x) {
	return x == 7;
}

Describe(isSeven_){
It(test1){Assert::That(isSeven(4), Equals(false) );}
It(test2){Assert::That(isSeven(9), Equals(false));}
It(test3){Assert::That(isSeven(7), Equals( true));}
It(test4){Assert::That(isSeven(10), Equals( false));}
It(test5){Assert::That(isSeven(20), Equals( false));}
It(test6){Assert::That(isSeven(7), Equals( true));}
};