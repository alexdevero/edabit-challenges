#include <string>

bool isEmpty(std::string str) {
	return str.empty();
}

Describe(empty_string_validation)
{
	It(should_return_true)
	{
		Assert::That(isEmpty(""), Equals(true));  
	}
	It(should_return_false_even_for_strings_with_only_white_spaces)
	{
		Assert::That(isEmpty(" "), Equals(false));
		Assert::That(isEmpty("            "), Equals(false));
	}
	It(should_return_false_for_all_other_strings)
	{
		Assert::That(isEmpty("38215"), Equals(false));
		Assert::That(isEmpty("afjabsdf"), Equals(false));		
		Assert::That(isEmpty("!?@&"), Equals(false));	
	}
};