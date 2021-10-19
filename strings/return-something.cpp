#include <string>

std::string giveMeSomething(std::string a) {
	return "something " + a;
}

Describe(GiveMeSomething) {
  It(Tests) {
		Assert::That(giveMeSomething("a"), Equals("something a"));
		Assert::That(giveMeSomething("is cooking"), Equals("something is cooking"));
		Assert::That(giveMeSomething(" is cooking"), Equals("something  is cooking"));
	}
};