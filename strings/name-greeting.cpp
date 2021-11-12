std::string helloName(std::string name) {
	std::string str = "Hello " + name + "!";
	return str;
}

Describe(hello_name)
{
	It(Test1){Assert::That(helloName("Gerald"), Equals("Hello Gerald!"));}
	It(Test2){Assert::That(helloName("Fatima"), Equals("Hello Fatima!"));}
	It(Test3){Assert::That(helloName("Ed"), Equals("Hello Ed!"));}
	It(Test4){Assert::That(helloName("Tiffany"), Equals("Hello Tiffany!"));}
};