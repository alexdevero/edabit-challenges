std::string has_bugs(bool buggy_code) {
	if (buggy_code) {
		return "sad days";
	} else {
		return "it's a good day";
	}
}

Describe(has_bugs_){
It(test1){Assert::That(has_bugs(true), Equals("sad days"));}
It(test2){Assert::That(has_bugs(false), Equals("it's a good day"));}
};