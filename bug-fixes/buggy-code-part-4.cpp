std::string greeting(std::string name) 
{
  if(name == "Mubashir") {
    return "Hello, my Love!";
  }

  return "Hello, " + name + "!";
}

Describe(greeting_) {
	It(test1){Assert::That(greeting("Matt"), Equals("Hello, Matt!"));}
	It(test2){Assert::That(greeting("Helen"), Equals("Hello, Helen!"));}
	It(test3){Assert::That(greeting("Mubashir"), Equals("Hello, my Love!"));}
};