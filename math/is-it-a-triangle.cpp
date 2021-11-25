bool isTriangle(int a, int b, int c) {
	return !(a + b <= c || a + c <= b || b + c <= a);
}

Describe(isTriangle_){
It(test1){Assert::That(isTriangle(4, 5, 6), Equals(true));}
It(test2){Assert::That(isTriangle(3, 4, 6), Equals(true));}
It(test3){Assert::That(isTriangle(2, 5, 7), Equals(false));}
It(test4){Assert::That(isTriangle(2, 5, 9), Equals(false));}
It(test5){Assert::That(isTriangle(2, 9, 5), Equals(false));}
It(test6){Assert::That(isTriangle(9, 2, 5), Equals(false));}
It(test7){Assert::That(isTriangle(11, 12, 20), Equals(true));}
It(test8){Assert::That(isTriangle(14, 3, 12), Equals(true));}
It(test9){Assert::That(isTriangle(23, 4, 28), Equals(false));}
It(test10){Assert::That(isTriangle(21, 4, 25), Equals(false));}
};