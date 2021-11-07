bool oddOrEven(std::string s) {
	return s.size() % 2 == 0;
}

Describe(oddOrEven_){
It(test1){Assert::That(oddOrEven("apples"), Equals(true));}
It(test2){Assert::That(oddOrEven("banana"), Equals(true));}
It(test3){Assert::That(oddOrEven("cherry"), Equals(true));}
It(test4){Assert::That(oddOrEven("mango"), Equals(false));}
It(test5){Assert::That(oddOrEven("peach"), Equals(false));}
It(test6){Assert::That(oddOrEven("pears"), Equals(false));}
};