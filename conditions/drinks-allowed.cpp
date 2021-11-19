bool shouldServeDrinks(int age, bool onBreak) {
	return age > 17 && !onBreak;
}

Describe(shouldServeDrinks_){
It(test1){Assert::That(shouldServeDrinks(17, true), Equals(false));}
It(test2){Assert::That(shouldServeDrinks(30, true), Equals(false));}
It(test3){Assert::That(shouldServeDrinks(24, false), Equals(true));}
It(test4){Assert::That(shouldServeDrinks(18, false), Equals(true));}
It(test5){Assert::That(shouldServeDrinks(3, false), Equals(false));}
};