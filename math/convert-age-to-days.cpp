int calc_age(int age) {
	return age * 365;
}

Describe(Age_in_days_test) {
	It(youth){Assert::That(calc_age(10), Equals(3650));}
	It(New_born){Assert::That(calc_age(0), Equals(0));}
	It(Super_senior_citizen){Assert::That(calc_age(73), Equals(26645));}
	It(senior_citizen){Assert::That(calc_age(56), Equals(20440));}
	It(Adult){Assert::That(calc_age(18), Equals(6570));}
	It(Real_Adult){Assert::That(calc_age(21), Equals(7665));}
	It(retirement){Assert::That(calc_age(65), Equals(23725));}
};
