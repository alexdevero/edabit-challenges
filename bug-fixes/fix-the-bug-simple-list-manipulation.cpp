std::vector<int> incrementItems(std::vector<int> arr) {
	for (int i = 0; i < arr.size(); i++) {
		arr[i] = arr[i] + 1;
	}
	return arr;
}

Describe(incrementItems_){
It(test1){Assert::That(incrementItems({0, 1, 2, 3}), Equals(std::vector<int> {1, 2, 3, 4}));}
It(test2){Assert::That(incrementItems({2, 4, 6, 8}), Equals(std::vector<int> {3, 5, 7, 9}));}
It(test3){Assert::That(incrementItems({-1, -2, -3, -4}), Equals(std::vector<int> {0, -1, -2, -3}));}
};