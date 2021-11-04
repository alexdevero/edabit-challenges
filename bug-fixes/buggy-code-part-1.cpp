int cubes(int a) {
	return a * a * a;
}

Describe(basic_tests) {
	It(test1){Assert::That(cubes(2), Equals(8));}
	It(test2){Assert::That(cubes(3), Equals(27));}
	It(test3){Assert::That(cubes(4), Equals(64));}
	It(test4){Assert::That(cubes(5), Equals(125));}
	It(test5){Assert::That(cubes(10), Equals(1000));}
};
//Mubashir