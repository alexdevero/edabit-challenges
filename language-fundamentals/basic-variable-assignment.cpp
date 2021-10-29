std::string nameString(std::string name) {
	std::string b = "Edabit";
	std::string result = name + b;
	return result;
}

Describe(nameString_){
It(test1){Assert::That(nameString("Mubashir"), Equals("MubashirEdabit"));}
It(test2){Assert::That(nameString("Matt"), Equals("MattEdabit"));}
It(test3){Assert::That(nameString("C++"), Equals("C++Edabit"));}
It(test4){Assert::That(nameString("Airforce"), Equals("AirforceEdabit"));}
};