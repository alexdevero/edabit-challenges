bool andAnd(bool a, bool b){
	return a && b;
}

Describe (and_operator) {
	It(test1){Assert::That(andAnd(true, true), Equals(true));}
	It(test2){Assert::That(andAnd(true, false), Equals(false));}
	It(test3){Assert::That(andAnd(false, true), Equals(false));}
	It(test4){Assert::That(andAnd(false, false), Equals(false));}
};