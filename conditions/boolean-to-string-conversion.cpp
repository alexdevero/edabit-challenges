std::string boolToString(bool flag){
	return flag ? "true"  : "false";
}

Describe(boolToString_) {
	It(test1){Assert::That(boolToString(true), Equals("true"));}
	It(test2){Assert::That(boolToString(false), Equals("false"));}
};