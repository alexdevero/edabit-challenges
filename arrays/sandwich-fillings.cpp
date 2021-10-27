bool hasSameBread(std::vector<std::string> arr1, std::vector<std::string> arr2) {
	return arr1[0] == arr2[0] && arr1[2] == arr2[2];
}

Describe(hasSameBread_){
It(test1){Assert::That(hasSameBread(
	{"white bread", "lettuce", "white bread"},
	{"white bread", "tomato", "white bread"}
), Equals(true));}

It(test2){Assert::That(hasSameBread(
	{"brown bread", "chicken", "brown bread"},
	{"white bread", "chicken", "white bread"}
), Equals(false));}

It(test3){Assert::That(hasSameBread(
	{"toast", "cheese", "toast"},
	{"brown bread", "cheese", "toast"}
), Equals(false));}

It(test4){Assert::That(hasSameBread(
	{"white bread", "lettuce", "toast"},
	{"white bread", "tomato", "toast"}
), Equals(true));}

It(test5){Assert::That(hasSameBread(
	{"white bread", "lettuce", "toast"},
	{"brown bread", "tomato", "toast"}
), Equals(false));}

It(test6){Assert::That(hasSameBread(
	{"white bread", "lettuce", "brown bread"},
	{"brown bread", "tomato", "white bread"}
), Equals(false));}

It(test7){Assert::That(hasSameBread(
	{"white bread", "lettuce", "brown bread"},
	{"white bread", "tomato", "white bread"}
), Equals(false));}
};