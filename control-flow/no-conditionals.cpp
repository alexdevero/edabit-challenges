int flip(int y) {
	return 1 - y;
}

Describe(flip_){
It(test1){Assert::That(flip(0), Equals(1));}
It(test2){Assert::That(flip(1), Equals(0));}
};
