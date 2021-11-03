int valueAt(std::vector<int> arr, float i) {
	return arr[i];
}

Describe(valueAt_) {
	It(test1){Assert::That(valueAt({1, 2, 3, 4, 5, 6}, 10/2), Equals(6));}
	It(test2){Assert::That(valueAt({1, 2, 3, 4}, 6.535355314/2), Equals(4));}
	It(test3){Assert::That(valueAt({1, 2}, 1.0/2), Equals(1));}
	It(test4){Assert::That(valueAt({1, 2, 3, 4, 5, 6}, 8.0/2), Equals(5));}
};