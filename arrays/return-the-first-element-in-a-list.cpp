int getFirstValue(std::vector<int> arr) {
	return arr[0];
}

Describe(basic_tests) {
  It(test1){Assert::That(getFirstValue({1, 2, 3}), Equals(1));}
  It(test2){Assert::That(getFirstValue({80, 5, 100}), Equals(80));}
  It(test3){Assert::That(getFirstValue({-500, 0, 50}), Equals(-500));}
  It(test4){Assert::That(getFirstValue({75675, 5, 100}), Equals(75675));}
  It(test5){Assert::That(getFirstValue({-52320, 0, 50}), Equals(-52320));}
};