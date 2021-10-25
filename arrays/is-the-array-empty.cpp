bool isEmpty(std::vector<int> arr) {
	return arr.empty();
}

Describe(isEmpty_){
It(test1){Assert::That(isEmpty({}), Equals(true));}
It(test2){Assert::That(isEmpty({1, 2, 3}), Equals(false));}
};