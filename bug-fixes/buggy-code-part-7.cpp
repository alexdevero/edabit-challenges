std::pair<int, int> swap(int a, int b) {
	int temp = a;
	a = b;
	b = temp;
	return {a, b};
}

Describe(swap_){
It(test1){Assert::That(swap(100, 200), Equals(std::pair<int, int>{200, 100}));}
It(test2){Assert::That(swap(44, 33), Equals(std::pair<int, int>{33, 44}));}
It(test3){Assert::That(swap(21, 12), Equals(std::pair<int, int>{12, 21}));}
It(test4){Assert::That(swap(10, 20), Equals(std::pair<int, int>{20, 10}));}
};
//Mubashir