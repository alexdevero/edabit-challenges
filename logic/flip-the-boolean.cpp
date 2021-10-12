int flipIntBool(int baseIntBoolean) {
	return !baseIntBoolean;
}

Describe (int_bool){
	It(test1){Assert::That(flipIntBool(1), Equals(0));}
	It(test2){Assert::That(flipIntBool(0), Equals(1));}
};