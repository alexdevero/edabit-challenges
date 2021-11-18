#include <cmath>;

int returnNegative(int n) {
	return abs(n) * -1;
}

Describe(returnNegative_) {
	It(test1){Assert::That(returnNegative(4), Equals(-4));}
	It(test2){Assert::That(returnNegative(15), Equals(-15));}
	It(test3){Assert::That(returnNegative(-4), Equals(-4));}
	It(test4){Assert::That(returnNegative(42), Equals(-42));}
	It(test5){Assert::That(returnNegative(-9), Equals(-9));}
	It(test6){Assert::That(returnNegative(0), Equals(0));}
	It(test7){Assert::That(returnNegative(1), Equals(-1));}
	It(test8){Assert::That(returnNegative(-1), Equals(-1));}
};